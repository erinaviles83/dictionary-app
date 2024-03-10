import logo from "./logo.png"; 
import './App.css';
import Dictionary from "./Dictionary"; 

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="Dictionary-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer"><small>Coded by Erin Aviles 📖</small>
      </footer>
    </div>
    </div>
  );
}


