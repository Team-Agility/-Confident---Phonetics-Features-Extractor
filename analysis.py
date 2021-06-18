import pandas  as pd #Data manipulation
import numpy as np #Data manipulation
import matplotlib.pyplot as plt # Visualization
import seaborn as sns #Visualization

plt.rcParams['figure.figsize'] = [8,5]
plt.rcParams['font.size'] =14
plt.rcParams['font.weight']= 'bold'
plt.style.use('seaborn-whitegrid')


df = pd.read_csv('dataset.csv')
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
# plt.show()

f, ax = plt.subplots(figsize=(10,4))
plt.xlabel('Speech Rate (words/s)')
plt.ylabel('Confidence')
plt.title('Confidence vs Speech Rate')
plt.scatter(y=df['confidence'], x=df['speech_rate'],color='red')
# plt.show()

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
plt.show()






