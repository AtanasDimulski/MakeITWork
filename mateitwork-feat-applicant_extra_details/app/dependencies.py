from fastapi import APIRouter
import httpx
from fastapi import Header, HTTPException
router = APIRouter()
import json

async def get_query_token():
    client_id = 'com.harver.test.integration.makeitwork'
    client_secret = '253171d4-3eb1-4073-88c1-984396c6a159'
    grant_type = 'client_credentials'
    async with httpx.AsyncClient() as client:
        resp = await client.post("https://api.harver-test.com/oauth/token",data={'client_id': client_id,"client_secret":client_secret,"grant_type":grant_type})
        resp.raise_for_status()
        token_json = json.loads(resp.text)
        return token_json['accessToken']
