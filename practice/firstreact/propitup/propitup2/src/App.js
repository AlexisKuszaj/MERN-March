
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
<PersonCard
  lastName={"Doe"}
  firstName= {"Jane"}
  age= {18}
  hair= {"brown"}
/>

<PersonCard 
lastName={"Smith"}
firstName={'John'}
age={52}
hair={'blonde'}
/>

<PersonCard 
lastName={'Sims'}
firstName={'Diane'}
age={100}
hair={'red'}
/>

<PersonCard 
lastName={'Saleh'}
firstName={'Sandy'}
age="100"
hair="blonde"
/>
</div>
);
};



export default App;
