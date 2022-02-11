from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

#SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:root@localhost:8889/makeitwork"
SQLALCHEMY_DATABASE_URL = "sqlite:///./make_it_work.db"
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()