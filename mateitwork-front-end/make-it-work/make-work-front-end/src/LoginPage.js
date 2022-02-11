import React,  {useState, useEffect} from "react";
import styled from 'styled-components';
import img from './assets/Background.png';
import Logo from './assets/makeItWork.svg';
import PropTypes from 'prop-types';

const Container = styled.div`
    background-image: url(${img});
    width:100%;
    min-height:100vh;
    height:100%;
    background-size: cover;
`
const LoginContainer = styled.div`
    background-color:white;
    border-radius:25px;
    width:20%;
    margin-left:40%;
    height:35vh;
    position:fixed;
    top:35%;
    text-align:center;
`
const Image = styled.img`
    width:70px;
    margin-top:10%;
    padding-bottom:10%;
`
const Button = styled.button`
    background-color: blue;
    color: white;
    font-size: 1em;
    padding: 5px 30px;
    border-radius: 10px;
    border:none;
    margin: 10px 0px;
    cursor: pointer;
`;

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function LoginPage({ setToken }) {
  

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
    }

      return (
          <Container>
           <LoginContainer>
            <Image src={Logo}/>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                
                    <label>
                        < input ype="text" onChange={e => setUserName(e.target.value)} placeholder={'Username'} style={{borderRadius: '20px', marginBottom: '5%', width: '75%', height: '3vh'}} />
                    </label>
                    <label>
                        <input type="password" onChange={e => setPassword(e.target.value)} placeholder={'Password'}  style={{borderRadius: '20px', marginBottom: '7%', width: '75%', height: '3vh'}} />
                    </label>
                    <label>
                        <input type="submit" value="Log In" style={{width: '75%', height: '4vh', borderRadius: '20px', backgroundColor: '#3C9FD9', borderColor: '#3C9FD9'}} />
                    </label>
                
            </form>
           </LoginContainer>
        </Container>
      );
    }
  
  
    LoginPage.propTypes = {
        setToken: PropTypes.func.isRequired
      }