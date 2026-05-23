import React,{Component} from "react";
import RandomWeighted from "./RandomWeighted";
import RegularCard from "./RegularCard";
import MultiCard from "./MultiCard";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icone
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
// parte core della libreria
import {library} from'@fortawesome/fontawesome-svg-core';

library.add(faSpinner);

class FlashCard extends Component{
    constructor(){
        super();
        this.apiHostRoot = `https://aws-services.robertbunch.dev/services`;
        // this.apiHostRoot = `https://google.com`;
        this.state = {
            flipClass : "",
            questionData: "",
            ready: false
        }
    }

    componentDidMount(){
        this.newCard();
    }

    flip = (e)=>{
        let newFlip = this.state.flipClass === "" ? "flip" : "";
        this.setState({
            flipClass:newFlip
        })
    }

    // prende la root devisa in path, ossia il servizio rest in base a quello che clicckiamo
    newCard = ()=>{
        let path;
        console.log(this.props.cardStyle);
        path = this.apiHostRoot+"/all";
        const cardStyle = this.props.cardStyle;
        if(cardStyle==='Random'|| cardStyle==='Regular'){
            // scelta di endPoint
            path = this.apiHostRoot+'/all'
        }
        else if(cardStyle==='Weighted'){
            path = this.apiHostRoot+'/weighted'
        }
        else{
            path = this.apiHostRoot+'/multi'
        }
        axios.get(path).then((response)=>{
            this.setState({
                questionData: response.data,
                ready:true
            })
            this.props.nowReady();
        })
        .catch((e)=>{
            console.log(e.console.error());
        });
    }

    render(){
        
        // dipende se lo stato è ready o meno: se non è ready, fa vedere un icona di caricamento detta spinner
        if(!this.props.ready){
            this.newCard();
            return(
                <div className="spinner-wrapper">
                    <FontAwesomeIcon icon="spinner" size="6x" spin />
                </div>
            )
        }

        const cardStyle = this.props.cardStyle;
        let card;
        if(cardStyle==='Multi'){
            card = <MultiCard questionData={this.state.questionData}/>
        }
        else if(cardStyle === 'Regular'){
            card = <RegularCard questionData={this.state.questionData}/>
        }
        else{
            card = <RandomWeighted questionData={this.state.questionData}/>
    
        }

        return(
            <>
                <div className="row align-items-center card-holder">
                    <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
                        {/* <RandomWeighted/> */}
                        {/* <MultiCard/> */}
                        {/* <RegularCard questionData={this.state.questionData}/> */}
                        {card}
                    <button onClick={this.newCard} className="btn btn-primary btn-lg">Next Question</button>
                    </div>
                </div>
            </>
        )
    }

}

export default FlashCard;