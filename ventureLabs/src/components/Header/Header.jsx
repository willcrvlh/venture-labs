import React from 'react'
import S from './Header.module.css'

function Header() {
  return (
    <header className={S.header}>
        <nav>
            <link to="/cadastro"/>
            <link to="/cliente"/>
        </nav>
    </header>
  )
}

export default Header