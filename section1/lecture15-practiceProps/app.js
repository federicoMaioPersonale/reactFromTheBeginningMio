// ReactDOM.render here
// import "Card.js";
// import "data.js";

ReactDOM.render(
    <div className="row">
        {/* il prop è data, poi l'oggetto che viene passato come prop si chiama data
        e fa rigferimento a data.js */}
        <Card data = {data[0]}/>
        <Card data = {data[1]}/>
        <Card data = {data[2]}/>
        <Card data = {data[3]}/>
        </div>,
    document.getElementById('root')
);