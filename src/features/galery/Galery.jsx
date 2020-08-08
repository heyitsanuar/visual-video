import React from "react";
import "./GaleryStyles.scss";
import trinketImg from "../../shared/assets/img/services/trincket-table-hq.jpg";

const Galery = (props) => {
  return (
    <section id='landing-page' className='landing-page'>
      <section className='gallery'>
        <div className='flex-center'>
          <div className='gallery__info mt-10 text-center'>
            <h2 className='mb-5'>PORTAFOLIO</h2>
            <p className='mb-9'>
              A continuación te ofrecemos una muestra del trabajo que llevamos a cabo dentro de
              Visual Videography, podrás apreciar contenido en video y fotografía en diversos
              eventos
            </p>
          </div>
        </div>
        <div className='container mb-10'>
          <iframe
            title='Demo'
            className='gallery__video'
            src='https://www.youtube.com/embed/uJ_1HMAGb4k?rel=0&amp;showinfo=0'
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
          ></iframe>
        </div>
        <div className='gallery__images container flex-center flex-wrap'>
          <h2 className='mb-10'>GALERÍA</h2>
          <div className='gallery__columns-container'>
            <div className='gallery__column'>
              <div className='gallery__image gallery__image--small'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
              <div className='gallery__image gallery__image--large'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
              <div className='gallery__image gallery__image--medium'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
              <div className='gallery__image gallery__image--medium'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
            </div>
            <div className='gallery__column'>
              <div className='gallery__image gallery__image--medium'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
              <div className='gallery__image gallery__image--large'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
              <div className='gallery__image gallery__image--medium'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
              <div className='gallery__image gallery__image--small'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
            </div>
            <div className='gallery__column'>
              <div className='gallery__image gallery__image--small'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
              <div className='gallery__image gallery__image--medium'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
              <div className='gallery__image gallery__image--medium'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
              <div className='gallery__image gallery__image--large'>
                <img src={trinketImg} alt='' className='image lazyload' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Galery;
