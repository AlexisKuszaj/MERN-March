import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Display from './components/Main'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  const [PMList, setPMList] = useState([]);


  return (
    <div className="App">
      <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Display PMList={PMList} setPMList={setPMList}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
