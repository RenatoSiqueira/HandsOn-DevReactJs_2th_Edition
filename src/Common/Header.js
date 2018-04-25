import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1 className='site-heading text-center text-white d-none d-lg-block'>      
                <img src='img/logo.png' alt=''/>
            </h1>

            { /* Navigation */ }
            <nav className='navbar navbar-expand-lg navbar-dark py-lg-4' id='mainNav'>
            <div className='container'>
                <NavLink className='navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none' to='/'>Asilo Melhor Idade</NavLink>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarResponsive'>
                <ul className='navbar-nav mx-auto'>
                    <li className='nav-item active px-lg-4'>
                    <NavLink className='nav-link text-uppercase text-expanded' to='/'>Início</NavLink>
                    </li>
                    <li className='nav-item px-lg-4'>
                        <NavLink className='nav-link text-uppercase text-expanded' to='/sobre' activeStyle={{color: '#e6a756'}}>Sobre</NavLink>
                    </li>
                    <li className='nav-item px-lg-4'>
                        <NavLink className='nav-link text-uppercase text-expanded' to='/campanhas' activeStyle={{color: '#e6a756'}}>Campanhas</NavLink>
                    </li>
                    <li className='nav-item px-lg-4'>
                        <NavLink className='nav-link text-uppercase text-expanded' to='/contato' activeStyle={{color: '#e6a756'}}>Contato</NavLink>
                    </li>
                    <li className='nav-item px-lg-4'>                        
                        <NavLink className='nav-link text-uppercase text-expanded' to='/admin' activeStyle={{color: '#e6a756'}}>Administração</NavLink>
                    </li>                    
                </ul>
                </div>
            </div>
            </nav>            
        </div>
    )
}

export default Header