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
            <Link to="/entertainment/music">Entertainment : Music</Link>
            <Link to="/entertainment/tv">Entertainment : Tv</Link>
            <Link to="/entertainment/video-games">Entertainment : Video Games</Link>
            <Link to="/entertainment/board-games">Entertainment : Board Games</Link>
            <Link to="/science/nature">Science : Nature</Link>
            <Link to="/science/computers">Science : Computers</Link>
            <Link to="/science/mathematics">Science : Mathematics</Link>
            <Link to="/mythology">Mythology</Link>
            <Link to="/sports">Sports</Link>
            <Link to="/geography">Geography</Link>
            <Link to="/history">History</Link>
            <Link to="/politics">Politics</Link>
            <Link to='/entertainment/anime'>Entertainment : Japanese Anime & Manga</Link>

            
        </div>
    );
}

export default Home;