function Card(props){
    console.log(props);
    return(
        <div className="col s2">
            <div className="card hoverable small">
                <div className="card-image">
                    <img src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" />
                </div>
                <div className="card-content">
                    <p>{props.name}</p>
                    <p>{props.title}</p>
                </div>
                <div className="card-action">
                    <a href="#">$9.99</a>
                </div>
            </div>
        </div>	
    )
}