import React from 'react'
import styled  from 'styled-components'
import { useNavigate } from 'react-router-dom'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import { useState } from 'react'
import ShowRules from './ShowRules'
const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
 const [error,setError]=useState("");
 const [ShowRules1,setShowRules]=useState(false);

  const generateRandomNumber=(min,max)=>{
    //    console.log(Math.floor(Math.random()*(max-min)+min));
        return Math.floor(Math.random()*(max-min)+min);
    };
  const roleDice=()=>{
      if(!selectedNumber){
        setError("You have not selected any number"); 
        return;
      }
      setError("");
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);
       
        if(selectedNumber== randomNumber){
          setScore(prev=>prev+randomNumber);
        }
        else{
          setScore(prev=>prev-2);
        }
        setSelectedNumber(undefined);
    };
  const resetScore=()=>{
    setScore(0);
  }

  
  return (
    <MainContainer>
    <div className="top_section">
    <TotalScore score={score}/>
    <NumberSelector error={error}
    setError={setError}
     selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
    </div>
    <RoleDice currentDice={currentDice} roleDice={roleDice}/>
    <div className="btns">
      <OutlineButton onClick={resetScore}>
        Reset Score
      </OutlineButton>
    <Button onClick={()=>setShowRules((prev)=>!prev)}>
      {ShowRules1 ?"Hide":"Show"}Rules</Button>
    </div>
    {ShowRules1 && <ShowRules/>}
    </MainContainer>
  )
}




export default GamePlay
const MainContainer=styled.main`
padding-top:70%
.top_section{
  display:flex;
  justify-content:space-between;
  align-items:end;
}
.btns{
  display:flex;
  flex-direction:coulmn;
  justify-content:center;
 gap:10px;
  align-items:center;
}

`;
const Button=styled.button`
color:white;
padding:10px 18px;
background: #000000;;
border-radius:5px;
min-width:220px;
border:none;
font-size:16px;
border:1px solid transparent;
cursor:pointer;
transition:0.4 s background ease-in;
&:hover{
  background-color:white;
  border:1px solid black;
  color:black;
  transition:0.3s background ease-in;
}
`;

const OutlineButton=styled(Button)`

background-color:white;
border:1px solid black;
color:black;
&:hover{
  background-color:black;
  border:1px solid transparent;
  color:white;
  transition:0.3s background ease-in;
}
`;
