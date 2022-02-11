from pydantic import BaseModel
from typing import Optional

class CandidateBase(BaseModel):
    name: str

class CandidateCreate(CandidateBase):
    pass


class Candidate(CandidateBase):
    id:int
    name: str
    class Config:
        orm_mode = True


class ApplicationBase(BaseModel):
    id:str
    name: str
    interview_video: str
    email: str
    matching_score:int
    education_level: str
    interest: str
    diligence:str
    flexibility:str
    organisation:str
    patience:str
    perfectionism:str
    sociability:str
    personality_type:str


class ApplicationCreate(ApplicationBase):
    pass

class Application(ApplicationBase):
    id: str
    name: str
    interview_video: str
    email: str
    matching_score: int
    education_level: str
    interest: str
    diligence: str
    flexibility: str
    organisation: str
    patience: str
    perfectionism: str
    sociability: str
    personality_type: str

    class Config:
        orm_mode = True


class VacancyBase(BaseModel):
    id:str

class VacancyCreate(VacancyBase):
    pass

class Vacancy(VacancyBase):
    id: str
    class Config:
        orm_mode = True