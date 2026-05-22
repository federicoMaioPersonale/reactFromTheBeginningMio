import React,{Component} from 'react';

class TemperatureInput extends Component{
        
    render(){
        const temperature = this.props.temperature;
        let style;
        if(temperature>100){
            style={color:"red",
            backgroundColor:"yellow",
            fontSize:30
        }
        }
        return(
            
            <div>
                {/* anche se generalente si usano i file .css esterni 
                richiamate tramite classi e className invece di style*/}
                <legend style={style}>Enter temperature in {this.props.scale}:</legend>
                <input
                        value={temperature}
                        // handleChange è la funzione handleChange(e) passata da Calculator attraverso le props di TemperatureInput
                        // aggiungendo l'e (event) possiamo passare anonimamente la funzione come callback??
                        onChange={(e)=>{this.props.handleChange(e,this.props.scale)}}
                    />
            </div>
        )
    }
}

export default TemperatureInput;