import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import GamePlay from './GamePlay';


const Startgame=()=>{
  // const navigate = useNavigate()
  const onClickHandler=()=>{
    // navigate('/GamePlay');
  };
return (
<Container>
  <div> 
    
   <img src="./public/images/dices.png" alt="koi mil gaya"/>
    
   </div>
  <div className="content">
    <h1>Dice Game</h1>
    <Link to="/GamePlay">
    <Button 
     onClick ={onClickHandler}>
    PlayNow</Button>
    </Link>
    </div>
</Container>
);
};
export default Startgame;












const Container=styled.div`
max-width:1180px;
height:100vh;
display:flex;
margin:0 auto;
align-items:center;

.content {
 h1{
  font-size: 96px;
  white-space:nowrap;
 }
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

