import React, { useState }  from 'react';
import './App.css';
import MainScreen from './MainScreen';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './NavBar.js';
import styled from 'styled-components';
import useToken from './useToken';

const Container = styled.div`
    height:100%;
    width:100%;
` 

 function App() { 
  const { token, setToken } = useToken();

  if(!token) {
    return <LoginPage setToken={setToken} />
  }
    return(   
      <Container>
      <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MainScreen/>} />                             
            <Route path="/profile/:id" element={<ProfilePage/>} />    
            <Route path="/login" element={<LoginPage/>} />  
          </Routes> 
                                        
      </Router>  
      </Container>
    );
  }

export default App