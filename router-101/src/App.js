import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import NavBar from './NavBar/NavBar';

const Home = ()=> <h1>Home</h1>
const About = ()=> <h1>About</h1>

function App() {
  return (
    <Router>
      <NavBar/>
    </Router>
  );
}

export default App;
