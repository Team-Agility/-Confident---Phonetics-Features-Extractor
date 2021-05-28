import glob
import os
import json
import textgrid

# Constants
PAART_DATASET_DIR = 'praat_dataset'
DATASET_DIR = 'dataset'

"""
  Get All Dataset's Meeting IDsW
  
  :return: String Array with Meeting IDs
"""
def GetAllMeetingIDs():
  files = [os.path.basename(folder_path) for folder_path in glob.glob(f'{DATASET_DIR}/*')]
  meetings = []
  for file in files:
    if '.' not in file and len(file) == 7:
      meetings.append(file)
      break
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
      self.transcript = json.load(transcript_json)

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
      
  """
    Get Meeting Transcript

    :return: Meeting Transcript dict
  """
  def get_transcript(self):
    print(f'{self.meeting_id}: Getting Transcript')
    return self.transcript

for meeting_id in GetAllMeetingIDs():
    meeting = Meeting(meeting_id)
    # print(meeting.get_transcript())
    # print(meeting.get_speakers())
    