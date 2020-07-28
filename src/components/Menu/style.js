import styled from 'styled-components';
import Button from '../Button';
import Logo from '../../assets/img/Logo.png';

export const LogoImage = styled.img.attrs({src: Logo, alt: 'AluraFlix Logo'})`
  max-width: 168px;
  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  padding-left: 5%;
  padding-right: 5%;
  
  background: var(--black);
  border-bottom: 2px solid var(--primary);
  
  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

export const ButtonLink = styled(Button)`
  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
  }
`;