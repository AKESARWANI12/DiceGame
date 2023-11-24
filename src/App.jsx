import React from "react";
import styled from "styled-components";
import Startgame from "./components/Startgame";
import { BrowserRouter,Routes,Route} from "react-router-dom";

import GamePlay from "./components/GamePlay";
function App() {
// const [isGameStarted,setIsGameStarted]=useState(false);
// const toggleGamePlay=()=>{
//   setIsGameStarted((prev)=>!prev);
// }

  return (
  <div>
 
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <Startgame />}>

      </Route>
      <Route exact path="/GamePlay" element={<GamePlay/>}>
      
      </Route>
    </Routes>
  </BrowserRouter>
   </div>
  );
};

export default App;
