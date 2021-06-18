import glob
import os
import json
import textgrid
from scipy.io import wavfile
import numpy

# Constants
PAART_DATASET_DIR = 'praat_dataset'
DATASET_DIR = 'dataset'
NO_OF_MEETINGS = 16
USE_PRAAT_TO_SYLLABLES = False

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
  return meetings[0:NO_OF_MEETINGS]

def float_round(num, places = 5):
  # print(num)
  return round(num * (10**places)) / float(10**places)

class Meeting:
  def __init__(self, meeting_id):
    self.meeting_id = meeting_id
    self.meeting_dir = f'{DATASET_DIR}/{self.meeting_id}'
    self.praat_meeting_dir = f'{PAART_DATASET_DIR}/{self.meeting_id}'
    self.audio_file_path = f'{DATASET_DIR}/{self.meeting_id}/audio.wav'
    self.speakers = []
    self.transcript = []
    self.praat_res = {}
    self.phonetics_features = {}
    self.load_transcript()
    self.load_praat_result()
    self.audio_sample_rate, self.audio_data = wavfile.read(self.audio_file_path)

    print('\n')
    print(f'Initializing Meeting {self.meeting_id}')

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

  def getFrequecy(self, start_time, end_time):
    start_point = int(self.audio_sample_rate * start_time / 1000)
    end_point = int(self.audio_sample_rate * end_time / 1000)
    length = (end_time - start_time) / 1000
    counter = 0
    for i in range(start_point, end_point):
        if self.audio_data[i] < 0 and self.audio_data[i+1] > 0:
            counter += 1
    if counter == 0:
      counter += 1
    if length == 0.0:
      length += 1
    return float_round(counter/length)
    
  def calculateSTE(self, act_id):
    window_size = 0.1

    dialog_act = None
    for act in self.transcript:
      if act['id'] == act_id:
        dialog_act = act
        break
    
    end_time = dialog_act['end_time']
    STE = 0
    for start_time in numpy.arange(dialog_act['start_time'], end_time, window_size):
      freq = self.getFrequecy(start_time, end_time)
      STE += freq ** 2
    return float_round(STE)
    
    
  """
  Load Praat Phonetics Features
  """
  def load_praat_result(self):
    # with open(f'{self.praat_meeting_dir}/video_meta.json') as res:
    #   audio_speaker_map = json.load(res)
    audio_speaker_map = {
      "A": {
        "path": f"{self.meeting_id}_Headset-0.TextGrid"
      },
      "B": {
        "path": f"{self.meeting_id}_Headset-1.TextGrid"
      },
      "C": {
        "path": f"{self.meeting_id}_Headset-2.TextGrid"
      },
      "D": {
        "path": f"{self.meeting_id}_Headset-3.TextGrid"
      }
    }

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

    if totalTime == 0:
      print(f'Total Time is 0 for {act_id}')
    return float_round(totalTime)

  def getPhonationTime(self, act_id):
    dialog_act = None
    for act in self.transcript:
      if act['id'] == act_id:
        dialog_act = act
        break
    if dialog_act == None:
      print(f'Dialog Act {act_id} Not Found.')

    speaker = dialog_act['speaker_id']
    silences = self.praat_res[speaker]['silences']
    speaking_time = dialog_act['end_time'] - dialog_act['start_time']
    # print(speaker, dialog_act)

    # print(dialog_act)
    if speaking_time < 0.1:
      return speaking_time
    phonationTime = 0.00
    for silence in silences:
      if silence['type'] == 'sounding':
        # print(silence)
        # if silence['start'] >= dialog_act['start_time'] and silence['end'] <= dialog_act['end_time']:
        #   phonationTime  += silence['end'] - silence['start']
        if silence['start'] <= dialog_act['start_time'] <= silence['end'] <= dialog_act['end_time']:
            phonationTime += silence['end'] - dialog_act['start_time']
        elif dialog_act['start_time'] >= silence['start'] and dialog_act['end_time'] <= silence['end']:
            phonationTime += dialog_act['end_time'] - dialog_act['start_time']
        elif dialog_act['start_time'] <= silence['start'] <= dialog_act['end_time'] and dialog_act['end_time'] >= silence['end']:
            phonationTime += silence['end'] - silence['start']
        elif dialog_act['start_time'] <= silence['start'] <= dialog_act['end_time'] <= silence['end']:
            phonationTime += dialog_act['end_time'] - silence['start']
        elif dialog_act['start_time'] == silence['start'] and dialog_act['end_time'] == silence['end']:
            phonationTime += dialog_act['end_time'] - dialog_act['start_time']
    
    
    if phonationTime == 0:
      print(f'Phonation time is 0 for {act_id}')
    return float_round(phonationTime)

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
        SilentPauses += 1

    # if SilentPauses == 0:
    #   print(f'Silent Pauses is 0 for {act_id}')
    return SilentPauses

  def getNoOfSyllables(self, act_id):
    dialog_act = None
    for act in self.transcript:
      if act['id'] == act_id:
        dialog_act = act
        break
    # print(dialog_act)
    
    if not USE_PRAAT_TO_SYLLABLES:
      acts = dialog_act['act'].lower().replace('\'', '').replace('.', '').replace(',', '').replace('?', '').strip().split(' ')
      count = 0
      vowels = "aeiouy"
      for word in acts:
        if len(word) == 0:
          continue
        if word[0] in vowels:
            count += 1
        for index in range(1, len(word)):
            if word[index] in vowels and word[index - 1] not in vowels:
                count += 1
        if word.endswith("e"):
            count -= 1
      return count if count > 0 else 1

    speaker = dialog_act['speaker_id']
    syllables = self.praat_res[speaker]['syllables']

    # print(dialog_act)
    NoOfSyllables = 0
    for syllable in syllables:
      if syllable >= dialog_act['start_time'] and syllable <= dialog_act['end_time']:
        # print(syllable)
        NoOfSyllables += 1

    if NoOfSyllables == 0:
      print(f'No of Syllables is 0 for {act_id}', dialog_act)
    return NoOfSyllables

  """
    Get Meeting Transcript

    :return: Meeting Transcript dict
  """
  def get_transcript(self):
    print(f'{self.meeting_id}: Getting Transcript')
    return self.transcript

  def getSpeechRate(self, act_id):
    total_time = self.getTotalTime(act_id)
    if total_time == 0:
      return 1
    return float_round(self.getNoOfSyllables(act_id) / total_time)

  def getArticulationRate(self, act_id):
    phonation_time = self.getPhonationTime(act_id)
    if phonation_time == 0:
      return 0
    return float_round(self.getNoOfSyllables(act_id) / phonation_time)

  def getPhonationTimeRatio(self, act_id):
    total_time = self.getTotalTime(act_id)
    # if self.getPhonationTime(act_id) / total_time > 1:
    #   print(act_id, self.getPhonationTime(act_id), total_time)
      # exit(0)
    if total_time == 0:
      return 1
    return float_round(self.getPhonationTime(act_id) / total_time)

  def getMeanLengthOfRuns(self, act_id):
    return float_round(self.getSilentPauses(act_id) / self.getNoOfSyllables(act_id))

  def getSilentPausesRate(self, act_id):
    total_time = self.getTotalTime(act_id)
    if total_time == 0:
      return 0
    return float_round(self.getSilentPauses(act_id) / total_time)

  def getMPD(self, act_id):
    return float_round((self.getTotalTime(act_id) - self.getPhonationTime(act_id)) / self.getNoOfSyllables(act_id))

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
          'short_term_energy': meeting.calculateSTE(id),
          'speech_rate': meeting.getSpeechRate(id),
          'articulation_rate': meeting.getArticulationRate(id),
          'phonation_time_ratio': meeting.getPhonationTimeRatio(id),
          'mean_length_of_runs': meeting.getMeanLengthOfRuns(id),
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