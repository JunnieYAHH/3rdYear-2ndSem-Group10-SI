import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';


function App() {
  return (
    <div className="App">
      <Header />
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/JunnieYAHH/3rdYear-2ndSem-Group10-SI.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        </div>
    </div>
  );
}

export default App;
