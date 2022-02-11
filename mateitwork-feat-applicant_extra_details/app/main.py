import uvicorn
from fastapi import Depends,FastAPI,Request, Response
from fastapi.responses import JSONResponse
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from views import vacancies,candidates,applications

from fastapi.encoders import jsonable_encoder

from database import SessionLocal,engine
import crud,models,schemas

models.Base.metadata.create_all(bind=engine)




api = FastAPI()

@api.middleware("http")
async def db_session_middleware(request: Request, call_next):
    response = Response("Internal server error", status_code=500)
    try:
        request.state.db = SessionLocal()
        response = await call_next(request)
    finally:
        request.state.db.close()
    return response


def configure():
    configure_routing()

def configure_routing():
    api.include_router(vacancies.router)
    api.include_router(candidates.router)
    api.include_router(applications.router)


if __name__ == '__main__':
    configure()
    uvicorn.run(api)
else:
    configure()

