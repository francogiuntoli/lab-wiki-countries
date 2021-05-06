import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import axios from 'axios'

function App() {
  return (
    <div>
      <NavBar/>,
      <CountriesList/>
    </div>
  );
}

export default App;
