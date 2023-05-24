import React,{useState,useEffect} from 'react';
import {Outlet, Link} from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

function Home() {
    const [modez,setMode] = useState(()=>localStorage.darkMode || null)

    // Dark Mode
    let dark;
    if (modez === 'true') {
        dark = true;
    } else{
        dark = false;
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
        <div className={darkMode ? 'body dark container' : "body container"}>
            <div className="content">
                <Navbar dark={setDark} darkMode={darkMode}/>
                <h1>Quizes</h1>
                <div className="links">
                    <Link to="/animals" className='quiz'>Animals</Link>
                    <Link to="/animations" className='quiz'>Cartoons & Animations</Link>
                    <Link to="/entertainment/comics" className='quiz'>Comics</Link>
                    <Link to="/entertainment/board-games" className='quiz'>Entertainment : Board Games</Link>
                    <Link to="/entertainment/books" className='quiz'>Entertainment : Books</Link>
                    <Link to="/entertainment/film" className='quiz'>Entertainment : Film</Link>
                    <Link to="/entertainment/music" className='quiz'>Entertainment : Music</Link>
                    <Link to='/entertainment/anime' className='quiz'>Entertainment : Japanese Anime & Manga</Link>
                    <Link to="/entertainment/tv" className='quiz'>Entertainment : Tv</Link>
                    <Link to="/entertainment/video-games" className='quiz'>Entertainment : Video Games</Link>
                    <Link to="/general" className='quiz'>General Knowledge</Link>
                    <Link to="/geography" className='quiz'>Geography</Link>
                    <Link to="/history" className='quiz'>History</Link>
                    <Link to="/mythology" className='quiz'>Mythology</Link>
                    <Link to="/science/computers" className='quiz'>Science : Computers</Link>
                    <Link to="/science/mathematics" className='quiz'>Science : Mathematics</Link>
                    <Link to="/science/nature" className='quiz'>Science : Nature</Link>
                    <Link to="/sports" className='quiz'>Sports</Link>
                    <Link to="/politics" className='quiz'>Politics</Link>
                    <Link to="/vehicles" className='quiz'>Vehicles</Link>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;