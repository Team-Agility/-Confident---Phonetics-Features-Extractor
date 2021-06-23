from svm_system import trainSVM
from utils.transcribe import generateTranscript
from utils.s3 import S3Upload
from utils.db import updateStatus
import os
# from svm import Meeting
import threading
# import networkx as nx
# import matplotlib.pyplot as plt
# from networkx.drawing.nx_agraph import graphviz_layout

CURRENT_DIR = os.getcwd()
UI_PATH_DIR = 'C:\\Users\\Administrator\\AppData\\Local\\UiPath\\app-21.4.4\\UiRobot.exe'


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

def replace_line(file_name, line_num, text):
    lines = open(file_name, 'r', encoding='utf-8').readlines()
    lines[line_num-1] = text
    out = open(file_name, 'w', encoding='utf-8')
    out.writelines(lines)
    out.close()

def setPraatValues():
  PRAAT_SCRIPT_SRC = f"{CURRENT_DIR}\\praat_automate\\Script.praat"
  PRAAT_EXECUTBLE_SRC = f"{CURRENT_DIR}\\praat_automate\\Praat.exe"
  DATASET_ABS_PATH = DATASET_PATH.replace('/', '\\')
  replace_line('praat_automate\\uipath\\Main.xaml', 109, f'                <InArgument x:TypeArguments="x:String">{CURRENT_DIR}\\{DATASET_ABS_PATH}</InArgument>\n')
  replace_line('praat_automate\\uipath\\Main.xaml', 133, f'                <InArgument x:TypeArguments="x:String">{CURRENT_DIR}\\{DATASET_ABS_PATH}</InArgument>\n')
  
  replace_line('praat_automate\\uipath\\Praat.xaml', 81, f'    <ui:OpenApplication ApplicationWindow="{{x:Null}}" Arguments="{{x:Null}}" TimeoutMS="{{x:Null}}" WorkingDirectory="{{x:Null}}" DisplayName="Open Application \'praat.exe  Praat Objects\'" FileName="{PRAAT_EXECUTBLE_SRC}" sap:VirtualizedContainerService.HintSize="510,2211" sap2010:WorkflowViewState.IdRef="OpenApplication_1" InformativeScreenshot="14a70c3878d90bab80e51a07bd9f8065" Selector="&lt;wnd app=\'praat.exe\' cls=\'PraatShell1 Praat\' title=\'Praat Objects\' /&gt;">\n')
  replace_line('praat_automate\\uipath\\Praat.xaml', 186, f'            <ui:TypeInto AlterIfDisabled="{{x:Null}}" ClickBeforeTyping="{{x:Null}}" DelayBefore="{{x:Null}}" DelayBetweenKeys="{{x:Null}}" DelayMS="{{x:Null}}" SendWindowMessages="{{x:Null}}" Activate="True" DisplayName="Type Into \'Edit\'" EmptyField="True" sap:VirtualizedContainerService.HintSize="434,51" sap2010:WorkflowViewState.IdRef="TypeInto_2" SimulateType="True" Text="{PRAAT_SCRIPT_SRC}">\n')
  replace_line('praat_automate\\uipath\\Praat.xaml', 232, f'            <ui:WindowScope ApplicationWindow="{{x:Null}}" SearchScope="{{x:Null}}" TimeoutMS="{{x:Null}}" Window="{{x:Null}}" DisplayName="Attach Window \'explorer.exe\'" sap:VirtualizedContainerService.HintSize="434,732" sap2010:WorkflowViewState.IdRef="WindowScope_1" InformativeScreenshot="a01a27c1eb0881a54d3814436004f52f" Selector="&lt;wnd app=\'praat.exe\' cls=\'PraatChildWindow1 Praat\' title=\'Script “{PRAAT_SCRIPT_SRC}”\' /&gt;">\n')
  replace_line('praat_automate\\uipath\\Praat.xaml', 249, f'                        <ui:Target ClippingRegion="{{x:Null}}" Element="{{x:Null}}" Id="aef0e886-626b-450b-8e8c-6bf116ce1b0f" InformativeScreenshot="a30ea6150abf525fb366b062386fcbb1" Selector="&lt;wnd app=\'praat.exe\' cls=\'PraatChildWindow1 Praat\' title=\'Script “{PRAAT_SCRIPT_SRC}”\' /&gt;&lt;ctrl automationid=\'MenuBar\' name=\'Application\' role=\'menu bar\' /&gt;&lt;ctrl name=\'Run\' role=\'menu item\' /&gt;">\n')

def train():
  global ID, STEPS, DATASET_PATH
  id = ID

  # S3Upload(id, 'audio.wav')

  transcript = generateTranscript(id)
  S3Upload(id, 'aws_transcript.json')
  S3Upload(id, 'transcript.json')
  updateStatus(id, STEPS, len(STEPS), 2, StepsClass(f'http://localhost:5000/{DATASET_PATH}/audio.wav', transcript))

  # model = trainSVM()
  setPraatValues()
  os.system(f'{UI_PATH_DIR} -f "{CURRENT_DIR}\\praat_automate\\uipath\\Praat.xaml"')
  print('--------------------------------------------------------------------------------------')


def startTraining(id, steps, dataset_path):
  global ID, STEPS, DATASET_PATH
  ID, STEPS, DATASET_PATH = id, steps, dataset_path
  thread = tread(train)
  thread.start()