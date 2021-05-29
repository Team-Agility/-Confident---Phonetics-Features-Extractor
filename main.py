import glob
import os
import json
import textgrid

# Constants
PAART_DATASET_DIR = 'praat_dataset'
DATASET_DIR = 'dataset'

"""
  Get All Dataset's Meeting IDs
  
  :return: String Array with Meeting IDs
"""
def GetAllMeetingIDs():
  files = [os.path.basename(folder_path) for folder_path in glob.glob(f'{DATASET_DIR}/*')]
  meetings = []
  for file in files:
    if '.' not in file and len(file) == 7:
      meetings.append(file)
  return meetings[0:16]

class Meeting:
  def __init__(self, meeting_id):
    self.meeting_id = meeting_id
    self.meeting_dir = f'{DATASET_DIR}/{self.meeting_id}'
    self.praat_meeting_dir = f'{PAART_DATASET_DIR}/{self.meeting_id}'
    self.speakers = []
    self.transcript = []
    self.praat_res = {}
    self.phonetics_features = {}
    self.load_transcript()
    self.load_praat_result()

    print('\n')

  """
    Load Transcript
  """
  def load_transcript(self):
    with open(f'{self.meeting_dir}/transcript.json') as transcript_json:
      self.speakers = json.load(transcript_json)['speakers']
    with open(f'{self.meeting_dir}/dialog_acts.json') as transcript_json:
      self.transcript = json.load(transcript_json)['acts']

  """
    Get Speakers
  """
  def get_speakers(self):
    return self.speakers
    
  """
  Load Praat Phonetics Features
  """
  def load_praat_result(self):
    with open(f'{self.praat_meeting_dir}/video_meta.json') as res:
      audio_speaker_map = json.load(res)
    # audio_speaker_map = {
    #   "A": {
    #     "path": f"{self.meeting_id}_Headset-0.TextGrid"
    #   },
    #   "B": {
    #     "path": f"{self.meeting_id}_Headset-1.TextGrid"
    #   },
    #   "C": {
    #     "path": f"{self.meeting_id}_Headset-2.TextGrid"
    #   },
    #   "D": {
    #     "path": f"{self.meeting_id}_Headset-3.TextGrid"
    #   }
    # }
    for speaker in self.speakers:
      self.praat_res[speaker] = {
        'syllables': [],
        'silences': []
      }
      file = audio_speaker_map[speaker]['path']
      res = textgrid.TextGrid.fromFile(f'{self.praat_meeting_dir}/{file}')
      
      for syllable in res[0]:
        self.praat_res[speaker]['syllables'].append(float(syllable.time))
      self.praat_res[speaker]['syllables'].sort()

      for silence in res[1]:
        self.praat_res[speaker]['silences'].append({
          'start': float(silence.minTime),
          'end': float(silence.maxTime),
          'type': str(silence.mark)
        })
      
  def getTotalTime(self, act_id):
    dialog_act = None
    for act in self.transcript:
      if act['id'] == act_id:
        dialog_act = act
        break
    totalTime = dialog_act['end_time'] - dialog_act['start_time']
    return totalTime if totalTime > 0 else 0.01

  def getPhonationTime(self, act_id):
    dialog_act = None
    for act in self.transcript:
      if act['id'] == act_id:
        dialog_act = act
        break
    speaker = dialog_act['speaker_id']
    silences = self.praat_res[speaker]['silences']

    # print(dialog_act)
    phonationTime = 0.01
    for silence in silences:
      if silence['start'] >= dialog_act['start_time'] and silence['end'] <= dialog_act['end_time'] and silence['type'] == 'sounding':
        phonationTime  += dialog_act['end_time'] -  dialog_act['start_time']
      elif silence['end'] >= dialog_act['start_time'] and silence['start'] <= dialog_act['start_time'] and silence['type'] == 'sounding':
        phonationTime  += silence['end'] -  dialog_act['start_time']
      elif silence['end'] >= dialog_act['end_time'] and silence['start'] <= dialog_act['end_time'] and silence['type'] == 'sounding':
        phonationTime  += dialog_act['end_time'] -  silence['start']
      elif silence['end'] >= dialog_act['end_time'] and silence['start'] <= dialog_act['start_time'] and silence['type'] == 'sounding':
        phonationTime  += dialog_act['end_time'] -  dialog_act['start_time']
    return phonationTime

  def getSilentPauses(self, act_id):
    dialog_act = None
    for act in self.transcript:
      if act['id'] == act_id:
        dialog_act = act
        break
    speaker = dialog_act['speaker_id']
    silences = self.praat_res[speaker]['silences']

    # print(dialog_act)
    SilentPauses = 0
    for silence in silences:
      if silence['start'] >= dialog_act['start_time'] and silence['end'] <= dialog_act['end_time'] and silence['type'] == 'silent':
        # print(silence)
        SilentPauses  += 1
    return SilentPauses

  def getNoOfSyllables(self, act_id):
    dialog_act = None
    for act in self.transcript:
      if act['id'] == act_id:
        dialog_act = act
        break
    speaker = dialog_act['speaker_id']
    syllables = self.praat_res[speaker]['syllables']

    # print(dialog_act)
    NoOfSyllables = 1
    for syllable in syllables:
      if syllable >= dialog_act['start_time'] and syllable <= dialog_act['end_time']:
        # print(syllable)
        NoOfSyllables += 1
    return NoOfSyllables

  """
    Get Meeting Transcript

    :return: Meeting Transcript dict
  """
  def get_transcript(self):
    print(f'{self.meeting_id}: Getting Transcript')
    return self.transcript

  def getSpeechRate(self, act_id):
    return self.getNoOfSyllables(act_id) / self.getTotalTime(act_id)

  def getArticulationRate(self, act_id):
    return self.getNoOfSyllables(act_id) / self.getPhonationTime(act_id)

  def getPhonationTimeRatio(self, act_id):
    return self.getPhonationTime(act_id) / self.getTotalTime(act_id)

  def getMeanLengthOfRuns(self, act_id):
    return self.getSilentPauses(act_id) / self.getNoOfSyllables(act_id)

  def getSilentPausesRate(self, act_id):
    return self.getSilentPauses(act_id) / self.getTotalTime(act_id)

  def getMPD(self, act_id):
    return (self.getTotalTime(act_id) - self.getPhonationTime(act_id)) / self.getNoOfSyllables(act_id)

  # def getMSD(self, act_id):
  #   return self.getNoOfSyllables(act_id) / self.getPhonationTime(act_id)

for meeting_id in GetAllMeetingIDs():
    meeting = Meeting(meeting_id)
    transcript = meeting.get_transcript()
    
    newTranscript = []
    for dialog_act in transcript:
      id = dialog_act['id']
      newTranscript.append({
        'id': id,
        'act': dialog_act['act'],
        'start_time': dialog_act['start_time'],
        'end_time': dialog_act['end_time'],
        'speaker_id': dialog_act['speaker_id'],
        'measures': {
          'speech_rate': meeting.getSpeechRate(id),
          'get_articulation_rate': meeting.getArticulationRate(id),
          'get_phonation_time_ratio': meeting.getPhonationTimeRatio(id),
          'get_mean_length_of_runs': meeting.getMeanLengthOfRuns(id),
          'silent_pauses_rate': meeting.getSilentPausesRate(id),
          'MPD': meeting.getMPD(id),
        },
        'phonetics_features': {
          'total_time': meeting.getTotalTime(id),
          'articulation_rate': meeting.getArticulationRate(id),
          'silent_pauses': meeting.getSilentPauses(id),
          'total_syllables': meeting.getNoOfSyllables(id),
          'phonation_time': meeting.getPhonationTime(id)
        }
      })
    
    with open(f'{DATASET_DIR}/{meeting_id}/phonetics_features.json', 'w') as f:
        json.dump(newTranscript, f, indent=4)