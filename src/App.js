import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selamat Datang di Website Static Yusril Adriansyah Putra.
        </p>
        <a
          className="App-link"
          href="https://github.com/yusril-adr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Saya
        </a>
      </header>
    </div>
  );
}

export default App;
