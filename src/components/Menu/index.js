import React from 'react';
import { Link } from 'react-router-dom';

import { LogoImage, MenuWrapper } from './style.js';

import Button from '../Button';

export default function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage />
      </Link>
      <Button as={ Link } className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </MenuWrapper>
  )
}