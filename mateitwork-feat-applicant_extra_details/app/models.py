from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import Float
from typing import Optional
from database import Base

class Candidate(Base):
    __tablename__ = "candidates"
    id = Column(String(30), primary_key=True, index=True)
    application_id = Column(String(30))
    name = Column(String(16))

class Application(Base):
    __tablename__ = "applications"
    id = Column(String(30), primary_key=True, index=True)
    name = Column(String(30))
    email = Column(String(30))
    interview_video = Column(String(80))
    matching_score = Column(Integer)
    education_level = Column(String(30))
    interest = Column(String(30))
    diligence = Column(Float(precision=2))
    flexibility = Column(Float(precision=2))
    organisation = Column(Float(precision=2))
    patience = Column(Float(precision=2))
    perfectionism = Column(Float(precision=2))
    sociability = Column(Float(precision=2))
    personality_type = Column(String(30))


##TODO extend vacancy model
class Vacancy(Base):
    __tablename__ = "vacancies"
    id = Column(String(30), primary_key=True, index=True)

