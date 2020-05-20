import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './style.css';


class Header extends Component{
  

  render(){
    return(
      <div className="Header">
        <h1>Projeto Filmaria</h1>
        <nav className='nav-bar'>
            <Link to='/'>Início</Link>
            <Link to='/contato'>Contato</Link>
            <Link to='/sobre'>Sobre</Link>
        </nav>
      </div>
    )
  }
}

export default Header;
