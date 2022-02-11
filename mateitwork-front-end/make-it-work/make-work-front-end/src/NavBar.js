import React from "react";
import styled from 'styled-components';
import InformationButtonIcon from './assets/informationButtonIcon.svg';
import Logo from './assets/makeItWork.svg';

const Container = styled.div`
    height:100%;
    min-width:100%;
    max-width:100%;
    display:flex;
    flex-direction:row;
    background-color:#E7F4FA;
`
const Image = styled.img`
    width:70px;
    margin-top:0.5%;
    padding-bottom:5%;
`
const LeftCol = styled.div`
    width:30%;
    heihgt:100%;
    padding-left:5%;
    padding-top:1%;
`
const RightCol = styled.div`
    width:70%;
    height:100%;
    padding-left:60%;
    display:flex;
    flex-direction:row;
`

const StyledLink = styled.a`
    text-align:center;
    margin-left:5%;
    text-decoration:none;

`
const Header = styled.h1`
    font-size:1.2em;
    text-decoration:none;
    color:black;
    padding-top:10%;
    margin-left:100%;
`
;

class NavBar extends React.Component {
  

  render() {
    
      return (
        <Container>
            <LeftCol>
                <StyledLink href="http://localhost:3000/login">
                    <Image src={Logo}/>
                </StyledLink>
            </LeftCol>
            <RightCol>
                <StyledLink href="http://localhost:3000/">
                    <Header> Dashboard </Header>
                </StyledLink>
            </RightCol>
        </Container>
      );
    }
  };
  
  
  export default (NavBar)