import React,{useState,useEffect} from 'react';
import {Outlet, Link} from 'react-router-dom';
import Navbar from './navbar';

function Home() {
    const [modez,setMode] = useState(()=>localStorage.darkMode || null)
    
    // Dark Mode
    let dark
    if (modez === 'true') {
        dark = true
    } else{
        dark = false
    }
    const [darkMode,setDarkMode] = useState(dark || false)

    function setDark() {
        setDarkMode(prev => !prev)
    } 
    useEffect(()=>{
        
        if (darkMode) {
            localStorage.setItem('darkMode','true')
        } else {
            localStorage.setItem('darkMode','false')
        }
        
    },[darkMode])
    return ( 
        <div className={darkMode ? 'body dark' : "body"}>
            <Navbar dark={setDark} darkMode={darkMode}/>
            <h1>Welcome</h1>
            <Link to="/animations">Cartoons & Animations</Link>
            <Link to="/general">General Knowledge</Link>
            <Link to="/entertainment/books">Entertainment : Books</Link>
            <Link to="/entertainment/film">Entertainment : Film</Link>
        </div>
    );
}

export default Home;