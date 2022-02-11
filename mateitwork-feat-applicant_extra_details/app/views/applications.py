from fastapi import Depends, FastAPI, Header, HTTPException,APIRouter,Request,Response
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from  sqlalchemy.orm import Session
from typing import Optional
from dependencies import get_query_token
import schemas,crud
import httpx

router = APIRouter()

# Dependency
def get_db(request: Request):
    return request.state.db

@router.get("/applications/get")
async def show(db: Session = Depends(get_db),token:dict=Depends(get_query_token)):
    async with httpx.AsyncClient() as client:
        account_id = '5bc9a5775a7e385de3aec047'
        token = 'Bearer {}'.format(token)
        headers = {'Authorization':token}
        resp = await client.get("https://api.harver-test.com/api/v1.0/applications/applications?accountId=5bc9a5775a7e385de3aec047&filter[atsParameters]",headers=headers)
        resp.raise_for_status()
        jdata = jsonable_encoder(resp.json())

        return jdata

@router.get("/applications/{application_id}")
async def show(application_id,db: Session = Depends(get_db),token:dict=Depends(get_query_token)):
    async with httpx.AsyncClient() as client:
        token = 'Bearer {}'.format(token)
        headers = {'Authorization':token}
        resp = await client.get("https://api.harver-test.com/api/v1.0/applications/{}?include=matching-results,additional-info,ats,matching-indicators,availability,grading,matching-indicators,job-functions".format(application_id),headers=headers)
        resp.raise_for_status()
        jdata = jsonable_encoder(resp.json())
        name = ''
        email = ''
        interview_video=''
        education_level =''
        career_interest = ''
        diligence = ''
        flexibility =''
        organisation = ''
        patience = ''
        perfectionism = ''
        sociability = ''
        personality_type = ''

        matching_score = jdata['data']['attributes']['matchingScore']
        email = jdata['data']['relationships']['candidate']['data']['email']
        first_name = jdata['data']['relationships']['candidate']['data']['attributes']['firstName']
        last_name  = jdata['data']['relationships']['candidate']['data']['attributes']['lastName']
        name = first_name+' '+last_name
        for include in jdata['included']:
            try:
                if include['type'] == 'matching-results':
                    diligence = include['meta']['facetScoresRaw']["Diligence"]
                    flexibility = include['meta']['facetScoresRaw']["Flexibility"]
                    organisation = include['meta']['facetScoresRaw']["Organisation"]
                    patience = include['meta']['facetScoresRaw']["Patience"]
                    perfectionism = include['meta']['facetScoresRaw']["Perfectionism"]
                    sociability = include['meta']['facetScoresRaw']["Sociability"]
                    personality_type = include['meta']['personalityType']
                    print("hello")
                if include['type'] == 'additional-info':
                    questions = include['attributes']['questions']
                    for question in questions:
                        if question['question'] == '<p>What is your highest degree obtained?</p>':
                            education_level=question['answer']
                        if question['question'] == '<p>What are your interests within IT?</p>':
                            career_interest=question['answer'][0]
            except Exception as err:
                print(type(err))  # the exception instance
                print(err.args)  # arguments stored in .args
                print(err)
        application = schemas.Application(id=application_id,matching_score=matching_score, \
                                          name=name, email=email,
                                          interview_video=interview_video,
                                          education_level=education_level, interest=career_interest,\
                                          diligence = diligence,flexibility=flexibility,organisation=organisation,\
                                          patience = patience,perfectionism = perfectionism,sociability =sociability,\
                                          personality_type = personality_type
                                          )
        db_application = crud.get_application_by_id(db, application_id=application_id)
        if db_application:
            raise HTTPException(status_code=400, detail="Application with id already exist")
        return crud.create_application(db=db,application=application)


@router.get("/search/matching/applications")
def get(db: Session = Depends(get_db),token:dict=Depends(get_query_token),\
        interest: Optional[str] = None,diligence: Optional[float] = None,flexibility:Optional[float] = None,organisation:Optional[float] = None,\
            perfectionism: Optional[float] = None,sociability: Optional[float] = None,personality_type: Optional[str] = None,patience: Optional[float] = None
        ):
        return crud.get_applications(db=db,interest=interest,\
                                     diligence=diligence,flexibility=flexibility,organisation=organisation,perfectionism=perfectionism,\
                                     sociability=sociability,personality_type=personality_type,patience=patience\
                                     )
