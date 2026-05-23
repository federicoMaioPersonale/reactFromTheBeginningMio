import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const Home = ()=> <h1>Home</h1>
const About = ()=> <h1>About</h1>

// base di App().js di lezioni iniziali
function App() {
  return (
    <Router>
      {/* cambia la url per testare */}
      {/* senza exact, se scrivo localhost:3000/about vedo anche home, perchè comunque lo slash c'è */}
      <h1>Header</h1>
      <div>
        {/* we don't use anchor tags that's so 2014 */}
        <Link to="/">Home</Link>
        {/* rimanda alla route about */}
        <Link to="/about">About</Link>
      </div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <h1>Footer</h1>
    </Router>
  );
}

export default App;
