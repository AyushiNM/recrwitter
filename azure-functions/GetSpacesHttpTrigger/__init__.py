import logging
import json
import azure.functions as func
from HelperCode.tweetAPI import TwitterAPI
from HelperCode.constant import Constant


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    query = req.params.get('query')
    if not query:
        query = "JOBS"

    api = TwitterAPI(Constant.BEARER_TOKEN.value)

    try:
        spaces = api.space_search(query)
        return func.HttpResponse(
            json.dumps(spaces),
            mimetype='application/json',
            status_code=200
        )
    except Exception as e:
        logging.info(e)
        return func.HttpResponse(
            f"Internal Error Occured: {e}",
            status_code=500
        )
