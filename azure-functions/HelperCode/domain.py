import enum

class Domain(enum.Enum):
    BACKEND = 'BACKEND'
    FRONTEND = 'FRONTEND'
    ML = 'ML'

class DomainQuery(enum.Enum):
  BACKEND = '((Backend OR "Back end" OR "Back-end") (engineer OR developer)) (#hiring OR #JobAlert OR #hiringalert OR #java OR #microservices OR #dotnet OR #node)'
  FRONTEND = 'FRONTEND'
  ML = 'ML'