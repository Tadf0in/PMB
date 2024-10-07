import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand' id='navbar'>
        <div className="container-fluid barre d-flex justify-content-center">
            <ul className="navbar-nav d-flex align-items-center justify-content-center">
                <li className="nav-item">
                    <NavLink to="" className='nav-link'>ACCUEIL</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="infos" className='nav-link'>INFOS</NavLink>
                </li>

                <li>
                    <NavLink to="" className="navbar-brand d-flex align-items-center" id="logo">
                        <img src={logo} className='d-inline-block' alt="Logo" width="150" height="150"/>
                    </NavLink>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ANNÉES
                    </a>
                    <ul class="dropdown-menu">
                        {[...Array(8)].map((_, i) =>
                            <li>
                                <NavLink to={ (2023 - i).toString() } className='nav-link dropdown-item'>{ 2023 - i }</NavLink>
                            </li>
                        )}
                    </ul>
                    </li>

                <li className="nav-item">
                    <NavLink to="contact" className='nav-link'>CONTACT</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  );
}
