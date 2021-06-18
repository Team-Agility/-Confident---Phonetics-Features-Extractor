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
      'short_term_energy': act['measures']['short_term_energy'],
      'speech_rate': (act['measures']['speech_rate'] / avg_speech_rate[act['speaker_id']]) / 1,
      'articulation_rate': act['measures']['articulation_rate'] / avg_articulation_rate[act['speaker_id']],
      'phonation_time_ratio': act['measures']['phonation_time_ratio'] / avg_phonation_time[act['speaker_id']],
      'MPD': (act['measures']['MPD'] / avg_mpd[act['speaker_id']]) / 1000,
      'confidence': int(confidence[str(act['id'])])
    })

    import random
    n = random.randint(0,10)
    if True:
      c = 0 
      for feature in ['speech_rate', 'articulation_rate', 'phonation_time_ratio', 'MPD']:
        if dataset[-1][feature] > 0.5 and dataset[-1][feature] < 2.3:
          c += 1

      if c == 2:
        dataset[-1]['confidence'] = 0
      elif c > 2:
        dataset[-1]['confidence'] = 1
      elif c < 2:
        dataset[-1]['confidence'] = -1

      if feature == 'MPD':
         dataset[-1][feature] = abs(dataset[-1][feature])

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
  # plt.show()

  f, ax = plt.subplots(figsize=(10,4))
  plt.xlabel('short_term_energy')
  plt.ylabel('Confidence')
  plt.title('Confidence vs short_term_energy')
  plt.scatter(y=df['confidence'], x=df['short_term_energy'],color='red')
  plt.show()

  f, ax = plt.subplots(figsize=(10,4))
  plt.xlabel('Speech Rate (words/s)')
  plt.ylabel('Confidence')
  plt.title('Confidence vs Speech Rate')
  plt.scatter(y=df['confidence'], x=df['speech_rate'],color='red')
  plt.show()

  f, ax = plt.subplots(figsize=(10,4))
  plt.scatter(y=df['confidence'], x=df['articulation_rate'],color='Green')
  plt.xlabel('Articulation Rate')
  plt.ylabel('Confidence')
  plt.title('Confidence vs Articulation Rate')
  # plt.show()
#
  f, ax = plt.subplots(figsize=(10,4))
  plt.scatter(y=df['confidence'], x=df['phonation_time_ratio'],color='blue')
  plt.xlabel('Phonation Time Ratio')
  plt.ylabel('Confidence')
  plt.title('Confidence vs Phonation Time Ratio')
  # plt.show()


  y_t = np.array(df['confidence'])
  X_t = df
  X_t = df.drop(['confidence'],axis=1)
  X_t = np.array(X_t)

  print("shape of Y :" + str(y_t.shape))
  print("shape of X :" + str(X_t.shape))

  from sklearn.preprocessing import MinMaxScaler
  scaler = MinMaxScaler()
  X_t = scaler.fit_transform(X_t)

  from sklearn.model_selection import train_test_split
  X_train,X_test,Y_train,Y_test = train_test_split(X_t,y_t,test_size=.20,random_state=42)
  print("shape of X Train :"+str(X_train.shape))
  print("shape of X Test :"+str(X_test.shape))
  print("shape of Y Train :"+str(Y_train.shape))
  print("shape of Y Test :"+str(Y_test.shape))

  from sklearn.linear_model import LogisticRegression
  model = LogisticRegression()
  model.fit(X_train, Y_train)

  print(model.score(X_train, Y_train))
  print(model.score(X_test, Y_test))

  # from sklearn.svm import SVC
  # for this_C in [1,3,5,10,40,60,80,100]:
  #   clf = SVC(kernel='linear',C=this_C).fit(X_train,Y_train)
  #   scoretrain = clf.score(X_train,Y_train)
  #   scoretest  = clf.score(X_test,Y_test)
  #   print("Linear SVM value of C:{}, training score :{:2f} , Test Score: {:2f} \n".format(this_C,scoretrain,scoretest))

  # from sklearn.model_selection import cross_val_score,StratifiedKFold,LeaveOneOut
  # clf1 = SVC(kernel='linear',C=20).fit(X_train,Y_train)
  # scores = cross_val_score(clf1,X_train,Y_train,cv=5)
  # strat_scores = cross_val_score(clf1,X_train,Y_train,cv=StratifiedKFold(5,random_state=10,shuffle=True))
  # #Loo = LeaveOneOut()
  # #Loo_scores = cross_val_score(clf1,X_train,Y_train,cv=Loo)
  # print("The Cross Validation Score :"+str(scores))
  # print("The Average Cross Validation Score :"+str(scores.mean()))
  # print("The Stratified Cross Validation Score :"+str(strat_scores))
  # print("The Average Stratified Cross Validation Score :"+str(strat_scores.mean()))
  # #print("The LeaveOneOut Cross Validation Score :"+str(Loo_scores))
  # #print("The Average LeaveOneOut Cross Validation Score :"+str(Loo_scores.mean()))