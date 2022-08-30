import React from 'react'
import S from './Header.module.css'

function Header() {
  return (
    <header className={S.header}>
        <nav>
            <a href="#">Cadastro</a>
            <a href="#">Clientes</a>
        </nav>
    </header>
  )
}

export default Header