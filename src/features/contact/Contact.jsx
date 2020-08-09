import React from "react";

import dvdCoverImgHq from "../../shared/assets/img/contact/dvd-cover-hq.jpg";
import dvdCoverImgMq from "../../shared/assets/img/contact/dvd-cover-mq.jpg";
import dvdCoverImgLq from "../../shared/assets/img/contact/dvd-cover-lq.jpg";
import inviteImgHq from "../../shared/assets/img/contact/invitation-hq.jpg";
import inviteImgMq from "../../shared/assets/img/contact/invitation-mq.jpg";
import inviteImgLq from "../../shared/assets/img/contact/invitation-lq.jpg";
import "./ContactStyles.scss";

const Contact = (props) => {
  return (
    <section id='landing-page' class='landing-page'>
      <section class='caracteristicas'>
        <div class='caracteristica'>
          <div class='caracteristica__info flex-center'>
            <div class='caracteristica__content'>
              <h3 class='caracteristica__title text--s-black mb-3'>
                ¿Interesado en algún paquete?
              </h3>
              <div class='border border--s-black border--short'></div>
              <p class='text--s-black mt-35 mb-5'>
                Puedes ponerte en contacto para más detalles acerca de cada paquete, así como para
                conocer otras características que podemos satisfacer de acuerdo a tus necesidades.
              </p>
            </div>
          </div>
          <div class='caracteristica__image'>
            <picture>
              <source src={dvdCoverImgHq} media='(min-width: 992px)' />
              <source src={dvdCoverImgMq} media='(min-width: 768px)' />
              <img src={dvdCoverImgLq} alt='' class='image' />
            </picture>
          </div>
        </div>
        <div class='caracteristica'>
          <div class='caracteristica__image'>
            <picture>
              <source src={inviteImgHq} media='(min-width: 992px)' />
              <source src={inviteImgMq} media='(min-width: 768px)' />
              <img src={inviteImgLq} alt='' class='image' />
            </picture>
          </div>
          <div class='caracteristica__info flex-center'>
            <div class='caracteristica__content'>
              <h3 class='caracteristica__title text--s-black mb-3'>
                ¿Necesitas algo más personalizado?
              </h3>
              <div class='border border--s-black border--short'></div>
              <p class='text--s-black mt-35 mb-5'>
                Escríbenos tus mensaje en nuestra caja de abajo o en nuestras redes sociales, de esa
                forma podremos atenderte de una manera más atenta y garantizarte el servicio que
                mereces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
