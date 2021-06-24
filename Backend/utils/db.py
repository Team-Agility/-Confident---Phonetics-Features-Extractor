import json
import boto3
from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key, Attr
import datetime

dynamodb = None
if not dynamodb:
  dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('scrum-meeting-minutes')

def put(item):
  # print('Adding Data to DB', item)
  response = table.put_item( Item=item )
  return response

def get(pk, sk):
  # print('Adding Data to DB', item)
  try:
    response = table.get_item( Key={'pk': pk, 'sk': sk} )
  except ClientError as e:
      print(e.response['Error']['Message'])
  else:
      return response['Item']

def getAllMeetingIDs():
  response = table.query(
    KeyConditionExpression=Key('pk').eq('#CONFIDENCE'),
    ProjectionExpression="sk, updated_at, steps, completed_steps"
  )

  response['Items'].sort(key=lambda x: x['updated_at'], reverse=True)
  res = []
  for job in response['Items']:
    res.append({
      'id': job['sk'],
      'updated_at': job['updated_at'],
      'status': 'Completed' if job['steps'] == job['completed_steps'] else 'Processing'
    })
  return res

def getData(meeting_id):
  return get('#CONFIDENCE', meeting_id)

import numpy as np
class NumpyEncoder(json.JSONEncoder):
    """ Custom encoder for numpy data types """
    def default(self, obj):
        if isinstance(obj, (np.int_, np.intc, np.intp, np.int8,
                            np.int16, np.int32, np.int64, np.uint8,
                            np.uint16, np.uint32, np.uint64)):

            return int(obj)

        elif isinstance(obj, (np.float_, np.float16, np.float32, np.float64)):
            return float(obj)

        elif isinstance(obj, (np.complex_, np.complex64, np.complex128)):
            return {'real': obj.real, 'imag': obj.imag}

        elif isinstance(obj, (np.ndarray,)):
            return obj.tolist()

        elif isinstance(obj, (np.bool_)):
            return bool(obj)

        elif isinstance(obj, (np.void)): 
            return None

        return json.JSONEncoder.default(self, obj)

def updateStatus(meeting_id, all_steps, steps, completed_steps, data):
  put({
    'pk': '#CONFIDENCE',
    'sk': meeting_id,
    'steps': int(steps),
    'all_steps': all_steps,
    'completed_steps': completed_steps,
    'data': json.dumps(data, cls=NumpyEncoder),
    'updated_at': datetime.datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")
  })