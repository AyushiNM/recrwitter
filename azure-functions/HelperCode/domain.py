import enum


class Domain(enum.Enum):
    BACKEND = 'BACKEND'
    FRONTEND = 'FRONTEND'
    SOFTWARE = 'SOFTWARE'
    DATASCIENCE = 'DATASCIENCE'
    FULLSTACK = 'FULLSTACK'
    IOS = 'IOS'
    ANDROID = 'ANDROID'
    PRODUCTMANAGER = 'PRODUCTMANAGER'


class DomainQuery(enum.Enum):
    BACKEND = '((Backend OR "Back end" OR "Back-end") (engineer OR developer)) (#hiring OR #JobAlert OR #hiringalert OR #java OR #microservices OR #dotnet OR #node)'
    FRONTEND = '((Frontend OR "Front end" OR "Front-end") (engineer OR developer)) (#hiring OR #JobAlert OR #hiringalert OR #react OR #angular OR #vue)'
    SOFTWARE = '(Software (engineer OR developer) OR SDE OR SWE) (#hiring OR #JobAlert OR #hiringalert)'
    DATASCIENCE = '("Machine Learning" OR "Artificial Intelligence" OR "MLOps" OR "ML" OR "AI" OR "Data") (engineer OR scientist) (#hiring OR #mljobs OR #datajobs OR #aijobs OR #machinelearningjobs OR #jobsindata OR #CareersinData OR #JobAlert)'
    FULLSTACK = '((full stack OR full-stack) (engineer OR developer)) (#hiring OR #JobAlert OR #hiringalert)'
    IOS = '((iOS OR Apple OR Swift) (engineer OR developer)) (#hiring OR #JobAlert OR #hiringalert OR #iosjobs)'
    ANDROID = '((Android OR Kotlin) (engineer OR developer)) (#hiring OR #JobAlert OR #hiringalert)'
    PRODUCTMANAGER = '(Product (manager OR owner)) (#hiring OR #JobAlert OR #hiringalert)'
