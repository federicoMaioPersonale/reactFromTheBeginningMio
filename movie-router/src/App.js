import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
      <Route exact path="/" component={Home}></Route>
      {/* così creaiamo un parametro who, quando uno entro in /about
      richiamato quando sto in host:porta/about/roba */}
      <Route exact path="/about:who" component={About}></Route>
    </div>
    </Router>
  );
}

export default App;
