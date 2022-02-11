from sqlalchemy.orm import Session

import models, schemas

def get_candidates(db: Session):
    return db.query(models.Candidate).all()


def create_candidate(db: Session, candidate: schemas.CandidateCreate):
    db_candidate = models.Candidate(name=candidate.name)
    db.add(db_candidate)
    db.commit()
    db.refresh(db_candidate)
    return db_candidate


def create_application(db: Session, application: schemas.ApplicationCreate):
    applicant = models.Application(id=application.id,matching_score=application.matching_score,education_level=application.education_level,
                                   name=application.name,email=application.email,interview_video=application.interview_video,
                                   interest=application.interest, \
                                   diligence=application.diligence, \
                                   flexibility=application.flexibility,\
                                   organisation=application.organisation, \
                                   patience=application.patience, \
                                   perfectionism=application.perfectionism, \
                                   sociability=application.sociability, \
                                   personality_type=application.personality_type,
                                   )
    db.add(applicant)
    db.commit()
    db.refresh(applicant)
    return applicant

def get_application_by_id(db: Session, application_id:str):
    return db.query(models.Application).filter(models.Application.id == application_id).first()

def get_applications(db: Session,interest:str,diligence:str,\
                     flexibility:str,organisation:str,perfectionism:str,sociability:str,personality_type:str,patience:str\
                     ):
    applications = db.query(models.Application)
    if diligence:
        applications = applications.filter(models.Application.diligence >= diligence)
    if flexibility:
        applications = applications.filter(models.Application.flexibility >= flexibility)
    if personality_type:
        applications = applications.filter(models.Application.personality_type.contains(personality_type))
    if interest:
        applications = applications.filter(models.Application.interest.contains(interest))
    if organisation:
        applications = applications.filter(models.Application.organisation >= organisation)
    if perfectionism:
        applications = applications.filter(models.Application.perfectionism >= perfectionism)
    if sociability:
        applications = applications.filter(models.Application.sociability >= sociability)
    if patience:
        applications = applications.filter(models.Application.patience >= patience)
    return applications.all()


##Vacancy

def create_vacancy(db: Session, vacancy: schemas.VacancyCreate):
    db_vacancy = models.Vacancy(id=vacancy.id)
    db.add(db_vacancy)
    db.commit()
    db.refresh(db_vacancy)
    return db_vacancy

def get_vacancy(db: Session):
    return db.query(models.Vacancy).all()


def get_vacancy_by_id(db: Session,vacancy_id:str):
    return db.query(models.Vacancy).filter(models.Vacancy.id == vacancy_id).first()