
import './App.css';
import Navbar from './component/Navbar';
import Main from './router/Main';

import EtapeButtonContainer from './component/EtapeButtonContainer';
import DropDown from './component/DropDown';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <EtapeButtonContainer/>
      <DropDown/>
    <main>
      <Main/>
    </main>
    <footer className='small text-center'>
    Dawan 2023
    </footer>
    </div>
  );
}

export default App;
