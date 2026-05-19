let cards = data.map((course,i)=>{
    return(
        // qua prendiamo data, i dati, e dentro cards c'è l'oggetto pieno di
        // componenti, aventi key i e data = i dati di ogni elemento di data
        // è chiamato course così ha lo stesso nome di quello che dobbiamo mostrare
        <Card key={i} data={course} />
    )
})
console.log(cards)

// ReactDOM.render here
// qua renderizziamo una row unica, dentro root, che ha tutti i componenti cards
ReactDOM.render(
    <div className="row">
        {cards}
    </div>,
    document.getElementById('root')
)