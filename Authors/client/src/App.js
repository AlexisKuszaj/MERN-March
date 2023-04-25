import './App.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Create from './components/Create';
import Main from './components/Main' 
import OneMain from './components/OneMain'
import Update from './components/Update'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/author/:id' element={<OneMain/>}/>
      <Route path='/author/update/:id' element={<Update/>}/>
      <Route path='/author/add/:id' element={<Create/>}/>
      <Route path='/' element={<Main/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
