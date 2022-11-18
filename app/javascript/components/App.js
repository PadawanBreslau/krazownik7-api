import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Challenges from "./Challenges"
import Points from "./Points"
import Home from './Home'

function App(){
return(
   <BrowserRouter>
      <Routes>
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/points" element={<Points />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
