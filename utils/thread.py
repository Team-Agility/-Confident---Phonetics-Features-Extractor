from Backend.svm_system import trainSVM
from utils.transcribe import generateTranscript
from utils.s3 import S3Upload
from utils.db import updateStatus
# from svm import Meeting
import threading
import networkx as nx
import matplotlib.pyplot as plt
from networkx.drawing.nx_agraph import graphviz_layout

def StepsClass(audio_url = '', transcript = [], phoneticsFeatures = [], confidenceLevels = [], output = []):
  return [
    {
      "type": "audio",
      "step": "Input",
      "data": audio_url
    },
    {
      "type": "transcript",
      "step": "Transcript Generate",
      "data": transcript
    },
    {
      "type": "phoneticsFeatureExtraction",
      "step": "Feature Extraction",
      "data": phoneticsFeatures
    },
    {
      "type": "confidenceSequence",
      "step": "Confidence Level",
      "data": confidenceLevels
    },
    {
      "type": "TranscriptWithConfidence",
      "step": "Output",
      "data": output  
    }
  ]

ID = STEPS = DATASET_PATH = None

class tread(threading.Thread):

  def __init__(self, function_that_downloads):
    threading.Thread.__init__(self)
    self.runnable = function_that_downloads
    self.daemon = True

  def run(self):
    self.runnable()

def train():
  global ID, STEPS, DATASET_PATH
  id = ID

  # S3Upload(id, 'audio.wav')

  transcript = generateTranscript(id)
  S3Upload(id, 'aws_transcript.json')
  S3Upload(id, 'transcript.json')
  updateStatus(id, STEPS, len(STEPS), 2, StepsClass(f'http://localhost:5000/{DATASET_PATH}/audio.wav', transcript))

  model = trainSVM()
  

def startTraining(id, steps, dataset_path):
  global ID, STEPS, DATASET_PATH
  ID, STEPS, DATASET_PATH = id, steps, dataset_path
  thread = tread(train)
  thread.start()