import React from 'react';
import Logo from '../../assets/svg/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={Logo} alt={'logo'} />
      </div>
      <nav className='header__nav nav' title='Menu'>
        <ul className='list-reset nav__list'>
          <li className='nav__item'>About</li>
        </ul>
      </nav>
      <div className='header__actions'>
        <button className='btn-reset btn btn-login'>Log in</button>
        <button className='btn-reset btn btn-start'>Start learning</button>
      </div>
    </header>
  );
};

export default Header;
