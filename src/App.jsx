import React,{ useState,useEffect } from 'react'
import './App.css'
import Animation from './components/animations'
import Navbar from './components/navbar'

function App() {
  
  const [mode,setMode] = useState(()=>localStorage.darkMode || null)
  let dark
  if (mode === 'true') {
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
  // console.log(localStorage.darkMode)

  return (
    <div className={darkMode ? 'body dark' : "body"}>
      <Navbar dark={setDark} darkMode={darkMode}/>
      <Animation />
    </div>
  )
}

export default App
