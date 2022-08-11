import logging
import json
import azure.functions as func
from HelperCode.constant import Constant
from HelperCode.database import CosmosDB as db


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    max_results = req.params.get('max_results')
    max_results = int(max_results.strip()) if max_results is not None else int(Constant.MAX_RESULTS.value)

    filters = {}

    locations = req.params.get('location')
    companies = req.params.get('company')
    ids = req.params.get('id')
    domains = req.params.get('domain')

    if locations is not None:
        filters['location'] = {"$in" : locations.split(',')}
    
    if companies is not None:
        filters['company'] = {"$in" : companies.split(',')}
    
    if ids is not None:
        filters['_id'] = {"$in": ids.split(',')}
    
    if domains is not None:
        filters['domain'] = {"$in" :domains.split(',')}

    cosmosdb = db(Constant.CONNECTION_STRING.value)
    logging.info("Filters")
    logging.info(filters)
    try:
        documents = cosmosdb.read_documents('tweets', filters, max_results)
        return func.HttpResponse(
            json.dumps(documents),
            mimetype='application/json',
            status_code=200
        )
    except Exception as e:
        return func.HttpResponse (
             f"Internal Error Occured: {e}",
             status_code=500
        )
        