import httpx
from typing import Optional

from fastapi import Depends, FastAPI, Header, HTTPException,APIRouter,Request,Response
from fastapi.encoders import jsonable_encoder
from dependencies import get_query_token
from dependencies import get_query_token
from  sqlalchemy.orm import Session
from dependencies import get_query_token
import schemas,crud


router = APIRouter()

# Dependency
def get_db(request: Request):
    return request.state.db


async def fetch_vacancies_by_account_id(account_id,token:dict=Depends(get_query_token)):
    async with httpx.AsyncClient() as client:
        token = 'Bearer {}'.format(token)
        headers = {'Authorization':token}
        resp = await client.get("https://api.harver-test.com/api/v1.0/accounts/{}/vacancies".format(account_id),headers=headers)
        resp.raise_for_status()
        return resp.json()

@router.get("/vacancies/from_haver")
async def show(vac_id:str,q: Optional[str] = None,token:dict=Depends(get_query_token),):
    async with httpx.AsyncClient() as client:
        token = 'Bearer {}'.format(token)
        headers = {'Authorization':token}
        resp = await client.get("https://api.harver-test.com/api/v1.0/vacancies/{}/candidates".format(vac_id),headers=headers)
        resp.raise_for_status()
        return resp.json()

@router.get("/vacancies/{account_id}")
async def show(account_id,token:dict=Depends(get_query_token)):
    async with httpx.AsyncClient() as client:
        token = 'Bearer {}'.format(token)
        headers = {'Authorization':token}
        resp = await client.get("https://api.harver-test.com/api/v1.0/accounts/{}/vacancies".format(account_id),headers=headers)
        resp.raise_for_status()
        jdata = jsonable_encoder(resp.json())
        return jdata
'''
@router.post("/vacancy/create", response_model=schemas.Candidate)
def create_candidate(candidate: schemas.Candidate, db: Session = Depends(get_db)):
    return crud.create_candidate(db=db, candidate=candidate)

@router.get("/candidates/get", response_model=schemas.Candidate)
def get_candidates(db: Session = Depends(get_db)):
    candidates = jsonable_encoder(crud.get_candidates(db=db))
    return JSONResponse(candidates)
'''

@router.get("/token/",dependencies=[Depends(get_query_token)])
async def login(token:dict=Depends(get_query_token)):
    return token



