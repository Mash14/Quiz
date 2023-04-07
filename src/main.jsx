import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import Home from './components/home'
import Animation from './components/animations'
import GeneralQ from './components/general'
import Books from './components/books'
import Filmz from './components/film'
import Musicy from './components/music'
import Tv from './components/tv'
import VideoG from './components/videoGames'

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/animations' element={<Animation />} />
        <Route path='/general' element={<GeneralQ />} />
        <Route path='/entertainment/books' element={<Books />} />
        <Route path='/entertainment/film' element={<Filmz />} />
        <Route path='/entertainment/music' element={<Musicy />} />
        <Route path='/entertainment/tv' element={<Tv />} />
        <Route path='/entertainment/video-games' element={<VideoG />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Main />
  </React.StrictMode>,
)
