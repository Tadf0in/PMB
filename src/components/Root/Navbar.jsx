import '../../css/navbar.css';

import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

export default function Navbar() {
    return (<>
    <nav id="desktop-nav">
        <ul id="navbar">
            <li className="nav-item" onClick={() => window.location.href = "#"}>
                <NavLink to="" className='nav-link'>ACCUEIL</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="infos" className='nav-link'>INFOS</NavLink>
            </li>

            <li className='nav-item' id="logo">
                <NavLink to="" onClick={() => window.location.href = "#"}>
                    <img src={logo} className='d-inline-block' alt="Logo"/>
                </NavLink>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ANNÉES
                </a>
                <ul className="dropdown-menu" id="nav-dropdown">
                    {[...Array(20)].map((_, i) =>
                        <li key={2024-i}>
                            <NavLink to={ (2024 - i).toString() } className='nav-link dropdown-item'>{ 2024 - i }</NavLink>
                        </li>
                    )}
                </ul>
            </li>

            <li className="nav-item">
                <NavLink to="" className='nav-link' onClick={() => window.location.href = "#contact"}>CONTACT</NavLink>
            </li>
        </ul>
    </nav>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="mobile-nav">
        <div className="container-fluid">
            <div className="navbar-brand" href="#" id="logo">
                <NavLink to="" onClick={() => window.location.href = "#"}>
                    <img src={logo} className='d-inline-block' alt="Logo"/>
                </NavLink>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="" className='nav-link' onClick={() => window.location.href = "#"}>ACCUEIL</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="infos" className='nav-link'>INFOS</NavLink>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ANNÉES
                    </a>
                    <ul className="dropdown-menu" id="nav-dropdown">
                        {[...Array(20)].map((_, i) =>
                            <li key={2024-i}>
                                <NavLink to={ (2024 - i).toString() } className='nav-link dropdown-item'>{ 2024 - i }</NavLink>
                            </li>
                        )}
                    </ul>
                </li>

                <li className="nav-item">
                    <NavLink to="" className='nav-link' onClick={() => window.location.href = "#contact"}>CONTACT</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </>);
}
