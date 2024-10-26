import '../../css/navbar.css';

import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

export default function Navbar() {
    return (<>
    <nav id="desktop-nav">
        <ul id="navbar">
            <li className="nav-item" onClick={() => window.location.href = "#"}>
                <NavLink to="/" className='nav-link'>ACCUEIL</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/infos" className='nav-link'>INFOS</NavLink>
            </li>
            <li className='nav-item' id="logo">
                <NavLink to="/" onClick={() => window.location.href = "#"}>
                    <img src={logo} className='d-inline-block' alt="Logo"/>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/galerie/2024" className='nav-link'>GALERIE</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/" className='nav-link' onClick={() => window.location.href = "#contact"}>CONTACT</NavLink>
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
                <li className="nav-item">
                    <NavLink to="/galerie/2024" className='nav-link'>GALERIE</NavLink>
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
