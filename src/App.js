
import './App.css';
import Navbar from './component/Navbar';
import Main from './router/Main';





function App() {
  return (
    <div className="App">
      <Navbar/>
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
