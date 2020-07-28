import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../../shared/assets/img/logo/transparent-white.png";
import heroHqImg from "../../../shared/assets/img/heroes/gallery/hero-gallery-hq.jpg";
import heroMqImg from "../../../shared/assets/img/heroes/gallery/hero-gallery-mq.jpg";
import heroLqImg from "../../../shared/assets/img/heroes/gallery/hero-gallery-lq.jpg";
import "./HeaderStyles.scss";

const Header = () => {
  return (
    <header id='header' className='header'>
      <div id='header-menu' className='header__menu'>
        <div id='logo-container' className='header__logo'>
          <a href='#'>
            <img id='header-logo' src={logoImg} alt='' style={{ height: 52 }} />
          </a>
          <i
            id='header-btn-open'
            className='header__btn-menu header__btn-menu--open fas fa-bars'
          ></i>
        </div>
        <div id='header-nav' className='header__navigation'>
          <nav>
            <i
              id='header-btn-close'
              className='header__btn-menu header__btn-menu--close fas fa-times'
            ></i>
            <Link />
            <Link to='/' className='header__links'>
              INICIO
            </Link>
            <Link to='/servicios' className='header__links'>
              SERVICIOS
            </Link>
            <Link path='/galleria' className='header__links'>
              GALERIA
            </Link>
            <Link path='/contact' className='header__links'>
              CONTACTO
            </Link>
          </nav>
        </div>
      </div>
      <picture>
        <source srcset={heroHqImg} media='(min-width: 992px)' />
        <source srcset={heroMqImg} media='(min-width: 768px)' />
        <img srcset={heroLqImg} alt='' className='image' />
      </picture>
      <div className='header__info'>
        <h1 className='header__title'>COBERTURA DE TUS EVENTOS</h1>
        <p className='header__subtitle'>
          Disfruta en compañia de tus seres queridos grandes eventos mientras son grabados, con
          planes que se adecuan a tus posibilidades.
        </p>
        <a
          id='btn-scroll'
          href='#landing-page'
          className='header__btn-scroll fas fa-arrow-circle-down mt-5'
        ></a>
      </div>
      <a id='btn-up' href='#header' className='btn__up fas fa-arrow-circle-up'></a>
    </header>
  );
};

export default Header;
