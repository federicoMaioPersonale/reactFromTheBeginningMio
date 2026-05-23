import React from 'react'
import {Link} from 'react-router-dom';

function NavBar(props){
    return(
        <nav className='black'>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">AirBnb</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/host">Become a Host</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Log in</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;