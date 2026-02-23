// ReactDOM.render here
// import "Card.js";
// import "data.js";

ReactDOM.render(
    <div className="row">
        <Card name = {data[0].course} title ={data[0].instructor} image={data[0].image}/>
        <Card name = {data[1].course} title ={data[1].instructor} image={data[0].image}/>
        <Card name = {data[2].course} title ={data[2].instructor} image={data[0].image}/>
        <Card name = {data[3].course} title ={data[3].instructor} image={data[0].image}/>
    </div>,
    document.getElementById('root')
);