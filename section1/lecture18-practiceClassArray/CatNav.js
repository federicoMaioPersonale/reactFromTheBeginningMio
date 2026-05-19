// import { Component } from "react"

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
        // mi creo tutti gli elementi navLinks
        const navLinks = this.props.data.map((link,i)=>{
            return(
                <li key={i} class="cat-link left valign-wrapper">
				    <i class="material-icons">{link.icon}</i>{link.title}
			    </li>
            )
        })
        // ritorna una row unica con tutti i navlinks iteranti. map qua è fondamentale
        return(
            <div class="row">
                <ul class="cat-nav center-align">
                    {navLinks}
                </ul>
            </div>
        )
    }
}