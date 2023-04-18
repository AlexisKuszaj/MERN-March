
import './App.css';
import Display from './components/Display';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import AddPet from './components/AddPet';
import OnePet from './components/OnePet';
import EditShelter  from './components/EditShelter'

function App() {
  const [shelterList, setShelterList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000.api/allShelters')
    .then((res) => {
      setShelterList(res.data.shelter)
    })
    .catch((err) => {
      console.log(err)
  })
},[])


  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Display shelterList={shelterList} setShelterList={setShelterList}/>}/>
      <Route path='/addPet/form' element={<AddPet/>}/>
      <Route path='/viewShelter/:id' element={<OnePet/>}/>
      <Route path='/editShelter/:id' element={<EditShelter/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
