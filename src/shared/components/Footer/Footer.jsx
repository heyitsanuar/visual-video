import React from "react";
import { Link } from "react-router-dom";
import Button from "../Controls/Button";

import greetImgHq from "../../../shared/assets/img/footer/greet-hq.jpg";
import greetImgMq from "../../../shared/assets/img/footer/greet-mq.jpg";
import greetImgLq from "../../../shared/assets/img/footer/greet-lq.jpg";
import "./FooterStyles.scss";

const Footer = (props) => {
  return (
    <footer className='footer'>
      <section className='contact'>
        <div className='contact__image'>
          <picture>
            <source src={greetImgHq} alt='' media='(min-width: 992px)' />
            <source src={greetImgMq} alt='' media='(min-width: 768px)' />
            <img src={greetImgLq} alt='' className='image lazyload' />
          </picture>
        </div>
        <div
          className='contact__form flex-center text'
          style={{ flexWrap: "wrap", textAlign: "center" }}
        >
          <h3 className='caracteristica__title text--s-black mb-3' style={{ maxWidth: 300 }}>
            ¿Tienes dudas o te interesa consultar más información?
          </h3>
          <div className='mb-5 w-100'>
            <p className='text--s-black' style={{ maxWidth: 300, margin: "0px auto" }}>
              Escríbenos un mensaje y responderemos a tus dudas con mucho gusto
            </p>
          </div>
          <Button>ENVÍANOS UN CORREO</Button>
        </div>
      </section>
      <section className='social flex-center'>
        <Link
          to='/'
          className='social__icon social__icon--facebook flex-center fab fa-facebook-f'
        />
        <Link to='/' className='social__icon social__icon--twitter flex-center fab fa-twitter' />
        <Link
          to='/'
          className='social__icon social__icon--instagram flex-center fab fa-instagram'
        />
        <Link to='/' className='social__icon social__icon--youtube flex-center fab fa-youtube' />
      </section>
    </footer>
  );
};

export default Footer;
