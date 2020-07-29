import React from "react";

import kissHqImg from "../../shared/assets/img/home/kiss-hq.jpg";
import kissMqImg from "../../shared/assets/img/home/kiss-mq.jpg";
import kissLqImg from "../../shared/assets/img/home/kiss-lq.jpg";
import cakeHqImg from "../../shared/assets/img/home/slice-of-cake-hq.jpg";
import cakeMqImg from "../../shared/assets/img/home/slice-of-cake-mq.jpg";
import cakeLqImg from "../../shared/assets/img/home/slice-of-cake-lq.jpg";
import candyHqImg from "../../shared/assets/img/home/candy-table-hq.jpg";
import candyMqImg from "../../shared/assets/img/home/candy-table-mq.jpg";
import candyLqImg from "../../shared/assets/img/home/candy-table-lq.jpg";

import "./HomeStyles.scss";

const Home = () => {
  return (
    <section id='landing-page' class='landing-page'>
      <section class='introduce flex-center'>
        <div class='introduce__text container'>
          <h3 class='introduce__subtitle text--s-black'>LO QUE HACEMOS</h3>
          <h2 class='introduce__title text--s-black'>CAPTURAMOS TUS MOMENTOS IMPORTANTES</h2>
          <p class='mb-5 text--s-black'>
            Cada tipo de persona merece unos pinches tacos bien sabrosos apoco no, esto es algo
            único, un incontable número de personas han fallado en casos como los mencionados, por
            eso se crearon los tacos de carnitas, la mejor creación desde la existencia del hombre,
            impreshionanti.
          </p>
          <button class='btn'>
            LEER MÁS
            <span></span>
          </button>
        </div>
      </section>
      <section class='events'>
        <div class='events__recuerdos'>
          <h2 class='events__recuerdos-text text--s-black'>UN EVENTO ES SINÓNIMO DE RECUERDOS</h2>
          <div class='events__images-item events__images-item--right'>
            <picture>
              <source srcset={kissHqImg} media='(min-width: 992px)' />
              <source srcset={kissMqImg} media='(min-width: 768px)' />
              <img srcset={kissLqImg} alt='' class='image' />
            </picture>
          </div>
        </div>
        <div class='events__examples'>
          <div class='events__images'>
            <div class='events__images-item events__images-item--left'>
              <picture>
                <source srcset={cakeHqImg} media='(min-width: 992px)' />
                <source srcset={cakeMqImg} media='(min-width: 768px)' />
                <img data-srcset={cakeLqImg} alt='' class='image' />
              </picture>
            </div>
            <div class='events__images-item events__images-item--center'>
              <picture>
                <source srcset={candyHqImg} media='(min-width: 992px)' />
                <source srcset={candyMqImg} media='(min-width: 768px)' />
                <img data-srcset={candyLqImg} alt='' class='image' />
              </picture>
            </div>
          </div>
          <div class='events__info'>
            <div class='events__info-text'>
              <p class='mb-2 text--s-black'>OFRECEMOS LO QUE NECESITAS</p>
              <h2 class='mb-45'>SERVICIO A TU MEDIDA</h2>
              <p>
                Vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class='services'>
        <div class='w-100 justify-center'>
          <h2>NUESTROS SERVICIOS</h2>
        </div>
        <div class='services__container' id='slider'>
          <div class='services__item'>
            <div class='services__item-image'>
              <img
                id='left-image'
                data-src='assets/img/home/flower-field-edited.png'
                alt=''
                class='image lazyload'
              />
            </div>
            <div class='services__item-info services__item--blue flex-center'>
              <div class='services__item-text'>
                <p class='text--s-black'>LO QUE CUBRIMOS</p>
                <h1 id='service-title' class='services__item-title text--s-black'>
                  Bodas
                </h1>
                <p id='service-description' class='text--s-black'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse
                </p>
                <div class='services__buttons'>
                  <i class='flex-center'></i>
                  <i class='btn__icon-pagination flex-center fas fa-chevron-right'></i>
                </div>
              </div>
            </div>
            <div class='services__item-image services__item-image--hide-at-small'>
              <img
                id='right-image'
                data-src='assets/img/home/give-a-hand.png'
                alt=''
                class='image lazyload'
              />
              <button class='btn btn__service btn__service--left'>
                SIGUIENTE
                <span></span>
              </button>
            </div>
          </div>
          <div class='services__item slider--hide'>
            <div class='services__item-image'>
              <img
                id='left-image'
                data-src='assets/img/home/flower-field-edited.png'
                alt=''
                class='image lazyload'
              />
              <button class='btn btn__service btn__service--right'>
                ANTERIOR
                <span></span>
              </button>
            </div>
            <div class='services__item-info services__item--yellow flex-center'>
              <div class='services__item-text'>
                <p class='text--s-black'>LO QUE CUBRIMOS</p>
                <h1 id='service-title' class='services__item-title text--s-black'>
                  XV Años
                </h1>
                <p id='service-description' class='text--s-black'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse
                </p>
                <div class='services__buttons'>
                  <i class='btn__icon-pagination flex-center fas fa-chevron-left'></i>
                  <i class='btn__icon-pagination flex-center fas fa-chevron-right'></i>
                </div>
              </div>
            </div>
            <div class='services__item-image services__item-image--hide-at-small'>
              <img
                id='right-image'
                data-src='assets/img/home/give-a-hand.png'
                alt=''
                class='image lazyload'
              />
              <button class='btn btn__service btn__service--left'>
                SIGUIENTE
                <span></span>
              </button>
            </div>
          </div>
          <div class='services__item slider--hide'>
            <div class='services__item-image'>
              <img
                id='left-image'
                data-src='assets/img/home/flower-field-edited.png'
                alt=''
                class='image lazyload'
              />
              <button class='btn btn__service btn__service--right'>
                ANTERIOR
                <span></span>
              </button>
            </div>
            <div class='services__item-info services__item--red flex-center'>
              <div class='services__item-text'>
                <p class='text--s-black'>LO QUE CUBRIMOS</p>
                <h1 id='service-title' class='services__item-title text--s-black'>
                  Fiestas
                </h1>
                <p id='service-description' class='text--s-black'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse
                </p>
                <div class='services__buttons'>
                  <i class='btn__icon-pagination flex-center fas fa-chevron-left'></i>
                  <i class='btn__icon-pagination flex-center fas fa-chevron-right'></i>
                </div>
              </div>
            </div>
            <div class='services__item-image services__item-image--hide-at-small'>
              <img
                id='right-image'
                data-src='assets/img/home/give-a-hand.png'
                alt=''
                class='image lazyload'
              />
              <button class='btn btn__service btn__service--left'>
                SIGUIENTE
                <span></span>
              </button>
            </div>
          </div>
          <div class='services__item slider--hide'>
            <div class='services__item-image'>
              <img
                id='left-image'
                data-src='assets/img/home/flower-field-edited.png'
                alt=''
                class='image lazyload'
              />
              <button class='btn btn__service btn__service--right'>
                ANTERIOR
                <span></span>
              </button>
            </div>
            <div class='services__item-info services__item--purple flex-center'>
              <div class='services__item-text'>
                <p class='text--s-black'>LO QUE CUBRIMOS</p>
                <h1 id='service-title' class='services__item-title text--s-black'>
                  Eventos
                </h1>
                <p id='service-description' class='text--s-black'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse
                </p>
                <div class='services__buttons'>
                  <i class='btn__icon-pagination flex-center fas fa-chevron-left'></i>
                </div>
              </div>
            </div>
            <div class='services__item-image services__item-image--hide-at-small'>
              <img
                id='right-image'
                data-src='assets/img/home/give-a-hand.png'
                alt=''
                class='image lazyload'
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
