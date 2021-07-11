import time
import boto3
import urllib.request, json 

transcribe = boto3.client('transcribe')

def check_job_name(job_name):
  job_verification = True
  
  # all the transcriptions
  existed_jobs = transcribe.list_transcription_jobs()
  
  for job in existed_jobs['TranscriptionJobSummaries']:
    if job_name == job['TranscriptionJobName']:
      job_verification = False
      break

  if job_verification == False:
    command = input(job_name + " has existed. \nDo you want to override the existed job (Y/N): ")
    if command.lower() == "y" or command.lower() == "yes":
      transcribe.delete_transcription_job(TranscriptionJobName=job_name)
    elif command.lower() == "n" or command.lower() == "no":
      job_name = input("Insert new job name? ")
      check_job_name(job_name)
    else: 
      print("Input can only be (Y/N)")
      command = input(job_name + " has existed. \nDo you want to override the existed job (Y/N): ")
  return job_name

def generateTranscript(meeting_id, max_speakers = 5): 

  # transcriptFileUri = 'https://scrum-meeting-minutes.s3.ap-southeast-1.amazonaws.com/aws_transcript.json'
  # with urllib.request.urlopen(transcriptFileUri) as url:
  #     transcript = json.loads(url.read().decode())['results']
  #     with open(f'dataset/{meeting_id}/aws_transcript.json', 'w', encoding='utf-8') as f:
  #       json.dump(transcript, f, ensure_ascii=False, indent=4)

      # acts = []
      # speakers = []
      # for idx, segment in enumerate(transcript['speaker_labels']['segments']):
      #   start_time = segment['start_time']
      #   end_time = segment['end_time']
      #   speaker_id = segment['speaker_label']

      #   act = ''
      #   for word in segment['items']:
      #     for item in transcript['items']:
      #       if 'start_time' in item and item['start_time'] == word['start_time'] and item['end_time'] == word['end_time']:
      #         act += item['alternatives'][0]['content'] + ' '
      #         break

      #   acts.append({
      #     'id': idx,
      #     'start_time': float(start_time),
      #     'end_time': float(end_time),
      #     'speaker_id': speaker_id,
      #     'act': act.strip()
      #   })
      #   speakers.append(speaker_id)

      # res = {
      #   'acts': acts,
      #   'speakers': list(set(speakers))
      # }
      # with open(f'dataset/{meeting_id}/transcript.json', 'w', encoding='utf-8') as f:
      #   json.dump(res, f, ensure_ascii=False, indent=4)
      # return res

  print(f'Generating Transcript {meeting_id}')
  if max_speakers > 10:
    raise ValueError("Maximum detected speakers is 10.")
 
  job_uri = f's3://scrum-meeting-minutes/{meeting_id}/audio.wav'
  job_name = meeting_id
  
  # check if name is taken or not
  job_name = check_job_name(job_name)
  
  transcribe.start_transcription_job(
    TranscriptionJobName=job_name,
    Media={'MediaFileUri': job_uri},
    MediaFormat='wav',
    LanguageCode='en-US',
    Settings = {'ShowSpeakerLabels': True,
      'MaxSpeakerLabels': max_speakers
    }
  )
  
  while True:
    result = transcribe.get_transcription_job(TranscriptionJobName=job_name)
    if result['TranscriptionJob']['TranscriptionJobStatus'] in ['COMPLETED', 'FAILED']:
        break
    time.sleep(15)
    print('.', end='')
  print('\nJob Completed')
  if result['TranscriptionJob']['TranscriptionJobStatus'] == 'COMPLETED':
    transcriptFileUri = result['TranscriptionJob']['Transcript']['TranscriptFileUri']
    with urllib.request.urlopen(transcriptFileUri) as url:
      transcript = json.loads(url.read().decode())['results']
      with open(f'dataset/{meeting_id}/aws_transcript.json', 'w', encoding='utf-8') as f:
        json.dump(transcript, f, ensure_ascii=False, indent=4)

      acts = []
      speakers = []
      for idx, segment in enumerate(transcript['speaker_labels']['segments']):
        start_time = segment['start_time']
        end_time = segment['end_time']
        speaker_id = segment['speaker_label']

        act = ''
        for word in segment['items']:
          for item in transcript['items']:
            if 'start_time' in item and item['start_time'] == word['start_time'] and item['end_time'] == word['end_time']:
              act += item['alternatives'][0]['content'] + ' '
              break

        acts.append({
          'id': idx,
          'start_time': start_time,
          'end_time': end_time,
          'speaker_id': speaker_id,
          'act': act.strip()
        })
        speakers.append(speaker_id)

      res = {
        'acts': acts,
        'speakers': list(set(speakers))
      }
      with open(f'dataset/{meeting_id}/transcript.json', 'w', encoding='utf-8') as f:
        json.dump(res, f, ensure_ascii=False, indent=4)

      return res

  print('Failed:', result)
  return None