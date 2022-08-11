import enum

class Domain(enum.Enum):
    BACKEND = 'BACKEND'
    FRONTEND = 'FRONTEND'
    SOFTWARE = 'SOFTWARE'
    DATASCIENCE = 'DATASCIENCE'

class DomainQuery(enum.Enum):
    BACKEND = '((Backend OR "Back end" OR "Back-end") (engineer OR developer)) (#hiring OR #JobAlert OR #hiringalert OR #java OR #microservices OR #dotnet OR #node)'
    FRONTEND = '((Frontend OR "Front end" OR "Front-end") (engineer OR developer)) (#hiring OR #JobAlert OR #hiringalert OR #react OR #angular OR #vue)'
    SOFTWARE = '(Software (engineer OR developer) OR SDE OR SWE) (#hiring OR #JobAlert OR #hiringalert)'
    DATASCIENCE = '(("Machine Learning" OR "Artificial Intelligence" OR "MLOps" OR "ML" OR "AI" OR "Data") (engineer OR scientist)) (#hiring OR #mljobs OR #datajobs OR #aijobs OR #machinelearningjobs OR #jobsindata OR #CareersinData OR #JobAlert)'