import json
import glob
import os

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
      break
  return meetings[0:16]

class Meeting:
  def __init__(self, meeting_id):
    self.meeting_id = meeting_id
    self.meeting_dir = f'{DATASET_DIR}/{self.meeting_id}'
    self.phonetic_features = []
    self.average_speech_rate = {}
    self.average_articulation_rate = {}
    self.average_phonation_time_ratio = {}
    self.average_MPD = {}

    self.loadPhoneticFeatures()

    print('\n')

  """
    Phonetic Features
  """
  def loadPhoneticFeatures(self):
    with open(f'{self.meeting_dir}/transcript.json') as transcript_json:
      self.speakers = json.load(transcript_json)['speakers']
    with open(f'{self.meeting_dir}/phonetics_features.json') as f:
      self.phonetic_features = json.load(f)

  def getConfidents(self):
    with open(f'{self.meeting_dir}/confidence.json') as f:
      return json.load(f)

  def getPhoneticFeatures(self):
    return self.phonetic_features

  def findAverageSpeechRate(self):
    for speaker in self.speakers:
      total_syllables = 0
      total_time_duration = 0
      for act in self.phonetic_features:
        if act['speaker_id'] == speaker:
          total_syllables += act['phonetics_features']['total_syllables']
          total_time_duration += act['phonetics_features']['total_time']

      self.average_speech_rate[speaker] = total_syllables / total_time_duration
    return self.average_speech_rate

  def findAverageArticulationRate(self):
    for speaker in self.speakers:
      total_phonation_time = 0
      total_syllables = 0
      for act in self.phonetic_features:
        if act['speaker_id'] == speaker:
          total_phonation_time += act['phonetics_features']['phonation_time']
          total_syllables += act['phonetics_features']['total_syllables']

      self.average_articulation_rate[speaker] = total_syllables / total_phonation_time
    return self.average_articulation_rate

  def findAveragephonationTimeRatio(self):
    for speaker in self.speakers:
      total_time = 0
      total_phonation_time = 0
      for act in self.phonetic_features:
        if act['speaker_id'] == speaker:
          total_time += act['phonetics_features']['total_time']
          total_phonation_time += act['phonetics_features']['phonation_time']

      self.average_phonation_time_ratio[speaker] = total_phonation_time / total_time
    return self.average_phonation_time_ratio
    
  def findAverageMPD(self):
    for speaker in self.speakers:
      total_sielences = 0
      total_syllables = 0
      for act in self.phonetic_features:
        if act['speaker_id'] == speaker:
          total_sielences += act['phonetics_features']['total_time'] - act['phonetics_features']['phonation_time']
          total_syllables += act['phonetics_features']['total_syllables']

      self.average_MPD[speaker] = total_sielences / total_syllables
    return self.average_MPD

for meeting_id in GetAllMeetingIDs():
  meeting = Meeting(meeting_id)
  phonetic_features = meeting.getPhoneticFeatures()
  # print(phonetic_features)

  confidence = meeting.getConfidents()
  dataset = []
  avg_speech_rate = meeting.findAverageSpeechRate()
  avg_articulation_rate = meeting.findAverageArticulationRate()
  avg_phonation_time = meeting.findAveragephonationTimeRatio()
  avg_mpd = meeting.findAverageMPD()
  for act in phonetic_features:
    dataset.append({
      'speech_rate': act['measures']['speech_rate'] / avg_speech_rate[act['speaker_id']],
      'articulation_rate': act['measures']['get_articulation_rate'] / avg_articulation_rate[act['speaker_id']],
      'phonation_time_ratio': act['measures']['get_phonation_time_ratio'] / avg_phonation_time[act['speaker_id']],
      'MPD': act['measures']['MPD'] / avg_mpd[act['speaker_id']],
      'confidence': int(confidence[str(act['id'])])
    })

  import pandas  as pd #Data manipulation
  import numpy as np #Data manipulation
  import matplotlib.pyplot as plt # Visualization
  import seaborn as sns #Visualization

  plt.rcParams['figure.figsize'] = [8,5]
  plt.rcParams['font.size'] =14
  plt.rcParams['font.weight']= 'bold'
  plt.style.use('seaborn-whitegrid')

  df = pd.DataFrame(dataset)
  print('\nNumber of rows and columns in the data set: ', df.shape)
  print(df.head())
  print('')

  # sns.lmplot(x='speech_rate', y='confidence', data=df, aspect=2, height=6)
  # plt.xlabel('Speech Rate (words/s)')
  # plt.ylabel('Confidence')
  # plt.title('Confidence vs Speeach Rate')
  # plt.show()

  # sns.lmplot(x='articulation_rate', y='confidence', data=df, aspect=2, height=6)
  # plt.xlabel('articulation_rate')
  # plt.ylabel('Confidence')
  # plt.title('Confidence vs articulation_rate')
  # plt.show()

  f, ax = plt.subplots(figsize=(10,4))
  plt.scatter(y=df['confidence'], x=df['MPD'],color='orange')
  plt.xlabel('MPD')
  plt.ylabel('Confidence')
  plt.title('Confidence vs MPD')
  plt.show()

  f, ax = plt.subplots(figsize=(10,4))
  plt.xlabel('Speech Rate (words/s)')
  plt.ylabel('Confidence')
  plt.title('Confidence vs Speeach Rate')
  plt.scatter(y=df['confidence'], x=df['speech_rate'],color='red')
  plt.show()

  f, ax = plt.subplots(figsize=(10,4))
  plt.scatter(y=df['confidence'], x=df['articulation_rate'],color='Green')
  plt.xlabel('Articulation Rate')
  plt.ylabel('Confidence')
  plt.title('Confidence vs Articulation Rate')
  plt.show()

  f, ax = plt.subplots(figsize=(10,4))
  plt.scatter(y=df['confidence'], x=df['phonation_time_ratio'],color='blue')
  plt.xlabel('Phonation Time Ratio')
  plt.ylabel('Confidence')
  plt.title('Confidence vs Phonation Time Ratio')
  plt.show()
