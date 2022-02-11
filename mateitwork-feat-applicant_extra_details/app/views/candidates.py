from typing import Optional
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from fastapi import Depends, FastAPI, Header, HTTPException,APIRouter,Request,Response
from dependencies import get_query_token
from  sqlalchemy.orm import Session
from dependencies import get_query_token
import schemas,crud
import httpx

router = APIRouter()

# Dependency
def get_db(request: Request):
    return request.state.db




@router.get("/candidates/get")
async def get(db: Session = Depends(get_db),token:dict=Depends(get_query_token)):
    async with httpx.AsyncClient() as client:
        account_id = '5bc9a5775a7e385de3aec047'
        account_email = 'c.nshuti@student.fontys.nl'
        token = 'Bearer {}'.format(token)
        headers = {'Authorization':token}
        resp = await client.get("https://api.harver-test.com/api/v1.0/accounts/{}/candidates?filter[email]={}".format(account_id,account_email),headers=headers)
        resp.raise_for_status()
        jdata = jsonable_encoder(resp.json())
        return jdata


@router.post("/candidates/create", response_model=schemas.Candidate)
def create_candidate(candidate: schemas.Candidate, db: Session = Depends(get_db)):
    return crud.create_candidate(db=db, candidate=candidate)

@router.get("/candidates/get", response_model=schemas.Candidate)
def get_candidates(db: Session = Depends(get_db)):
    candidates = jsonable_encoder(crud.get_candidates(db=db))
    return JSONResponse(candidates)

