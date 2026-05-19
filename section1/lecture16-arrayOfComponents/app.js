// in questo caso una variabile contiene un mapping di data, che è un oggetto js esterno. mapping
// di data con course variabile di appoggio e i
// qui dentro, viene ritornato un componente diverso per ogni iterazione
let cards = data.map((course,i)=>{
    return(
        <Card key={i} data={course} />
    )
})
console.log(cards)

// ReactDOM.render here
ReactDOM.render(
    <div className="row">
        {/* qui ritorniamo cards */}
        {cards}
    </div>,
    document.getElementById('root')
)