import getpass
import pymongo
import logging
class CosmosDB:

    def __init__(self, connection_string, db_name="recrwitter-db"):
        client = pymongo.MongoClient(connection_string)
        try:
            client.server_info()
            db = client[db_name]
            self.client = db
            # Create database if it doesn't exist
            if db_name not in client.list_database_names():
                # Database with 400 RU throughput that can be shared across the DB's collections
                db.command({'customAction': "CreateDatabase"})
                logging.info("Created db {} with shared throughput".format(db_name))
        except pymongo.errors.ServerSelectionTimeoutError:
            raise TimeoutError("Invalid API for MongoDB connection string or timed out when attempting to connect")

    def delete_document(self, collection, document_id):
        self.client[collection].delete_one({"_id": document_id})
        return document_id

    def read_document(self, collection, document_id):
        return self.client[collection].find_one({"_id": document_id})

    def update_document(self, collection, document_id, updated_document):
        self.client[collection].update_one({"_id": document_id}, {"$set": updated_document})
        return document_id

    def insert_document(self, collection, document):
        document_id = self.client[collection].insert_one(document).inserted_id
        return document_id
    
    def insert_documents(self, collection, document_list):
        try:
            return self.client[collection].insert_many(document_list, ordered=False,bypass_document_validation=True).inserted_ids
        except pymongo.errors.BulkWriteError as e:
            logging.info(f"Articles bulk insertion error {e}")
            panic_list = list(filter(lambda x: x['code'] != 11000, e.details['writeErrors']))
            if len(panic_list) > 0:
                raise Exception(f"None duplicate errors while bulk insert occured {panic_list}")