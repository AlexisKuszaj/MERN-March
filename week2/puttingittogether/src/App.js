import Names from './components/Names';
import './App.css';
import React, { useState } from 'react';

// let age = 26;


function App()
{
  const [age, setAge] = useState(26);
  
  function incrementAge() {
    setAge(prevAge => prevAge +1);
  }
  const [age2, setAge2] = useState(29);
  
  function incrementAge2() {
    setAge2(prevAge => prevAge +1);
  }
  const [age3, setAge3] = useState(26);

  
  function incrementAge3() {
    setAge3(prevAge => prevAge +1);
  }
  const [age4, setAge4] = useState(25);
  
  function incrementAge4() {
    setAge4(prevAge => prevAge +1);
}
   return (
     <div className="App">
      <Names name = {'Kuszaj, Alexis'} age= { age } hair={'Brown'}/>
      <button onClick={incrementAge}>Birthday Button for Alexis</button>
      <Names name = {'Taylor, Nicole'}  age={ age2 } hair={'Brown'}/>
      <button onClick={incrementAge2}>Birthday Button for Nicole</button>
      <Names name = {'Kuszaj, Patryk'} age={ age3 } hair={'Dark Brown'}/>
      <button onClick={incrementAge3}>Birthday Button for Patryk</button>
      <Names name = {'Swillum, Aislinn'} age={ age4 } hair={'Blonde'}/>
      <button onClick={incrementAge4}>Birthday Button for Aislinn</button>

    </div>
  );
}


export default App;

