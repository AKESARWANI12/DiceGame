import styled from "styled-components";
import react from 'react';

const NumberSelector=({error,setError,selectedNumber,setSelectedNumber})=>{

    const arrNumber=[1,2,3,4,5,6];
   

    const numberSelectorhandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    }
    // console.log(selectedNumber);
    return (
       <NumberSelectorContainer>
       <p className="error">{error}</p>
    <div className="flex" >
    {
        arrNumber.map((value,i)=>(
        <Box 
        isSelected={value===selectedNumber}
         key={i} onClick={()=>numberSelectorhandler(value)}>{value}</Box>
        ))
    }
    </div>
    <p>SelectNumber</p>
    </NumberSelectorContainer> 
);
};
export default NumberSelector;

const NumberSelectorContainer=styled.div`
display:flex;
flex-direction:column;
align-items:end;

.flex{   
    display:flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:700px;
}
.error{
    color:red;
}
`;
const Box=styled.div`
height:72px;
width:72px;
border:1px solid black;
font-size:24px;
display:grid;
place-items:center;
font-weight:700px;
background-color:${(props)=>(props.isSelected ?"black":"white")};
color:${(props)=>(props.isSelected ?"white":"black")}
`;
