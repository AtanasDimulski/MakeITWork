import React , {useState, useEffect} from "react";
import styled from 'styled-components';
import InformationButtonIcon from './assets/atanasMemoji.png';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress,  { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom'
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
  } from 'video-react';
import 'video-react/dist/video-react.css';

const Container = styled.div`
    min-height:100vh;
    height:100%;
    width:100%;
    background-color:white;
    margin-top:0%;
    top:0;
    padding:0;
`
const ContainerInner = styled.div`
    height:100%;
    min-width:90%;
    max-width:90%;
    margin-left:5%;
    margin-top:5%;
    display:flex;
    flex-direction:row;
    padding-bottom:5%;
`
const EmptySpace = styled.div`
    height:1vh;
`
const TopCol = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    widht:150px;
    height:150px;
    margin-top:5%;
    border-radius:50%;
`

const LeftCol = styled.div`
    max-width:27.5%;
    min-width:27.5%;
    margin-right:5%;
    height:670px;
    background-color:white;
    border-radius:10px;
    -webkit-box-shadow: 0px 0px 16px 1px rgba(231,244,250,0.86); 
    box-shadow: 0px 0px 16px 1px rgba(231,244,250,0.86);
`
const RightCol = styled.div`
    max-width:67.5%;
    min-width:67.5%;
    height:100%; 
`
const RightColBottomSpace = styled.div`
    height:1.5vh;
`
const RightColBottom = styled.div`
    width:95%;
    height:100%;
    background-color:white;
    border-radius:25px;
    padding-left:5%;
    -webkit-box-shadow: 0px 0px 16px 1px rgba(231,244,250,0.86); 
    box-shadow: 0px 0px 16px 1px rgba(231,244,250,0.86);
`
const RightColHeaders = styled.h1`
    text-align:left
    font-size:3em;
    padding-top:2%;
    padding-bottom:2%;
    margin:0%;
    font-weight:500;
`

const RightColTopMainHeaders = styled.h1`
    font-size:1em;
    font-weight:500;
    max-width:95%;
    padding-bottom:0.5%;
    margin-bottom:0%;
`
const RightColTopDescHeaders = styled.h1`
    font-size:0.9em;
    font-weight:400;
    padding-bottom:0.5%;
    max-width:95%;
    margin-top:0%;
`
const NameHeader = styled.div`
    font-size:1.3em;
    font-weight:500;
    text-align:center;
    padding-bottom:5%;
`
const InformationHeader = styled.div`
    font-size:1em;
    font-weight:400;
    text-align:left;
    padding-bottom:4%;
`
const InformationHeaderRight = styled.div`
    font-size:1em;
    font-weight:400;
    text-align:left;
    padding-bottom:2%;
`
const Hr = styled.hr`
    width:100%;
`
const VideoHeader = styled.h2`
   font-size:1.15em;
    text-align:center;
`
const InformationHeaderDesc = styled.span`
    font-size:1em;
    font-weight:500;
    margin-top:0%;
`
const InformationHeaderInfo = styled.span`
    font-size:1em;
    font-weight:400;
`
const HeaderContainer = styled.div`
    width:80%;
    margin-left:10%;
    display:flex;
    flex-direction:column;
`
const InformationHeaderRightContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    padding-bottom:2%;
`
const InformationHeaderRightContainerLeft = styled.div`
    width:20%;
`
const InformationHeaderRightContainerRight = styled.div`
    display:flex;
    flex-direction:row;
    width:70%;
    margin-right:5%;
`
const InformationHeaderRightContainerRightInnerLeft = styled.div`
    width:90%;
    margin-right:5%;
`
const InformationHeaderRightContainerRightInnerRight = styled.div`
    width:5%;
`
const InformationHeaderRightContainerRightInnerRightHeader = styled.h2`
    font-size:1em;
    margin:0%;
    padding:0%;
    margin-top:-10%;
`
const FilesButton = styled.button`
    padding: 10px 10px 10px 10px;
    background-color:blue;
    border-radius:25px;
    width:150px;
    color:white;
    margin-bottom:20px;
`
const VideoContainer = styled.div`
  width:90%;
  margin-left:5%;
`
function ProfilePage (){
  
    const [firstName, setFirstName] = useState([]);
    const [lastName, setLastname] = useState([]);
    const [email, setEmail] = useState([]);
    const [matchingScore, setMatchingScore]= useState([]);
    const [appliedAt, setappliedAt]= useState([]);
    const [completedAt, setcompletedAt]= useState([]);
    const [status, setStatus]= useState([]);
    // 617fc4cc1b853b00085aae7f
    const { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://127.0.0.1:8000/search/matching/applications?id=${id}`)
      .then(res => res.json())
      .then(result => {
        setEmail(result)
        console.log(result)
        console.log(result.interest)

      });
    }
    fetchData();
  }, [ ])

  
    
      return (
        <Container>
            <EmptySpace/>
            <ContainerInner>
                <LeftCol>
                    <TopCol>
                        <Image src={InformationButtonIcon}/>
                    </TopCol>
                    <NameHeader>Atanas Dimulski </NameHeader>
                    <HeaderContainer>
                        <InformationHeader><FontAwesomeIcon icon={faEnvelope } style={{paddingRight: '5%'}} /> dimulskiatanas@gmail.com</InformationHeader>
                        <InformationHeader><FontAwesomeIcon icon={faPhone } style={{paddingRight: '5%'}} />+12432432232</InformationHeader>
                        <InformationHeader><InformationHeaderDesc>Date of Birth: </InformationHeaderDesc> <InformationHeaderInfo>08/01/1999</InformationHeaderInfo></InformationHeader> 
                        <InformationHeader><InformationHeaderDesc>Gender: </InformationHeaderDesc> <InformationHeaderInfo> Male </InformationHeaderInfo></InformationHeader>
                        <InformationHeader><InformationHeaderDesc>Location: </InformationHeaderDesc><InformationHeaderInfo> Amsterdam</InformationHeaderInfo></InformationHeader>     
                        <Hr/>
                        <VideoHeader>Video</VideoHeader>
                                                                                   
                    </HeaderContainer>
                    <VideoContainer>
                    <Player poster="/assets/poster.png" fluid="false" width="200px" height="500px">
                    <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />

                    <ControlBar>
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={30} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                        <VolumeMenuButton disabled />
                    </ControlBar>
                    </Player>  
                    </VideoContainer>
                </LeftCol>

                <RightCol>                   

                {email.map(item => <RightColBottom key={item.id}>
                        <RightColHeaders>Candidate Status & Information</RightColHeaders>
                        
                       

                        <InformationHeaderRight><InformationHeaderDesc>Registration Date: </InformationHeaderDesc><InformationHeaderInfo> 12/02/2020</InformationHeaderInfo></InformationHeaderRight>  
                        <InformationHeaderRight><InformationHeaderDesc>Status: </InformationHeaderDesc><InformationHeaderInfo> Completed</InformationHeaderInfo></InformationHeaderRight>  
                        <InformationHeaderRight><InformationHeaderDesc>Completion Date: </InformationHeaderDesc><InformationHeaderInfo> 20/03/2020</InformationHeaderInfo></InformationHeaderRight>  
                        <InformationHeaderRight><InformationHeaderDesc>Education: </InformationHeaderDesc><InformationHeaderInfo> {item.education_level}</InformationHeaderInfo></InformationHeaderRight> 
                        <InformationHeaderRight><InformationHeaderDesc>Highest Degree: </InformationHeaderDesc><InformationHeaderInfo> Master of Science</InformationHeaderInfo></InformationHeaderRight>  
                        <InformationHeaderRight><InformationHeaderDesc>Interests: </InformationHeaderDesc><InformationHeaderInfo> {item.interest}</InformationHeaderInfo></InformationHeaderRight>  
                        <InformationHeaderRight><InformationHeaderDesc>Full Time Education: </InformationHeaderDesc><InformationHeaderInfo> {item.flexibility}</InformationHeaderInfo></InformationHeaderRight >
                        
                        <RightColTopMainHeaders>Describe your current or last position:</RightColTopMainHeaders>
                        <RightColTopDescHeaders>Process Engineer</RightColTopDescHeaders>
                        <RightColTopMainHeaders>Describe your strenghts and skills:</RightColTopMainHeaders>
                        <RightColTopDescHeaders>I've an analytical mind, capable of recognising problems and systematically work towards a solution via intermediate steps.I am a team player, but also more than capable of doing work solo</RightColTopDescHeaders>
                        <RightColTopMainHeaders>Which direction is of most interest to you?</RightColTopMainHeaders>
                        <RightColTopDescHeaders>Business & Data Analyst</RightColTopDescHeaders>
                        <RightColTopMainHeaders>Explain the two most important reasons why you wish to follow this retraining program.</RightColTopMainHeaders>
                        <RightColTopDescHeaders>Data employee at Leo group where I completed
                             missing packaging data by contacting supliers and setting due dates."
                            "Describe your strengths and skills. How would you use them?", - 
                            I am analytical by nature so every problem I encounter I solve with an analytical approach.
                             As a curious and studious person I like to know how things work, so I first find out how the system around the problem works so I can track where the bug is. I also have a knack for organising and keeping things strucured and clear. When things are unclear or all over the place organizing makes me feel better so that is the first thing I'll do. Collegues have complimented me on my easy to understand way of working. Logic is my weapon of choice. 
                            In conversations but also in programming. As computers are all about the 0's and 1's there is 
                            al lot of logic to be found.
                        </RightColTopDescHeaders>
                        <RightColBottomSpace />
                    </RightColBottom>
                     )}   
                    {email.map(score => <RightColBottom style={{marginTop: '3%'}} key={score.id}>
                        <RightColHeaders>Competencies</RightColHeaders>

                        <InformationHeaderRightContainer>
                            <InformationHeaderRightContainerLeft>
                                <InformationHeaderDesc>Organisation Score</InformationHeaderDesc>
                            </InformationHeaderRightContainerLeft>

                            <InformationHeaderRightContainerRight>
                                <InformationHeaderRightContainerRightInnerLeft>
                                    <LinearProgress variant="determinate" value={(score.organisation)*10} style={{borderRadius: '5'}}/> 
                                </InformationHeaderRightContainerRightInnerLeft>

                                <InformationHeaderRightContainerRightInnerRight>
                                    <InformationHeaderRightContainerRightInnerRightHeader >{score.organisation}</InformationHeaderRightContainerRightInnerRightHeader>
                                </InformationHeaderRightContainerRightInnerRight>
                            </InformationHeaderRightContainerRight>                           
                        </InformationHeaderRightContainer>  
                       
                        <InformationHeaderRightContainer>
                            <InformationHeaderRightContainerLeft>
                                <InformationHeaderDesc>Flexibility Score</InformationHeaderDesc>
                            </InformationHeaderRightContainerLeft>

                            <InformationHeaderRightContainerRight>
                            <InformationHeaderRightContainerRightInnerLeft>
                                    <LinearProgress variant="determinate" value={(score.flexibility)*10} style={{borderRadius: '5'}}/> 
                                </InformationHeaderRightContainerRightInnerLeft>

                                <InformationHeaderRightContainerRightInnerRight>
                                    <InformationHeaderRightContainerRightInnerRightHeader >{score.flexibility}</InformationHeaderRightContainerRightInnerRightHeader>
                                </InformationHeaderRightContainerRightInnerRight>
                            </InformationHeaderRightContainerRight>                           
                        </InformationHeaderRightContainer> 

                        <InformationHeaderRightContainer>
                            <InformationHeaderRightContainerLeft>
                                <InformationHeaderDesc>Perfectionism Score </InformationHeaderDesc>
                            </InformationHeaderRightContainerLeft>

                            <InformationHeaderRightContainerRight>
                            <InformationHeaderRightContainerRightInnerLeft>
                                    <LinearProgress variant="determinate" value={(score.perfectionism*10)} style={{borderRadius: '5'}}/> 
                                </InformationHeaderRightContainerRightInnerLeft>

                                <InformationHeaderRightContainerRightInnerRight>
                                    <InformationHeaderRightContainerRightInnerRightHeader >{score.perfectionism}</InformationHeaderRightContainerRightInnerRightHeader>
                                </InformationHeaderRightContainerRightInnerRight>
                            </InformationHeaderRightContainerRight>                           
                        </InformationHeaderRightContainer>  
                       
                        <InformationHeaderRightContainer>
                            <InformationHeaderRightContainerLeft>
                                <InformationHeaderDesc>Sociability Score</InformationHeaderDesc>
                            </InformationHeaderRightContainerLeft>

                            <InformationHeaderRightContainerRight>
                            <InformationHeaderRightContainerRightInnerLeft>
                                    <LinearProgress variant="determinate" value={(score.sociability)*10} style={{borderRadius: '5'}}/> 
                                </InformationHeaderRightContainerRightInnerLeft>

                                <InformationHeaderRightContainerRightInnerRight>
                                    <InformationHeaderRightContainerRightInnerRightHeader >{score.sociability}</InformationHeaderRightContainerRightInnerRightHeader>
                                </InformationHeaderRightContainerRightInnerRight>
                            </InformationHeaderRightContainerRight>                           
                        </InformationHeaderRightContainer> 

                        <InformationHeaderRightContainer>
                            <InformationHeaderRightContainerLeft>
                                <InformationHeaderDesc>Patience Score </InformationHeaderDesc>
                            </InformationHeaderRightContainerLeft>

                            <InformationHeaderRightContainerRight>
                            <InformationHeaderRightContainerRightInnerLeft>
                                    <LinearProgress variant="determinate" value={(score.patience)*10} style={{borderRadius: '5'}}/> 
                                </InformationHeaderRightContainerRightInnerLeft>

                                <InformationHeaderRightContainerRightInnerRight>
                                    <InformationHeaderRightContainerRightInnerRightHeader >{score.patience}</InformationHeaderRightContainerRightInnerRightHeader>
                                </InformationHeaderRightContainerRightInnerRight>
                            </InformationHeaderRightContainerRight>                           
                        </InformationHeaderRightContainer>  
                       
                        <InformationHeaderRightContainer>
                            <InformationHeaderRightContainerLeft>
                                <InformationHeaderDesc>Diligence Score</InformationHeaderDesc>
                            </InformationHeaderRightContainerLeft>

                            <InformationHeaderRightContainerRight>
                            <InformationHeaderRightContainerRightInnerLeft>
                                    <LinearProgress variant="determinate" value={(score.diligence)*10} style={{borderRadius: '5'}}/> 
                                </InformationHeaderRightContainerRightInnerLeft>

                                <InformationHeaderRightContainerRightInnerRight>
                                    <InformationHeaderRightContainerRightInnerRightHeader >{score.diligence}</InformationHeaderRightContainerRightInnerRightHeader>
                                </InformationHeaderRightContainerRightInnerRight>
                            </InformationHeaderRightContainerRight>                           
                        </InformationHeaderRightContainer> 
                        
                       
                   </RightColBottom>

                        )}
                    
                </RightCol>
            </ContainerInner>
        </Container>
      );
    
  };
  
  
  export default ProfilePage