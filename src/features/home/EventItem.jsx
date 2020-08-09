import React from "react";
import Button from "../../shared/components/Controls/Button";

const EventItem = (props) => {
  const { isVisible, colorClass, rightImg, leftImg, onBack, onNext } = props;

  return (
    <div class={`services__item ${isVisible ? "" : "slider--hide"}`}>
      <div class='services__item-image'>
        <img id='left-image' src={leftImg} alt='' class='image lazyload' />
        {onBack && (
          <Button className='btn__service btn__service--right' onClick={onBack}>
            ANTERIOR
          </Button>
        )}
      </div>
      <div class={`services__item-info flex-center ${colorClass}`}>
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
        <img id='right-image' src={rightImg} alt='' class='image lazyload' />
        {onNext && (
          <Button className='btn__service btn__service--left' onClick={onNext}>
            SIGUIENTE
          </Button>
        )}
      </div>
    </div>
  );
};

export default EventItem;
