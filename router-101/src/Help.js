import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HelpCostumer = ()=><h1>Help costumer</h1>
const HelpHost = ()=><h1>Help host</h1>

function Help(props){
    return(
    <div>
        <div>
            {/* questi servono come link per l'appunto, per raggiungere l'endpoint */}
            <Link to="/help/customer"/>
            <Link to="/help/host"/>
        </div>
        <p>a pic goes here</p>
        {/* ATTENZIONE: se lasci exact path in app.js come route "/help", le cose che sono qui dentro,
        anche se tichiami il component help, non si vedranno! */}
        <Route path="/help/customer" component={HelpCostumer}></Route>
        <Route path="/help/host" component={HelpHost}></Route>
        <h3>Footer hor Help</h3>
    </div>
    )
}

export default Help;