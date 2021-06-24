import pandas  as pd  # Data manipulation
import numpy as np  # Data manipulation
import matplotlib.pyplot as plt  # Visualization
import seaborn as sns  # Visualization

plt.rcParams['figure.figsize'] = [8, 5]
plt.rcParams['font.size'] = 14
plt.rcParams['font.weight'] = 'bold'
plt.style.use('seaborn-whitegrid')

# df = pd.DataFrame(dataset)
df = pd.read_csv('dataset.csv')

print('\nNumber of rows and columns in the data set: ', df.shape)
print(df.head(), df.columns)
print('')

y_t = df['confidence']
X_t = df
X_t = df.drop(['confidence'], axis=1)
# X_t = np.array(X_t)

print("shape of Y :" + str(y_t.shape))
print("shape of X :" + str(X_t.shape))

from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split

scaler = MinMaxScaler()
X_t = scaler.fit_transform(X_t)

X_train, X_test, Y_train, Y_test = train_test_split(X_t, y_t, test_size = 0.3, random_state = 0)
print("shape of X Train :" + str(X_train.shape))
print("shape of X Test :" + str(X_test.shape))
print("shape of Y Train :" + str(Y_train.shape))
print("shape of Y Test :" + str(Y_test.shape))
X_train,X_test,Y_train,Y_test = pd.DataFrame(X_train), pd.DataFrame(X_test), pd.DataFrame(Y_train), pd.DataFrame(Y_test)
# check data types in X_train

col_names = ['short_term_energy', 'speech_rate', 'articulation_rate', 'phonation_time_ratio', 'MPD']

# df.columns = col_names
X_train.columns = col_names
Y_train.columns = ['confidence']
X_test.columns = col_names
Y_test.columns = ['confidence']

X_train.dtypes

# display categorical variables

categorical = [col for col in X_train.columns if X_train[col].dtypes == 'O']

categorical
# display numerical variables

numerical = [col for col in X_train.columns if X_train[col].dtypes != 'O']

numerical
# print percentage of missing values in the categorical variables in training set

X_train[categorical].isnull().mean()
# print categorical variables with missing data

for col in categorical:
    if X_train[col].isnull().mean()>0:
        print(col, (X_train[col].isnull().mean()))
# impute missing categorical variables with most frequent value

# for df2 in [X_train, X_test]:
#     print(df2)
#     df2['short_term_energy'].fillna(X_train['short_term_energy'].mode()[0], inplace=True)
#     df2['speech_rate'].fillna(X_train['speech_rate'].mode()[0], inplace=True)
#     df2['articulation_rate'].fillna(X_train['articulation_rate'].mode()[0], inplace=True)   
#     df2['phonation_time_ratio'].fillna(X_train['phonation_time_ratio'].mode()[0], inplace=True) 
#     df2['MPD'].fillna(X_train['MPD'].mode()[0], inplace=True) 


# check missing values in categorical variables in X_train

X_train[categorical].isnull().sum()
# check missing values in categorical variables in X_test

X_test[categorical].isnull().sum()
# check missing values in X_train

X_train.isnull().sum()
# check missing values in X_test

X_test.isnull().sum()
# print categorical variables

categorical

X_train[categorical].head()
# import category encoders

import category_encoders as ce
# encode remaining variables with one-hot encoding

encoder = ce.OneHotEncoder(cols=['short_term_energy', 'speech_rate', 'articulation_rate', 'phonation_time_ratio', 'MPD']) 
                               

X_train = encoder.fit_transform(X_train)

X_test = encoder.transform(X_test)
X_train.head()
X_train.shape
X_test.head()
X_test.shape
cols = X_train.columns
from sklearn.preprocessing import RobustScaler

scaler = RobustScaler()

X_train = scaler.fit_transform(X_train)

X_test = scaler.transform(X_test)
X_train = pd.DataFrame(X_train, columns=[cols])
X_test = pd.DataFrame(X_test, columns=[cols])
X_train.head()
# train a Gaussian Naive Bayes classifier on the training set
from sklearn.naive_bayes import GaussianNB


# instantiate the model
gnb = GaussianNB()


# fit the model
gnb.fit(X_train, Y_train)
y_pred = gnb.predict(X_test)

y_pred
from sklearn.metrics import accuracy_score

print('Model accuracy score: {0:0.4f}'. format(accuracy_score(Y_test, y_pred)))
y_pred_train = gnb.predict(X_train)

y_pred_train
print('Training-set accuracy score: {0:0.4f}'. format(accuracy_score(Y_train, y_pred_train)))
# print the scores on training and test set

print('Training set score: {:.4f}'.format(gnb.score(X_train,Y_train)))

print('Test set score: {:.4f}'.format(gnb.score(X_test, Y_test)))
# check class distribution in test set

Y_test.value_counts()
# check null accuracy score

null_accuracy = (7407/(7407+2362))

print('Null accuracy score: {0:0.4f}'. format(null_accuracy))
# Print the Confusion Matrix and slice it into four pieces

from sklearn.metrics import confusion_matrix

cm = confusion_matrix(Y_test, y_pred)

print('Confusion matrix\n\n', cm)

print('\nTrue Positives(TP) = ', cm[0,0])

print('\nTrue Negatives(TN) = ', cm[1,1])

print('\nFalse Positives(FP) = ', cm[0,1])

print('\nFalse Negatives(FN) = ', cm[1,0])
# visualize confusion matrix with seaborn heatmap

# cm_matrix = pd.DataFrame(data=cm, columns=['Actual Positive:1', 'Actual Negative:0'], 
#                                  index=['Predict Positive:1', 'Predict Negative:0'])

# sns.heatmap(cm_matrix, annot=True, fmt='d', cmap='YlGnBu')
# from sklearn.metrics import classification_report

# print(classification_report(Y_test, y_pred))
# TP = cm[0,0]
# TN = cm[1,1]
# FP = cm[0,1]
# FN = cm[1,0]
# # print classification accuracy

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
# # print the first 10 predicted probabilities of two classes- 0 and 1

# y_pred_prob = gnb.predict_proba(X_test)[0:10]

# y_pred_prob

# # store the probabilities in dataframe

# y_pred_prob_df = pd.DataFrame(data=y_pred_prob, columns=['Prob of - <=50K', 'Prob of - >50K'])

# y_pred_prob_df
# # print the first 10 predicted probabilities for class 1 - Probability of >50K

# gnb.predict_proba(X_test)[0:10, 1]
# # store the predicted probabilities for class 1 - Probability of >50K

# y_pred1 = gnb.predict_proba(X_test)[:, 1]

# # plot histogram of predicted probabilities


# # adjust the font size 
# plt.rcParams['font.size'] = 12


# # plot histogram with 10 bins
# plt.hist(y_pred1, bins = 10)


# # set the title of predicted probabilities
# plt.title('Histogram of predicted probabilities of salaries >50K')


# # set the x-axis limit
# plt.xlim(0,1)


# # set the title
# plt.xlabel('Predicted probabilities of salaries >50K')
# plt.ylabel('Frequency')
# # plot ROC Curve
# from sklearn.metrics import roc_curve

# fpr, tpr, thresholds = roc_curve(Y_test, y_pred1, pos_label = '>50K')

# plt.figure(figsize=(6,4))

# plt.plot(fpr, tpr, linewidth=2)

# plt.plot([0,1], [0,1], 'k--' )

# plt.rcParams['font.size'] = 12

# plt.title('ROC curve for Gaussian Naive Bayes Classifier for Predicting Salaries')

# plt.xlabel('False Positive Rate (1 - Specificity)')

# plt.ylabel('True Positive Rate (Sensitivity)')

# plt.show()

# # compute ROC AUC

# from sklearn.metrics import roc_auc_score

# ROC_AUC = roc_auc_score(Y_test, y_pred1)

# print('ROC AUC : {:.4f}'.format(ROC_AUC))
# # calculate cross-validated ROC AUC 

# from sklearn.model_selection import cross_val_score

# Cross_validated_ROC_AUC = cross_val_score(gnb, X_train, Y_train, cv=5, scoring='roc_auc').mean()

# print('Cross validated ROC AUC : {:.4f}'.format(Cross_validated_ROC_AUC))
# # Applying 10-Fold Cross Validation

# from sklearn.model_selection import cross_val_score

# scores = cross_val_score(gnb, X_train, Y_train, cv = 10, scoring='accuracy')

# print('Cross-validation scores:{}'.format(scores))
# # compute Average cross-validation score

# print('Average cross-validation score: {:.4f}'.format(scores.mean()))