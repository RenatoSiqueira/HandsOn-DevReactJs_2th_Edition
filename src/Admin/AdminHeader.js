import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../base'

const AdminHeader = () => {
    const handleLogout = () => auth.signOut()

    return (
        <nav className='navbar navbar-expand-sm' id='mainNav'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <NavLink className='nav-link text-uppercase text-expanded' to='/admin'>Principal</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link text-uppercase text-expanded' to='/admin/campanhas' activeStyle={{ color: '#e6a756' }}>Gerenciar Campanhas</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link text-uppercase text-expanded' to='/admin/novacampanha' activeStyle={{ color: '#e6a756' }}>Criar Campanha</NavLink>
                    </li>
                    <li className='nav-item'>
                        <button className='btn text-uppercase' onClick={handleLogout}>Deslogar</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminHeader