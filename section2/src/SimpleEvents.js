import React, {Component} from 'react';

// passiamo agli eventi degli oggetti che vengono chiamati effettivamente 
// all'azione definita
class SimpleEvents extends Component{

    handleClick(){
        console.log("Test")
    }

    handleChange(){
        console.log("User changed the input!!")
    }

    // l'evento è una proprietà di JS che permette, ad esempio con
    // preventDefault, al click enter del form, di non andare alla pagina successiva.
    handleSumbit(event){
        console.log("Form submitted!")
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSumbit}>
                    <button onClick={this.handleClick} className="btn">Click Me!</button>
                    <input onChange={this.handleChange} type="text" placeholder="Enter some text!" />
                </form>
            </div>
        )
    }
}

export default SimpleEvents;