import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="links">
          <a href="./about">About Us</a>
          <a href="./capabilities">Capabilities</a>
          <a href="./contact">Contact</a>
        </div>
      </header>
      <body>
        Here's the Body
      </body>
    </div>
  );
}

export default App;
