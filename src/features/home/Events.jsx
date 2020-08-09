import React from "react";
import Button from "../../shared/components/Controls/Button";

import givehandImg from "../../shared/assets/img/home/give-a-hand.png";
import flowerFieldImg from "../../shared/assets/img/home/flower-field-edited.png";

const Events = () => {
  return (
    <div class='services__container' id='slider'>
      <div class='services__item'>
        <div class='services__item-image'>
          <img id='left-image' src={flowerFieldImg} alt='' class='image lazyload' />
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
          <img id='right-image' src={givehandImg} alt='' class='image lazyload' />
          <Button className='btn__service btn__service--left'>SIGUIENTE</Button>
        </div>
      </div>
      <div class='services__item slider--hide'>
        <div class='services__item-image'>
          <img id='left-image' src={flowerFieldImg} alt='' class='image lazyload' />
          <Button className='btn__service btn__service--right'>ANTERIOR</Button>
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
          <img id='right-image' src={givehandImg} alt='' class='image lazyload' />
          <Button className='btn__service btn__service--left'>SIGUIENTE</Button>
        </div>
      </div>
      <div class='services__item slider--hide'>
        <div class='services__item-image'>
          <img id='left-image' src={flowerFieldImg} alt='' class='image lazyload' />
          <Button className='btn__service btn__service--right'>ANTERIOR</Button>
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
          <img id='right-image' src={givehandImg} alt='' class='image lazyload' />
          <Button className='btn__service btn__service--left'>SIGUIENTE</Button>
        </div>
      </div>
      <div class='services__item slider--hide'>
        <div class='services__item-image'>
          <img id='left-image' src={flowerFieldImg} alt='' class='image lazyload' />
          <Button className='btn__service btn__service--right'>ANTERIOR</Button>
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
          <img id='right-image' src={givehandImg} alt='' class='image lazyload' />
        </div>
      </div>
    </div>
  );
};

export default Events;
