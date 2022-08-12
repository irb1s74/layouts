import React from 'react';
import footerPic from '../../assets/svg/footer-pic.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={footerPic} alt='footer pic' />
      <p className='footer__copy'>©2021 All rights reserved</p>
    </footer>
  );
};

export default Footer;
