import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import logo2 from './logo512.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent textButton="clicca questo bottone"/>
        <img src={logo} className="App-logo" alt="logo" />
        <ImageComponent image={logo2} id="Strong" desc="secondologo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
