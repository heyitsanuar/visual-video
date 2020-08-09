import React from "react";

import Events from "./Events";
import Button from "../../shared/components/Controls/Button";

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
      <section className='introduce flex-center'>
        <div className='introduce__text container'>
          <h3 className='introduce__subtitle text--s-black'>LO QUE HACEMOS</h3>
          <h2 className='introduce__title text--s-black'>CAPTURAMOS TUS MOMENTOS IMPORTANTES</h2>
          <p className='mb-5 text--s-black'>
            Cada tipo de persona merece unos pinches tacos bien sabrosos apoco no, esto es algo
            único, un incontable número de personas han fallado en casos como los mencionados, por
            eso se crearon los tacos de carnitas, la mejor creación desde la existencia del hombre,
            impreshionanti.
          </p>
          <Button>LEER MAS</Button>
        </div>
      </section>
      <section className='events'>
        <div className='events__recuerdos'>
          <h2 className='events__recuerdos-text text--s-black'>
            UN EVENTO ES SINÓNIMO DE RECUERDOS
          </h2>
          <div className='events__images-item events__images-item--right'>
            <picture>
              <source srcset={kissHqImg} media='(min-width: 992px)' />
              <source srcset={kissMqImg} media='(min-width: 768px)' />
              <img srcset={kissLqImg} alt='' class='image' />
            </picture>
          </div>
        </div>
        <div className='events__examples'>
          <div className='events__images'>
            <div className='events__images-item events__images-item--left'>
              <picture>
                <source srcset={cakeHqImg} media='(min-width: 992px)' />
                <source srcset={cakeMqImg} media='(min-width: 768px)' />
                <img srcset={cakeLqImg} alt='' class='image' />
              </picture>
            </div>
            <div className='events__images-item events__images-item--center'>
              <picture>
                <source srcset={candyHqImg} media='(min-width: 992px)' />
                <source srcset={candyMqImg} media='(min-width: 768px)' />
                <img srcset={candyLqImg} alt='' class='image' />
              </picture>
            </div>
          </div>
          <div className='events__info'>
            <div className='events__info-text'>
              <p className='mb-2 text--s-black'>OFRECEMOS LO QUE NECESITAS</p>
              <h2 className='mb-45'>SERVICIO A TU MEDIDA</h2>
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
      <section className='services'>
        <div className='w-100 justify-center'>
          <h2>NUESTROS SERVICIOS</h2>
        </div>
        <Events />
      </section>
    </section>
  );
};

export default Home;
