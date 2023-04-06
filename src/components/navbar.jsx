import React,{useState} from 'react';

function Navbar(props) {

    
    return ( 
        <>
            <button onClick={props.dark}>{props.darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-sharp fa-solid fa-moon"></i>}</button>   
        </>
     );
}

export default Navbar;