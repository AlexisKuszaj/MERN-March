import Names from './components/Names';
import './App.css';

function App() {
  return (
    <div className="App">
      <Names name = {'Kuszaj, Alexis'} age={'26'} hair={'Brown'}/>
      <Names name = {'Taylor, Nicole'}  age={'29'} hair={'Brown'}/>
      <Names name = {'Kuszaj, Patryk'} age={'26'} hair={'Dark Brown'}/>
      <Names name = {'Swillum, Aislinn'} age={'25'} hair={'Blonde'}/>

    </div>
  );
}

export default App;

