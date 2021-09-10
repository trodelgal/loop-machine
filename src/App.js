import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import background from "./background.png"

function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
     <Main/>
    </div>
  );
}

export default App;
