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
      'articulation_rate': act['measures']['get_articulation_rate'] / avg_articulation_rate[act['speaker_id']],
      'phonation_time_ratio': act['measures']['get_phonation_time_ratio'] / avg_phonation_time[act['speaker_id']],
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
#   plt.show()

  f, ax = plt.subplots(figsize=(10,4))
  plt.xlabel('Speech Rate (words/s)')
  plt.ylabel('Confidence')
  plt.title('Confidence vs Speech Rate')
  plt.scatter(y=df['confidence'], x=df['speech_rate'],color='red')
#   plt.show()

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
  X_train,X_test,Y_train,Y_test = train_test_split(X_t,y_t,test_size = 0.2, random_state = 0)
  print("shape of X Train :"+str(X_train.shape))
  print("shape of X Test :"+str(X_test.shape))
  print("shape of Y Train :"+str(Y_train.shape))
  print("shape of Y Test :"+str(Y_test.shape))
  X_train,X_test,Y_train,Y_test = pd.DataFrame(X_train), pd.DataFrame(X_test), pd.DataFrame(Y_train), pd.DataFrame(Y_test)
     

X_train.shape, X_test.shape

# X_train.dtypes
# X_train.isnull().sum()
# X_test.isnull().sum()
for col in X_train.columns:
    if X_train[col].isnull().mean()>0:
        print(col, round(X_train[col].isnull().mean(),4))

for df1 in [X_train, X_test]:
    for col in X_train.columns:
        col_median=X_train[col].median()
        df1[col].fillna(col_median, inplace=True)  

X_train.isnull().sum()         
      
X_test.isnull().sum()

X_train.head()
X_test.head()

cols = X_train.columns
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

X_train = scaler.fit_transform(X_train)

X_test = scaler.transform(X_test)
X_train = pd.DataFrame(X_train, columns=[cols])
X_test = pd.DataFrame(X_test, columns=[cols])
X_train.head()

# import KNeighbors ClaSSifier from sklearn
from sklearn.neighbors import KNeighborsClassifier


# instantiate the model
knn = KNeighborsClassifier(n_neighbors=3)


# fit the model to the training set
knn.fit(X_train, Y_train)

y_pred = knn.predict(X_test)

y_pred

# probability of getting output as 2 - benign cancer

knn.predict_proba(X_test)[:,0]

# probability of getting output as 4 - malignant cancer

knn.predict_proba(X_test)[:,1]

from sklearn.metrics import accuracy_score

print('Model accuracy score: {0:0.4f}'. format(accuracy_score(Y_test, y_pred)))

y_pred_train = knn.predict(X_train)

print('Training-set accuracy score: {0:0.4f}'. format(accuracy_score(Y_train, y_pred_train)))

print ('the scores on training and test set')

print('Training set score: {:.4f}'.format(knn.score(X_train, Y_train)))

print('Test set score: {:.4f}'.format(knn.score(X_test, Y_test)))

Y_test.value_counts()

# check null accuracy score

null_accuracy = (85/(85+55))

print('Null accuracy score: {0:0.4f}'. format(null_accuracy))

# instantiate the model with k=5
knn_5 = KNeighborsClassifier(n_neighbors=5)


# fit the model to the training set
knn_5.fit(X_train, Y_train)


# predict on the test-set
y_pred_5 = knn_5.predict(X_test)


print('Model accuracy score with k=5 : {0:0.4f}'. format(accuracy_score(Y_test, y_pred_5)))

# instantiate the model with k=6
knn_6 = KNeighborsClassifier(n_neighbors=6)


# fit the model to the training set
knn_6.fit(X_train, Y_train)


# predict on the test-set
y_pred_6 = knn_6.predict(X_test)


print('Model accuracy score with k=6 : {0:0.4f}'. format(accuracy_score(Y_test, y_pred_6)))

# instantiate the model with k=7
knn_7 = KNeighborsClassifier(n_neighbors=7)


# fit the model to the training set
knn_7.fit(X_train, Y_train)


# predict on the test-set
y_pred_7 = knn_7.predict(X_test)


print('Model accuracy score with k=7 : {0:0.4f}'. format(accuracy_score(Y_test, y_pred_7)))

# instantiate the model with k=8
knn_8 = KNeighborsClassifier(n_neighbors=8)


# fit the model to the training set
knn_8.fit(X_train, Y_train)


# predict on the test-set
y_pred_8 = knn_8.predict(X_test)


print('Model accuracy score with k=8 : {0:0.4f}'. format(accuracy_score(Y_test, y_pred_8)))

# instantiate the model with k=9
knn_9 = KNeighborsClassifier(n_neighbors=9)


# fit the model to the training set
knn_9.fit(X_train, Y_train)


# predict on the test-set
y_pred_9 = knn_9.predict(X_test)


print('Model accuracy score with k=9 : {0:0.4f}'. format(accuracy_score(Y_test, y_pred_9)))

# Print the Confusion Matrix with k =3 and slice it into four pieces

from sklearn.metrics import confusion_matrix

cm = confusion_matrix(Y_test, y_pred)

print('Confusion matrix\n\n', cm)

print('\nTrue Positives(TP) = ', cm[0,0])

print('\nTrue Negatives(TN) = ', cm[1,1])

print('\nFalse Positives(FP) = ', cm[0,1])

print('\nFalse Negatives(FN) = ', cm[1,0])

# Print the Confusion Matrix with k =7 and slice it into four pieces

cm_7 = confusion_matrix(Y_test, y_pred_7)

print('Confusion matrix\n\n', cm_7)

print('\nTrue Positives(TP) = ', cm_7[0,0])

print('\nTrue Negatives(TN) = ', cm_7[1,1])

print('\nFalse Positives(FP) = ', cm_7[0,1])

print('\nFalse Negatives(FN) = ', cm_7[1,0])

# visualize confusion matrix with seaborn heatmap

plt.figure(figsize=(6,4))

# cm_matrix = pd.DataFrame(data=cm_7, columns=['Actual Positive:1', 'Actual Negative:0'], 
#                                  index=['Predict Positive:1', 'Predict Negative:0'])

# sns.heatmap(cm_matrix, annot=True, fmt='d', cmap='YlGnBu')

# from sklearn.metrics import classification_report

# print(classification_report(Y_test, y_pred_7))

# TP = cm_7[0,0]
# TN = cm_7[1,1]
# FP = cm_7[0,1]
# FN = cm_7[1,0]

# classification_accuracy = (TP + TN) / float(TP + TN + FP + FN)

# print('Classification accuracy : {0:0.4f}'.format(classification_accuracy))

# # print classification error

# classification_error = (FP + FN) / float(TP + TN + FP + FN)

# print('Classification error : {0:0.4f}'.format(classification_error))

# # print precision score

# precision = TP / float(TP + FP)


# print('Precision : {0:0.4f}'.format(precision))

# recall = TP / float(TP + FN)

# print('Recall or Sensitivity : {0:0.4f}'.format(recall))

# true_positive_rate = TP / float(TP + FN)

 
# print('True Positive Rate : {0:0.4f}'.format(true_positive_rate))

# false_positive_rate = FP / float(FP + TN)


# print('False Positive Rate : {0:0.4f}'.format(false_positive_rate))

# specificity = TN / (TN + FP)

# print('Specificity : {0:0.4f}'.format(specificity))
# # print the first 10 predicted probabilities of two classes- 2 and 4

# y_pred_prob = knn.predict_proba(X_test)[0:10]

# y_pred_prob

# # store the probabilities in dataframe

# y_pred_prob_df = pd.DataFrame(data=y_pred_prob, columns=['Prob of - benign cancer (2)', 'Prob of - malignant cancer (4)'])

# y_pred_prob_df

# # print the first 10 predicted probabilities for class 4 - Probability of malignant cancer

# knn.predict_proba(X_test)[0:10, 1]

# # store the predicted probabilities for class 4 - Probability of malignant cancer

# y_pred_1 = knn.predict_proba(X_test)[:, 1]

# # plot histogram of predicted probabilities


# # adjust figure size
# plt.figure(figsize=(6,4))


# # adjust the font size 
# plt.rcParams['font.size'] = 12


# # plot histogram with 10 bins
# plt.hist(y_pred_1, bins = 10)


# # set the title of predicted probabilities
# plt.title('Histogram of predicted probabilities of malignant cancer')

# # set the x-axis limit
# plt.xlim(0,1)


# # set the title
# plt.xlabel('Predicted probabilities of malignant cancer')
# plt.ylabel('Frequency')

# # plot ROC Curve

# from sklearn.metrics import roc_curve

# fpr, tpr, thresholds = roc_curve(Y_test, y_pred_1, pos_label=4)

# plt.figure(figsize=(6,4))

# plt.plot(fpr, tpr, linewidth=2)

# plt.plot([0,1], [0,1], 'k--' )

# plt.rcParams['font.size'] = 12

# plt.title('ROC curve for Breast Cancer kNN classifier')

# plt.xlabel('False Positive Rate (1 - Specificity)')

# plt.ylabel('True Positive Rate (Sensitivity)')

# # plt.show()

# # compute ROC AUC

# from sklearn.metrics import roc_auc_score

# ROC_AUC = roc_auc_score(Y_test, y_pred_1)

# print('ROC AUC : {:.4f}'.format(ROC_AUC))

# # calculate cross-validated ROC AUC 

# from sklearn.model_selection import cross_val_score

# Cross_validated_ROC_AUC = cross_val_score(knn_7, X_train, Y_train, cv=5, scoring='roc_auc').mean()

# print('Cross validated ROC AUC : {:.4f}'.format(Cross_validated_ROC_AUC))

# # Applying 10-Fold Cross Validation

# from sklearn.model_selection import cross_val_score

# scores = cross_val_score(knn_7, X_train, Y_train, cv = 10, scoring='accuracy')

# print('Cross-validation scores:{}'.format(scores))

# # compute Average cross-validation score

# print('Average cross-validation score: {:.4f}'.format(scores.mean()))




