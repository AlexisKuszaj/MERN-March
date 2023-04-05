
import { useState } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const [age, setAge] = useState(18);
  function incrementAge(){
    setAge(prevAge => prevAge +1)
  }


const [age2, setAge2] = useState(52)
function incrementAge2(){
  setAge2(prevAge => prevAge + 1)
}

const [age3, setAge3] = useState(100)
function incrementAge3 (){
  setAge3(prevAge => prevAge + 1)
}

const [age4, setAge4] = useState(100)
function incrementAge4(){
  setAge4(prevAge => prevAge + 1)
}
  return (
    <div className="App">
<PersonCard
  lastName={"Doe"}
  firstName= {"Jane"}
  age= {age}
  hair= {"brown"}
/>
  <button onClick={incrementAge}>Happy Birthday</button>

<PersonCard 
lastName={"Smith"}
firstName={'John'}
age={age2}
hair={'blonde'}
/>
<button onClick={incrementAge2}>Happy Birthday</button>

<PersonCard 
lastName={'Sims'}
firstName={'Diane'}
age={age3}
hair={'red'}
/>
<button onClick={incrementAge3}>Happy Birthday</button>

<PersonCard 
lastName={'Saleh'}
firstName={'Sandy'}
age={age4}
hair={"blonde"}
/>
<button onClick={incrementAge4}>Happy Birthday</button>


</div>
);
};



export default App;
