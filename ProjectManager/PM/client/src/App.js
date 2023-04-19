import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Display from './components/Main'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Create from './components/Create';

function App() {
  const [PMList, setPMList] = useState([]);

  return (
    <div className="App">
    <h1>Product Manager</h1>
    <br/>
    <h2>Products</h2>

      <BrowserRouter>
    <Link to='/'>PRODUCTS</Link>
    <br/>
    <Link to='/Create/form'>ADD MORE PRODUCTS</Link>
    <br/>
      <Routes>
        <Route path='/' element={<Display PMList={PMList} setPMList={setPMList}/>} />
        <Route path='/create/form' element={<Create/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
