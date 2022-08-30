import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
// import Cadastro from './pages/Cadastro/Cadastro'
import Button from './components/Button/Button'


function App() {
  

  return (
    <div className="App">
      <Header/>
      <Form/>
      <Button/>
    </div>
  )
}

export default App
