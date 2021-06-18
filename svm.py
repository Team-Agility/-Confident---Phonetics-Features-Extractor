import pandas  as pd #Data manipulation
import numpy as np #Data manipulation
import os
import glob
import json
import math

DATASET_DIR = 'dataset'


Labelled_Dataset = ['ES2002a', 'ES2003a', 'ES2004a', 'ES2005a']

"""
  Get All Dataset's Meeting IDs
  
  :return: String Array with Meeting IDs
"""
def GetLabellingMeetingIDs(Labelled_Dataset):
  files = [os.path.basename(folder_path) for folder_path in glob.glob(f'{DATASET_DIR}/*')]
  meetings = []
  for file in files:
    if '.' not in file and len(file) == 7:
      if file not in Labelled_Dataset:
        meetings.append(file)
      # break
  return meetings

Labelling_Dataset = GetLabellingMeetingIDs(Labelled_Dataset)

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

  def labelConfidences(self, clf):
    res = {}
    for da in self.phonetic_features:
      out = clf.predict([[da['measures']['short_term_energy'], da['measures']['speech_rate'], da['measures']['articulation_rate'], da['measures']['phonation_time_ratio'], da['measures']['MPD']]])
      res[da['id']]= str(out[0])
    with open(f'{self.meeting_dir}/confidence.json', 'w') as f:
        json.dump(res, f, ensure_ascii=False, indent=4)

dataset = []
for meeting_id in Labelled_Dataset:
  meeting = Meeting(meeting_id)
  phonetic_features = meeting.getPhoneticFeatures()
  # print(phonetic_features)

  confidence = meeting.getConfidents()
  avg_speech_rate = meeting.findAverageSpeechRate()
  avg_articulation_rate = meeting.findAverageArticulationRate()
  avg_phonation_time = meeting.findAveragephonationTimeRatio()
  avg_mpd = meeting.findAverageMPD()
  for act in phonetic_features:
    if str(act['id']) in confidence:
        dataset.append({
            'short_term_energy': act['measures']['short_term_energy'],
            'speech_rate': (act['measures']['speech_rate'] / avg_speech_rate[act['speaker_id']]) / 1,
            'articulation_rate': act['measures']['articulation_rate'] / avg_articulation_rate[act['speaker_id']],
            'phonation_time_ratio': act['measures']['phonation_time_ratio'] / avg_phonation_time[act['speaker_id']],
            'MPD': (act['measures']['MPD'] / avg_mpd[act['speaker_id']]),
            'confidence': int(confidence[str(act['id'])])
        })

df = pd.DataFrame(dataset)
print('\nNumber of rows and columns in the data set: ', df.shape)
print(df.head())
print('')

y_t = np.array(df['confidence'])
X_t = df
X_t = df.drop(['confidence'],axis=1)
X_t = np.array(X_t)

print("shape of Y :" + str(y_t.shape))
print("shape of X :" + str(X_t.shape))

from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
X_t = scaler.fit_transform(X_t)

from sklearn.svm import SVC

clf = SVC(kernel='linear',C=60).fit(X_t,y_t)

for meeting_id in Labelling_Dataset:
  meeting = Meeting(meeting_id)
  meeting.labelConfidences(clf)