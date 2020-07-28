import React from 'react';
import { Link } from 'react-router-dom';

import { LogoImage, MenuWrapper, ButtonLink } from './style.js';



export default function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage />
      </Link>
      <ButtonLink as={ Link } className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </ButtonLink>
    </MenuWrapper>
  )
}