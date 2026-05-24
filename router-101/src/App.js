import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home';
import Help from './Help';
// const Home = ()=> <h1>Home</h1>
const Host = ()=> <h1>Host</h1>
// const Help = ()=> <h1>Help</h1>
const Login = ()=> <h1>Login</h1>
const Signup = ()=> <h1>Signup</h1>

function App() {
  return (
    <Router>
      {/* prima navbar esa renza route. Però, per vedere le proprietà, c'è bisogno di metterlo dentro una route 
      ovviamente con path non exact perchè ci serve vederla sempre*/}
      {/* qua passa history e location automaticamnete */}
      <Route path = "/" component={NavBar}/>
        {/* <Route exact path="/" component={Home} /> 
        con render() nella route, per avere la history, devi anche passare alla funzione anonima props, e poi in uno dei campi History*/}
        <Route exact path="/" render={(props)=>{
          return <Home title = "Hello" history={props.history} match={props.match}/>
        }} />
        <Route exact path="/host" component={Host} />
        <Route path="/help" component={Help} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
