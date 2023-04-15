import Ad from './components/Ad';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import SubContents from './components/SubContents';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
      <SubContents/>
      </Main>
      {/* <Ad/> */}
      <Nav/>
    
    </div>
  );
}

export default App;
