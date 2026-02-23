// Card component
// import "data.js";
// import "app.js";


function Card(props){
    console.log(props);
    const img = props.image;
    return(
        <div className="col s2">
            <div className="card hoverable small">
                <div className="card-image">
                    <img src={img}/>
                </div>
                <div className="card-content">
                    <p>{props.course}</p>
                    <p>{props.instructor}</p>
                </div>
                <div className="card-action">
                    <a href="#">$9.99</a>
                </div>
            </div>
        </div>	
    )
}