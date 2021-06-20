from utils.thread import StepsClass, startTraining
from utils.db import getAllMeetingIDs, getData
from utils.requests import ClientError, ResponseData, Success, convertToObj
from flask import Flask, request, make_response, send_from_directory
from flask_swagger import swagger
from flask_cors import CORS
import uuid
import json
import os
import decimal

class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, decimal.Decimal): return float(obj)

DATASET_OUT_DIR = 'dataset'
STEPS = ["Input", "Transcript Generate", "Feature Extraction", "Confidence Level", "Output"]

app = Flask(__name__, static_url_path='')
CORS(app)
app.json_encoder = JSONEncoder

@app.route('/dataset/<path:path>')
def send_static_files(path):
    return send_from_directory('dataset', path)

@app.route('/<id>', methods=['GET'])
def getResult(id):
  data = getData(id)
  return ResponseData(convertToObj(data['pk'], data['completed_steps'], data['all_steps'], json.loads(data['data'])))

@app.route('/', methods=['GET'])
def getAllMeetings():
    return ResponseData(getAllMeetingIDs())

@app.route('/', methods=['POST'])
def createNewJob():
  id = str(uuid.uuid4())
  print(f'Adding New Meeting {id}')

  dataset_path = f'{DATASET_OUT_DIR}/{id}'
  if not os.path.exists(dataset_path):
    os.makedirs(dataset_path)
  
  with open(f'{dataset_path}/audio.wav', 'wb') as f:
    f.write(request.get_data(cache=False, as_text=False, parse_form_data=False))

  startTraining(id, STEPS, dataset_path)

  return ResponseData(convertToObj(id, 1, STEPS, StepsClass(f'http://localhost:5000/{dataset_path}/audio.wav')))

@app.route("/spec")
def spec():
    return jsonify(swagger(app))

if __name__ == '__main__':
   app.run(host='0.0.0.0')