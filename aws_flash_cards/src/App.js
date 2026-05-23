import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import QuizBar from './components/QuizBar';
import QuizType from './components/QuizType';

class App extends Component {
  constructor(){
    super();
    this.state={
      cardStyle:"Random"
    }   
  }

  // cardStyle e userChoice vanno messi sopra, nell'app, dato che dovremmo
  // gestire questo stato anche per nodi foglie che non hanno come figli quizBar/quizType.
  // per dubbi, vedi lo screen.
  // Principalmente, lo stato di quizBar ci servirà anche per altri componenti appunto non padri/figli di quizX
  // qua lo stato viene modificato con la selezione dell'utente.
  userChoice = (cardStyle)=>{
    this.setState({
      cardStyle
    })
  }

  render(){
    console.log(this.state.cardStyle);
    return (
      <div className="App">
        <QuizBar userChoice={this.userChoice}/>
      </div>
    );
  }
}

export default App;
