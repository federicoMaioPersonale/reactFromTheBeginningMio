import React,{Component} from 'react';

class FormPractice extends Component{

    constructor(){
        super();
        // se non metti un valore iniziale, il value sotto sarà undefined
        this.state={
            name:""
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log("form submitted");
        const name = document.getElementById('name').value;
        console.log(this.state.name);
    }

    // usiamo changeName perchè per ogni cambio vogliamo che ciò sia gestito da react
    // inoltre se non lo mettiamo un evento onchange, il valore del box non cambierà
    // perchè value={this.state.name} e se non gestiamo l'onChange, il valore sarà sempre uguale
    changeName = (e)=>{
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        })
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className = 'col s6 offset-sm-3'>
                        <form onSubmit ={this.handleSubmit}>
                            {/* senza onChange, il valore sarà sempre "" e non sarà possibile cambiarlo */}
                            <input onChange={this.changeName} value={this.state.name} type='text' id="name" placeholder='Enter Name'/>
                            <input type='submit' value="submit"/>
                        </form>
                    </div>
                </div>            
            </div>
        )
    }
}
export default FormPractice;