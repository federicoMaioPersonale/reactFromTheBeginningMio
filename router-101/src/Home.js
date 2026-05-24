import React from "react";

function Home(props){
    console.log(props);
    // setTimeout(()=>{
    //     // va alla help dopo 2 sec
    //     // props.history.push("/help")
    //     // fa back di browser
    //     // props.history.goBack();
    //     // fa forward di browser in base all'oggetto history
    //     // props.history.goForward();
    // },2000)
    // questo fa partire un alert e ti blocca piu o meno
    props.history.block("are you sure you want to leave?");
    return(
    <h1>{props.title}</h1>
    )
}

export default Home;