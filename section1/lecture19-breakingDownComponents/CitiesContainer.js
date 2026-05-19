class CitiesContainer extends React.Component{
    render(){
        // in questo caso data è un array di componenti City
        // per ogni city, essendo un array, serve una key
        // per ogni City. City ha come data city, che comprende come puoi vedere
        // da city.js, image name e price.
        // image come dato ulteriori della city, passato come proprietà a "se stante"
        // se vedi in city.js this.props.image. invece name e price this.props.city.name
        // quindi fanno parte di this.props.city.*
        const cities = this.props.data.map((city,i)=>{
            const randomImage = `http://lorempixel.com/${400+i}/300/city/`
            return(
                <City key={i} city={city} image={randomImage} />
            )
        })
        return(
            <div className="row">
                <div className="cities center-align">
                    {cities}
                </div>
            </div>
        )
    }
}
