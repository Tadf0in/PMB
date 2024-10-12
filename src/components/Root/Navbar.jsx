import '../../css/navbar.css';

import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

export default function Navbar() {
    return (<>
    <nav id="desktop-nav">
        <ul id="navbar">
            <li className="nav-item">
                <NavLink to="" className='nav-link'>ACCUEIL</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="infos" className='nav-link'>INFOS</NavLink>
            </li>

            <li className='nav-item' id="logo">
                <NavLink to="">
                    <img src={logo} className='d-inline-block' alt="Logo"/>
                </NavLink>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ANNÉES
                </a>
                <ul class="dropdown-menu" id="nav-dropdown">
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
    </nav>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="mobile-nav">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" id="logo">
                <NavLink to="">
                    <img src={logo} className='d-inline-block' alt="Logo"/>
                </NavLink>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li className="nav-item">
                    <NavLink to="" className='nav-link'>ACCUEIL</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="infos" className='nav-link'>INFOS</NavLink>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ANNÉES
                    </a>
                    <ul class="dropdown-menu" id="nav-dropdown">
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
        </div>
    </nav>
    </>);
}
