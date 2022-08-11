import enum
import os
class Constant(enum.Enum):
    BEARER_TOKEN = os.environ["TWITTER_BEARER_TOKEN"]
    CONNECTION_STRING = os.environ["COSMOS_CONNECTION_STRING"]
    MAX_RESULTS = os.environ["MAX_RESULTS"]