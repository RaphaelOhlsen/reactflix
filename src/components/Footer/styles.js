import styled from 'styled-components';
import Logo from '../../assets/img/Logo.png'


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const LogoImage = styled.img.attrs({src: Logo, alt: 'AluraFlix Logo'})`
  max-width: 252px;
  @media (max-width: 800px) {
    max-width: 120px;
  }
`;