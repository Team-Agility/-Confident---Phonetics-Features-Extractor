import pandas  as pd #Data manipulation
import numpy as np #Data manipulation
import matplotlib.pyplot as plt # Visualization

def trainSVM():
  df = pd.read_csv('dataset.csv')
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

  from sklearn.model_selection import train_test_split
  X_train,X_test,Y_train,Y_test = train_test_split(X_t,y_t,test_size=.20,random_state=42)
  print("shape of X Train :"+str(X_train.shape))
  print("shape of X Test :"+str(X_test.shape))
  print("shape of Y Train :"+str(Y_train.shape))
  print("shape of Y Test :"+str(Y_test.shape))

  from sklearn.svm import SVC
#   for this_C in [1,3,5,10,40,60,80,100]:
#     clf = SVC(kernel='linear',C=this_C).fit(X_train,Y_train)
#     scoretrain = clf.score(X_train,Y_train)
#     scoretest  = clf.score(X_test,Y_test)
#     print("Linear SVM value of C:{}, training score :{:2f} , Test Score: {:2f} \n".format(this_C,scoretrain,scoretest))

  from sklearn.model_selection import cross_val_score,StratifiedKFold,LeaveOneOut
  clf1 = SVC(kernel='linear',C=20).fit(X_train,Y_train)
  return clf1