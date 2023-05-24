import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {

    
    return ( 
        <nav>
            <Link to='/'>
                <h2>Quiz</h2>
            </Link>
            <button onClick={props.dark}>{props.darkMode ? <i className="fa-solid fa-sun" title='light-mode'></i> : <i className="fa-sharp fa-solid fa-moon" title='dark-mode'></i>}</button>   
        </nav>
     );
}

export default Navbar;