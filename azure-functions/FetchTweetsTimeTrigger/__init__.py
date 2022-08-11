import datetime
import logging

import azure.functions as func
from HelperCode.tweetSearch import TwitterAPI
from HelperCode.database import CosmosDB as db
from HelperCode.constant import Constant
from HelperCode.domain import Domain, DomainQuery
from HelperCode import utility

def main(mytimer: func.TimerRequest) -> None:
    utc_timestamp = datetime.datetime.utcnow().replace(
        tzinfo=datetime.timezone.utc).isoformat()

    if mytimer.past_due:
        logging.info('The timer is past due!')

    logging.info('Python timer trigger function ran at %s', utc_timestamp)
    
    
    api = TwitterAPI(Constant.BEARER_TOKEN.value)
    cosmosdb = db(Constant.CONNECTION_STRING.value)

    raw_tweets = api.recent_job_search(DomainQuery.BACKEND.value, int(Constant.MAX_RESULTS.value))
    tweets = utility.processed_tweets(raw_tweets, Domain.BACKEND.value)
    ids = cosmosdb.insert_documents('tweets', tweets)
    logging.info('Data inserted into the collection')