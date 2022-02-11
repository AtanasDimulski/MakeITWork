import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import InformationButtonIcon from './assets/atanasMemoji.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Container = styled.div`
    background-color:white;
    width:100%;
    min-height:100vh;
    height:100%;
`
const Row = styled.div`
    height:100%;
    width:90%;
    margin-left:5%;
    display:flex;
    flex-direction:row;
    padding-bottom:4%;
`
const LeftCol = styled.div`
    width:25%;
    height:1230px;
    margin-top:5%;
    margin-right:2.5%;
    padding-bottom:4%;
    background-color:white;
    border-radius:10px;
    -webkit-box-shadow: 0px 0px 16px 1px rgba(231,244,250,0.86); 
    box-shadow: 0px 0px 16px 1px rgba(231,244,250,0.86);
`
const HeaderFiler = styled.h1`
    fotn-size:2em;
    margin-left:10%;
`
const FitersStyles = styled.h1`
    font-size:1em;
    margin-left:10%;
`
const RightCol = styled.div`
    margin-top:5%;
    min-width:72.5%;
    max-width: 72.5%;
    height:100%;
`

const ApplicantsHeader = styled.h1`
    font-size:2em;
    text-align:center;
    padding-top:2%;
    padding-bottom:2%;
`

const CardStyles = styled.div`
    border:solid;
    border-color:balck;
    border-width:0.5px;
    border-radius:10px;
    width:90%;
    padding-left:5%;
    margin-right:5%;  
    text-align:center;
`
const CardMainHeader = styled.h1`
    font-size:1.5em;
    text-align:center;
`
const CardInfo = styled.h1`
    font-size:1em;
    text-align:left;
    font-weight:400;
`
const Button = styled.button`
    background-color: #3C9FD9;
    color: white;
    font-size: 1em;
    padding: 5px 30px;
    border-radius: 10px;
    border:none;
    margin: 10px 0px;
    cursor: pointer;
`;

const StyledLink = styled.a`
    text-align:center;
    margin-left:0%;
`
const MenuImage = styled.img`
    widht:120px;
    height:120px;
    margin-top:7.5%;
    margin-left:0%;
    border-radius:50%;
`
const RightColSearchBar = styled.div`
    min-width:700px;
`

const RightColBottomRow = styled.div`
    width:100%;
    background-color:white;
    border-radius:10px;
    padding-left:1.25%;
    padding-right:1.25%;
`
const RightColSearchBarInner = styled.div`
    width:90%;
    margin-left:5%;
`
const Hr = styled.hr`
    width:80%;
    margin-left:10%;
    color:black;
    background-color:black;
`
const RadioButtonsContainer = styled.div`
    width:80%;
    margin-left:10%;
    display:flex;
    flex-direction:column;
`
const RadioButtonsRow = styled.div`
    width:100%;
    padding-bottom:4%;
    display:flex;
    flex-direction:row;
`
const RadioButtonsCol = styled.div`
    width:50%;
    text-alignt:left;
`
const CardInnerMailAndPhone = styled.div`
    widht:80%;
    text-align:left!important;
    margin-left:10%;
`
const CompetenciesHeaders = styled.h3`
    font-size: 1em;
`
const ResetButtonContainer = styled.div`
    width:100%;
    text-align:center;
`
const ResetButton = styled.button`
    background-color:#3C9FD9;
    color: white;
    font-size: 1em;
    padding: 5px 30px;
    border-radius: 10px;
    border:none;
    margin: 10px 0px;
    cursor: pointer;
`
const SliderHeaders = styled.h2`
    font-size:0.9em;
    font-weight:400;
`

const RadioInput = ({label, value, checked, setter}) => {
	return (
	  <label>
	    <input type="radio" checked={checked == value}
	           onChange={() => setter(value)} />
	    <span>{label}</span>
	  </label>
	);
};

function MainScreen () {
    const [education, setEducation] = React.useState('');
    const [interest, setInterest] = React.useState('');
    const [personality, setPersonality] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const data = {education, interest};
        const json = JSON.stringify(data, null, 4);
        setEducation(json.education);
        console.log(json)
        console.log(education)
    }
    const [state, setState] = React.useState({
        flexibilityScore: 0,   
        organisationScore: 0,
        perfectionismScore:0,
        sociabilityScore: 0,
        patienceScore: 0,
        diligenceScore:0
      })

    const handleChange = (event) =>{
        const value = event.target.value;
        setState({
        ...state,
        [event.target.name]: value
        });
    }
    const resetRadioState = () => {
        setEducation('');
        setInterest('');
        setPersonality('');
        setState({
        flexibilityScore: 0,   
        organisationScore: 0,
        perfectionismScore:0,
        sociabilityScore: 0,
        patienceScore: 0,
        diligenceScore:0});
    }
    const [posts, setPostArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(`http://127.0.0.1:8000/search/matching/applications?interest=${interest}&diligence=${state.diligenceScore}&education_level=${education}&flexibility=${state.flexibilityScore}&organisation=${state.organisationScore}&perfectionism=${state.perfectionismScore}&sociability=${state.sociabilityScore}&personality_type=${personality}&patience=${state.patienceScore}`);
        const data = await response.json();
        console.log(data);
        setPostArray(data);
    }
    
    fetchData();
  }, [interest, education, state.flexibilityScore, state.organisationScore, state.perfectionismScore, state.sociabilityScore, state.patienceScore, state.diligenceScore, personality]);

      return (
        
          <Container>
            <Row>
                <LeftCol>                   
                    <HeaderFiler>Filter By:</HeaderFiler>                   
                    <FitersStyles>Interests</FitersStyles>
                    <RadioButtonsContainer>
                        <RadioButtonsRow>
                        <RadioInput label="Software Engineering" value="Software Engineering" checked={interest} setter={setInterest} />
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                        <RadioInput label="Business & Data Analytics" value="Business & Data Analytics" checked={interest} setter={setInterest} />
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                        <RadioInput label="Cyber Security" value="Cyber Security" checked={interest} setter={setInterest} />
                        </RadioButtonsRow>
                    </RadioButtonsContainer>
                    <Hr/>
                    <FitersStyles>Education</FitersStyles>

                    <RadioButtonsContainer>
                        <RadioButtonsRow>
                            <RadioButtonsCol>
                            <RadioInput label="HBO" value="HBO" checked={education} setter={setEducation} />
                            </RadioButtonsCol>
                            <RadioButtonsCol>
                            <RadioInput label="WO" value="WO" checked={education} setter={setEducation}  />
                            </RadioButtonsCol>
                        </RadioButtonsRow>
                        
                        <RadioButtonsRow>
                            <RadioButtonsCol>
                            <RadioInput label="PHD" value="Bachelor of Science" checked={education} setter={setEducation}  />
                            </RadioButtonsCol>
                        </RadioButtonsRow>
                    </RadioButtonsContainer>

                    <Hr/>
                    <FitersStyles>Competencies</FitersStyles>
                    <RadioButtonsContainer>
                        <Box width={300}>
                        <SliderHeaders >Organisation Score</SliderHeaders >
                        <Slider defaultValue={0} aria-label="Small steps" name="organisationScore" step={0.1}
                        value={state.organisationScore} onChange={handleChange} valueLabelDisplay="auto"  min={0.0}  max={10} />
                        <SliderHeaders  >Flexibility Score</SliderHeaders >
                        <Slider defaultValue={0} aria-label="Small steps" name="flexibilityScore" step={0.1} min={0.0}  max={10.0}
                        value={state.flexibilityScore} onChange={handleChange} valueLabelDisplay="auto" />
                        <SliderHeaders  >Perfectionism Score</SliderHeaders  >
                        <Slider defaultValue={0} aria-label="Small steps" name="perfectionismScore" step={0.1} min={0.0}  max={10.0}
                        value={state.perfectionismScore} onChange={handleChange} valueLabelDisplay="auto" />
                        <SliderHeaders  >Sociability Score</SliderHeaders  >
                        <Slider defaultValue={0} aria-label="Small steps" name="sociabilityScore" step={0.1} min={0.0}  max={10.0}
                        value={state.sociabilityScore} onChange={handleChange} valueLabelDisplay="auto" />
                        <SliderHeaders  >Patience Score</SliderHeaders  >
                        <Slider defaultValue={0} aria-label="Small steps" name="patienceScore" step={0.1} min={0.0}  max={10.0}
                        value={state.patienceScore} onChange={handleChange} valueLabelDisplay="auto" />
                        <SliderHeaders  >Diligence Score</SliderHeaders  >
                        <Slider defaultValue={0} aria-label="Small steps" name="diligenceScore" step={0.1} min={0.0}  max={10.0}
                        value={state.diligenceScore} onChange={handleChange} valueLabelDisplay="auto" />
                        </Box>                       
                    </RadioButtonsContainer>

                    <Hr/>
                    <FitersStyles>Personality Traits</FitersStyles>
                    <RadioButtonsContainer>
                        <RadioButtonsRow>
                            <RadioInput label="Honest" value="Honest" checked={personality} setter={setPersonality} />
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                            <RadioInput label="Competency" value="Competency" checked={personality} setter={setPersonality} />
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                            <RadioInput label="Confenfidence" value="Confenfidence" checked={personality} setter={setPersonality} />
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                            <RadioInput label="Analytical" value="Analytical" checked={personality} setter={setPersonality} /> 
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                            <RadioInput label="Eager to Learn" value="Eager to Learn" checked={personality} setter={setPersonality} /> 
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                            <RadioInput label="Ambitious" value="Ambitious" checked={personality} setter={setPersonality}  /> 
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                            <RadioInput label="Caring" value="Caring" checked={personality} setter={setPersonality} /> 
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                            <RadioInput label="Flexible" value="Flexible" checked={personality} setter={setPersonality}  /> 
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                            <RadioInput label="Self-relient" value="Self-relient" checked={personality} setter={setPersonality}  /> 
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                            <RadioInput label="Open-minded" value="Open-minded" checked={personality} setter={setPersonality}  /> 
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                            <RadioInput label="Teamwork" value="Teamwork" nchecked={personality} setter={setPersonality}  /> 
                        </RadioButtonsRow>
                        <RadioButtonsRow>
                            <iRadioInput label="Communication Skills" value="Communication Skills" checked={personality} setter={setPersonality}  /> 
                        </RadioButtonsRow>
                    </RadioButtonsContainer>

                    <ResetButtonContainer>
                        <ResetButton type="reset" onClick={resetRadioState}>Clear Filters</ResetButton>
                    </ResetButtonContainer>
                </LeftCol>

                <RightCol>
                <RightColSearchBar>
                    
                    
                </RightColSearchBar>
                <RightColBottomRow>
                    <ApplicantsHeader>Available Applicants</ApplicantsHeader>
                    <GridList cellHeight={50} cols={3} >
                    {posts.map(item => <GridListTile style={{ height: 'auto' }} cols={1} key={item.matching_score}>
                            <CardStyles>
                                <MenuImage src={InformationButtonIcon}/>
                                <CardMainHeader>Atanas Dimulski</CardMainHeader>
                                <CardInnerMailAndPhone>
                                    <CardInfo><FontAwesomeIcon icon={faEnvelope } style={{paddingRight: '5%'}} />dimulskiataans@gmail.com</CardInfo>
                                    <CardInfo><FontAwesomeIcon icon={faPhone } style={{paddingRight: '5%'}} />+31618519658</CardInfo> 
                                </CardInnerMailAndPhone>                                     
                                <Link to={`../profile/${item.id}`}>
                                    <Button> View Profile </Button>
                                </Link>
                            </CardStyles>
                        </GridListTile>    )}                 
                    </GridList>
                    </RightColBottomRow>
                </RightCol>
            </Row>
        </Container>
      );
    
  };
  
  
  export default (MainScreen)