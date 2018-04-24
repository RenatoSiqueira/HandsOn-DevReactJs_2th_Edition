import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () =>{
    return (
        <nav className='navbar navbar-expand-sm' id='mainNav'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <Link className='nav-link text-uppercase text-expanded' to='/admin'>Principal</Link>
                    </li>            
                    <li className='nav-item'>
                        <Link className='nav-link text-uppercase text-expanded' to='/admin/campanhas'>Gerenciar Campanhas</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-uppercase text-expanded' to='/admin/novacampanha'>Criar Campanha</Link>
                    </li>                    
                </ul>
            </div>
        </nav>
    )
}

export default AdminHeader