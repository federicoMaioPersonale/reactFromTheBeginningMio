import React,{Component} from "react";

class FlashCard extends Component{
    constructor(){
        super();
        this.state = {
            cardStyle : "Random"
        }
    }

    // gggState = {
    //     // this.setState({
    //     //     cardStyle:""
    //     // })
    //     window.console.log("test")
    // }

    render(){
        return(
            <h1>FlashCard</h1>
        )
    }

}

export default FlashCard;