import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logoN from '../Login/neurofy2.png'; 

function Navbar() {
  return (
    <nav className="navbar">
     
      <ul>
        <li><a href="/" exact>Inicio</a></li>
        <li><a href="/#TiposIA">Tipos de IA</a></li>
        <li><a href="/#Noticias">Noticias</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;