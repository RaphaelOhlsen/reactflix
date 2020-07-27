import React from 'react';

import Button from '../Button';

import './Menu.css';

import Logo from '../../assets/img/Logo.png';


export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo"/>
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}