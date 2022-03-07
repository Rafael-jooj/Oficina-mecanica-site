import React from 'react'
import './header.css'

const Header = ()=>{
    return(
        <header className='header-inicio'>
            <div className='header-image'>
                <img src='./imagens/Logo.png' alt='logo'></img>
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