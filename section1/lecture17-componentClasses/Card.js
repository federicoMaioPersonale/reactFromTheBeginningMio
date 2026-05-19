// function Card(props){
    // return(
    //     <h1>Sanity Check</h1>
    // )    
// }

class Card extends React.Component{
    constructor(){
        super();
        console.log("Constructor ran")
    }
    render(){
        return(
            <div className="col s2">
            <div className="card hoverable small">
                <div className="card-image">
                    {/* busogna usare this.props perchè è un componente stateless
                    che inizia e finisce qui, e è necessario usare this per 
                    ricondurci all'oggetto stesso
                    usiamo props.data perchè così abbiamo definito in app.js*/}
                    <img src={this.props.data.image} />
                </div>
                <div className="card-content">
                    <p>{this.props.data.course}</p>
                    <p>{this.props.data.instructor}</p>
                </div>
                <div className="card-action">
                    <a href="#">$9.99</a>
                </div>
            </div>
        </div>	

        )    
    }
}