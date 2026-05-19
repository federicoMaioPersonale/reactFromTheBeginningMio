// import { Component } from "react"

// change this Component to a class!
// function CatNav(props){
//     // get data from props and use map to build an array of <li>
//     // ... code goes here
//     return(
//         <div>
//             {/* Your Code Here */}
//         </div>
//     )
// }

class CatNav extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        // sto creando una mappatura che per ogni componente estrapolo  
        // icona, titolo e i 
        // dentro un metodo come java
        // è come un forEach, link è una variabile d'appoggio.
        // stiamo iterando tra le proprietà di "data", che abbiamo usato nell'app.Js
        //per richiamare le props del Componente CatNav

        const navLinks = this.props.data.map((link,i)=>{
            return (
                <li key = {i} className="cat-link left valign-wrapper">
                    <i className="material-icons">{link.icon}</i>{link.title}
                </li>   
            )
        })
        // return del render stesso
        return(
            // la row va renderizzata solo una volta così come il cat nav center align
            // poi passiamo la variabile che ci serve per il resto
            <div className="row">
                <ul className="cat-nav center-align">
                    {navLinks}
                </ul>
            </div>
        )
    }
}