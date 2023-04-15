import React from "react";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import ParamsComponent from './components/ParamsComponent';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/:word" element={<ParamsComponent/>} />
        <Route path="/:word/:color/:bgCol" element={<ParamsComponent/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}
    
export default App;
