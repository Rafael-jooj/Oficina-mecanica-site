import React from 'react'
import './header.css'

const Header = ()=>{
    return(
        <header>
            <div className='header-logo'>
                <a href='/'>
                    <img src='./imagens/logo1.png' alt='logo'></img>
                </a>
            </div>
            <div className='header-info'>
                <ul>
                    <li>Serviços</li>
                    <li>Horários</li>
                    <li>Contate-Nos</li>
                </ul>
            </div>
            
        </header>
    )
}


export default Header;