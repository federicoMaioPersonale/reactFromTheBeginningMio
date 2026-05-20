import logo from './logo.svg';
import './App.css';
import axios from "axios"
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      temp:""
    }
    // non possiamo usare questo approccio perchè comunque la response 
    // non si sa quando arriva e this.state.temp potrebbe essere letto e compilato
    // prima della response, quindi tocca usare un altro metodo
    
    // metti url qui come commento
    // // stiamo facendo una HTTP request GET verso la url. quando la richiesta è
    // // completata, verrà eseguito il codice nel .then
    // axios.get(url).then((resp)=>{
    //   // console.log(resp.data);
    //   this.state = {
    //     temp: resp.state.data.temp
    //   }
    // })
  }
  
  // compoonentDidMount è un metodo di Component, nativo, che ci permette di fare operazioni
  // quando il componente App in questo caso, perchè siamo su App, ha finito di fare il primo rendering,
  // componentDidMount viene fatto partire. parte così anche la richiesta: dopo che è stata fatta la richiesta
  // viene ri-fatto un render()
  componentDidMount(){
        // metti url qui
    // stiamo facendo una HTTP request GET verso la url. quando la richiesta è
    // completata, verrà eseguito il codice nel .then
    axios.get(url).then((resp)=>{
      this.setState({
        temp: resp.state.data.temp
      })
    })
  }

  render(){
    return (
      <div className="App">
        <h1>{this.state.temp}</h1>
      </div>
    );
  }
}

export default App;
