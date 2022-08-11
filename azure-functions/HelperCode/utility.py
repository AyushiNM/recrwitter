def generate_entities(annotations):
  obj = {}
  for annotation in annotations:
    if annotation['type'] not in obj:
      obj[annotation['type']] = []
    obj[annotation['type']].append(annotation['normalized_text'])
  return obj

def processed_tweets(raw_tweets, domain):

  documentList = []
  for tweet in raw_tweets:
    document = {"_id": tweet['id'], "text": tweet['text'], "created_at": tweet['created_at'], "domain": domain}
    if 'entities' in tweet:
      if 'annotations' in tweet['entities']:
        entities = generate_entities(tweet['entities']['annotations'])
        if 'Place' in entities:
          document["location"] = entities['Place']
        if 'Organization' in entities:
          document["company"] = entities['Organization']    
    documentList.append(document)
  return documentList