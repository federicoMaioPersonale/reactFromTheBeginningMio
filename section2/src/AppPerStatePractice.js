// # Add StatePractice to app.js
// - go to app.js and import the component (remove EventAndState)
// - render the component in app.js

import React,{Component} from 'react';
import StatePractice from './StatePractice';
import './App.css';

// cambia in App quando serve
class AppPerStatePractice extends Component{
    render(){
      return(
        <StatePractice/>
      )
    }
}

export default AppPerStatePractice;