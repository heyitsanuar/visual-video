import React from "react";
import { Link, useLocation } from "react-router-dom";
import heroImagesJson from "../../../data/header";
import logoImg from "../../../shared/assets/img/logo/transparent-white.png";
import "./HeaderStyles.scss";

const Header = (props) => {
  const { pathname } = useLocation();
  const heroImages = heroImagesJson[pathname.replace("/", "") || "inicio"];

  return (
    <header id='header' className='header'>
      <div id='header-menu' className='header__menu'>
        <div id='logo-container' className='header__logo'>
          <div style={{ cursor: "pointer" }}>
            <img id='header-logo' src={logoImg} alt='' style={{ height: 52 }} />
          </div>
          <i id='header-btn-open' className='header__btn-menu header__btn-menu--open fas fa-bars' />
        </div>
        <div id='header-nav' className='header__navigation'>
          <nav>
            <i
              id='header-btn-close'
              className='header__btn-menu header__btn-menu--close fas fa-times'
            />
            <Link to='/' className='header__links'>
              INICIO
            </Link>
            <Link to='/servicios' className='header__links'>
              SERVICIOS
            </Link>
            <Link to='/galeria' className='header__links'>
              GALERIA
            </Link>
            <Link to='/contacto' className='header__links'>
              CONTACTO
            </Link>
          </nav>
        </div>
      </div>
      <picture>
        <source srcset={heroImages.lq} media='(min-width: 992px)' />
        <source srcset={heroImages.mq} media='(min-width: 768px)' />
        <img srcset={heroImages.hq} alt='' className='image' />
      </picture>
      <div className='header__info'>
        <h1 className='header__title'>COBERTURA DE TUS EVENTOS</h1>
        <p className='header__subtitle'>
          Disfruta en compañia de tus seres queridos grandes eventos mientras son grabados, con
          planes que se adecuan a tus posibilidades.
        </p>
        <Link
          id='btn-scroll'
          to='#landing-page'
          className='header__btn-scroll fas fa-arrow-circle-down mt-5'
        />
      </div>
      <Link id='btn-up' to='#header' className='btn__up fas fa-arrow-circle-up' />
    </header>
  );
};

export default Header;
