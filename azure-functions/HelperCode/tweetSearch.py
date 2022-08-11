import json
import requests
import logging

class TwitterAPI:
    def __init__(self, bearer_token):
        self.bearer_token = bearer_token
        self.recent_search_url = "https://api.twitter.com/2/tweets/search/recent"
        self.base_jobs_query = '(context:66.961961812492148736 OR context:66.850073441055133696 OR 67.1486470043353239552) has:links lang:en -RT'

    def bearer_oauth(self, r):
        r.headers["Authorization"] = f"Bearer {self.bearer_token}"
        r.headers["User-Agent"] = "v2RecentSearchPython"
        logging.info(r)
        return r

    def connect_to_endpoint(self, url, params):
        response = requests.get(url, auth=self.bearer_oauth, params=params)
        logging.info(response.status_code)
        if response.status_code != 200:
            raise Exception(response.status_code, response.text)
        return response.json() 

    def recent_job_search(self, query, max_results=10):
        query_params = {'max_results': max_results, 'query': f'{query} {self.base_jobs_query}', 'tweet.fields': 'created_at,entities'}
        result = self.connect_to_endpoint(self.recent_search_url, query_params)
        if 'data' not in result:
            raise KeyError("Data is not return by Twitter API")
        logging.info('Tweets recieved')
        return result['data']