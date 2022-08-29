import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Home from './pages/Home/Home'

function App() {
  

  return (
    <div className="App">
      <Home/>
      <Header/>
      <Button texto={Próxima}/>
    </div>
  )
}

export default App
