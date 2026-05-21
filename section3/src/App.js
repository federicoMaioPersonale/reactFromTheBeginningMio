import logo from './logo.svg';
import './App.css';
import axios from "axios"
import React, { Component } from 'react';
import Modal from './Modal';
import Headers from './Headers';

class App extends Component {
  constructor(){
    console.log("constructor running...")
    super();
    this.state = {
      temp:"",
      cityName: "",
      weather: "",
      high:"",
      low:"",
      icon:"",
      isRaining:""
    }
    
    // non possiamo usare questo approccio perchè comunque la response 
    // non si sa quando arriva e this.state.temp potrebbe essere letto e compilato
    // prima della response, quindi tocca usare un altro metodo
    
    // metti url qui come commento
    // const url = 
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
    console.log("component did mount");
    // qua mettiamo un valore placeholder perchè all'inizio non abbiamo una città
    this.getCityWeather('London');
    // mettiamo qui le cose per la modale perchè potrebbe non essere stata inizializzata
    var elems = document.querySelectorAll('.modal');
    // si scrive window.M.... perchè se scrivi solo M eccetera, M non lo riconosce in quanto
    // esso è legato all'oggetto window
    // inizializz la modale di Materialize (M)
    var instances = M.Modal.init(elems, options);;
  }

  // prevProps e prevState sono le proprietà e lo stato prima dell'update del Componente
  // snapshot ti restituisce delle info del tipo: a che posizione era il mouse prima di update
  // componentDidUpdate(prevProps,prevState,snapshot){
  //   console.log("component did update");
  //   console.log(prevProps);
  //   console.log(prevState);
  //   console.log(snapshot);
  // }

  // runna dopo ogni singolo render. render va dopo i cambi di stato o proprietà
  componentDidUpdate(prevProps,prevState){
    // condizione che se lo stato precedente è diverso
    if(this.state.weather !== prevState.weather){
      console.log("component did update");
      console.log(prevProps);
      console.log(prevState);
      console.log(snapshot);
      const isRaining = this.state.weather.includes("rain");
      if(isRaining){
        this.setState({
          isRaining: "Rain Rain go away"
        })
      }
    }
  }

  searchCity = (e)=>{
    e.preventDefault();
    console.log("Form Submitted");
    const city = document.getElementById('city').value;
    this.getCityWeather(city);
  }

  getCityWeather = (city)=>{
        // metti url qui
    const url = `robaApi${city}.org`;
    // lo spostiamo qui in quanto ora ci interessa usare la url modificata con city in dinamica
    axios.get(url).then((resp)=>{
      this.setState({
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_max,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
        cityName : resp.data.name
      })
    })
  }

  render(){
    const iconUrl = `openweathersito/${this.state.icon}.png`;
    return (
      <div className="App">
        <div className='row'>
          <div className='col s6 offset-s3'>
            <Headers temp = {this.state.temp} isRaining = {this.state.isRaining}/>
            {/* <h1>{this.state.temp}</h1>
            <h1>{this.state.isRaining}</h1> */}
            {/* <!-- Modal Trigger --> */}
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
            <form onSubmit={this.searchCity}>
              <input type='text' placeholder='Enter a City Name'/>
            </form>
            {/* <!-- Modal Structure --> */}
            {/* <div id="modal1" className="modal">
              <div className="modal-content">
                <h4>{this.state.cityName}</h4>
                <p>High:{this.state.high} - Low:{this.state.low}</p> */}
                {/* <p>{this.state.weather} {this.state.icon}</p> */}
                {/* <p>{this.state.weather}<img>{iconUrl}</img></p>
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
              </div>
            </div> */}
            {this.state.showModal ? <Modal iconUrl={iconUrl} weather = {this.state.weather}
            cityName = {this.state.cityName} high = {this.state.high}/> : ""}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
