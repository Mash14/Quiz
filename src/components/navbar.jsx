import React,{useState} from 'react';

function Navbar(props) {

    
    return ( 
        <nav>
            <h2>Quiz</h2>
            <button onClick={props.dark}>{props.darkMode ? <i className="fa-solid fa-sun" title='light-mode'></i> : <i className="fa-sharp fa-solid fa-moon" title='dark-mode'></i>}</button>   
        </nav>
     );
}

export default Navbar;