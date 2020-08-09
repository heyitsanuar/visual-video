import React from "react";
import Button from "../../shared/components/Controls/Button.jsx";

import flowerFieldHq from "../../shared/assets/img/services/flower-field-edited-hq.jpg";
import flowerFieldMq from "../../shared/assets/img/services/flower-field-edited-mq.jpg";
import flowerFieldLq from "../../shared/assets/img/services/flower-field-edited-lq.jpg";
import cheersHq from "../../shared/assets/img/services/cheers-2-hq.jpg";
import cheersMq from "../../shared/assets/img/services/cheers-2-mq.jpg";
import cheersLq from "../../shared/assets/img/services/cheers-2-lq.jpg";
import usAgainsHq from "../../shared/assets/img/services/us-against-hq.jpg";
import usAgainsMq from "../../shared/assets/img/services/us-against-mq.jpg";
import usAgainsLq from "../../shared/assets/img/services/us-against-lq.jpg";
import trinketHq from "../../shared/assets/img/services/trincket-table-hq.jpg";
import trinketMq from "../../shared/assets/img/services/trincket-table-mq.jpg";
import trinketLq from "../../shared/assets/img/services/trincket-table-lq.jpg";
import "./ServicesStyles.scss";

const Services = () => {
  return (
    <section id='landing-page' className='landing-page'>
      <section className='cost container'>
        <div className='cost__item flex-center'>
          <span className='cost__title cost--basic-strong'>BÁSICO</span>
          <span className='cost__price cost--basic-tiny cost--basic-strong flex-center'>$2000</span>
          <div className='cost__specs'>
            <p>Incluye</p>
            <ul className='mt-35'>
              <li>Misa</li>
              <li>Bodorrio</li>
              <li>Fiesta</li>
            </ul>
          </div>
        </div>
        <div className='cost__item flex-center'>
          <span className='cost__title cost--premium-strong'>BÁSICO</span>
          <span className='cost__price cost--premium-tiny cost--premium-strong flex-center'>
            $2000
          </span>
          <div className='cost__specs'>
            <p>Incluye</p>
            <ul className='mt-35'>
              <li>Misa</li>
              <li>Bodorrio</li>
              <li>Fiesta</li>
            </ul>
          </div>
        </div>
        <div className='cost__item flex-center'>
          <span className='cost__title cost--sesion-strong'>BÁSICO</span>
          <span className='cost__price cost--sesion-tiny cost--sesion-strong flex-center'>
            $2000
          </span>
          <div className='cost__specs'>
            <p>Incluye</p>
            <ul className='mt-35'>
              <li>Misa</li>
              <li>Bodorrio</li>
              <li>Fiesta</li>
            </ul>
          </div>
        </div>
        <div className='cost__item flex-center'>
          <span className='cost__title cost--ultimate-strong'>BÁSICO</span>
          <span className='cost__price cost--ultimate-tiny cost--ultimate-strong flex-center'>
            $2000
          </span>
          <div className='cost__specs'>
            <p>Incluye</p>
            <ul className='mt-35'>
              <li>Misa</li>
              <li>Bodorrio</li>
              <li>Fiesta</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='table__section container'>
        <h2 className='mb-5 text-center'>Compara los paquetes</h2>
        <table className='table mt-1'>
          <thead className='mb-2'>
            <tr>
              <th className='table__th table__th--main'>Servicios</th>
              <th className='table__th cost--basic-tiny'>Basico</th>
              <th className='table__th cost--premium-tiny'>Fotografía</th>
              <th className='table__th cost--sesion-tiny'>Sesión</th>
              <th className='table__th cost--ultimate-tiny'>Clip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='table__td table__td--main'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, placeat!
              </th>
              <th className='table__td'>
                <i className='table__icon-check fas fa-check-circle'></i>
              </th>
              <th className='table__td'>
                <i className='table__icon-check fas fa-check-circle'></i>
              </th>
              <th className='table__td'>
                <i className='table__icon-check fas fa-check-circle'></i>
              </th>
              <th className='table__td'>
                <i className='table__icon-check fas fa-check-circle'></i>
              </th>
            </tr>
            <tr>
              <th className='table__td table__td--main'>
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </th>
              <th className='table__td'></th>
              <th className='table__td'>
                <i className='table__icon-check fas fa-check-circle'></i>
              </th>
              <th className='table__td'>
                <i className='table__icon-check fas fa-check-circle'></i>
              </th>
              <th className='table__td'>
                <i className='table__icon-check fas fa-check-circle'></i>
              </th>
            </tr>
            <tr>
              <th className='table__td table__td--main'>Lorem ipsum dolor sit amet consectetur.</th>
              <th className='table__td'></th>
              <th className='table__td'></th>
              <th className='table__td'>
                <i className='table__icon-check fas fa-check-circle'></i>
              </th>
              <th className='table__td'>
                <i className='table__icon-check fas fa-check-circle'></i>
              </th>
            </tr>
            <tr>
              <th className='table__td table__td--main'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </th>
              <th className='table__td'></th>
              <th className='table__td'></th>
              <th className='table__td'></th>
              <th className='table__td'>
                <i className='table__icon-check fas fa-check-circle'></i>
              </th>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='caracteristicas'>
        <div className='caracteristica'>
          <div className='caracteristica__info caracteristica__info--yellow flex-center'>
            <div className='caracteristica__content'>
              <h3 className='caracteristica__title text--s-black mb-3'>GRABACION DE VIDEO</h3>
              <div className='border border--s-black border--short'></div>
              <p className='text--s-black mt-35 mb-5'>
                Capturamos cada segundo del evento de manera profesional con video en alta calidad
                para que ningun detalle se escape. Capturamos cada segundo del evento de manera
                profesional con video en alta calidad para que ningun detalle se escape.
              </p>
              <Button to='/galeria'>GALERIA</Button>
            </div>
          </div>
          <div className='caracteristica__image'>
            <picture>
              <source srcset={flowerFieldHq} media='(min-width: 992px)' />
              <source srcset={flowerFieldMq} media='(min-width: 768px)' />
              <img srcset={flowerFieldLq} alt='' className='image' />
            </picture>
          </div>
        </div>
        <div className='caracteristica'>
          <div className='caracteristica__image'>
            <picture>
              <source srcset={cheersHq} media='(min-width: 992px)' />
              <source srcset={cheersMq} media='(min-width: 768px)' />
              <img srcset={cheersLq} alt='' className='image' />
            </picture>
          </div>
          <div className='caracteristica__info caracteristica__info--cream flex-center'>
            <div className='caracteristica__content'>
              <h3 className='caracteristica__title text--s-black mb-3'>GRABACION DE VIDEO</h3>
              <div className='border border--s-black border--short'></div>
              <p className='text--s-black mt-35 mb-5'>
                Capturamos cada segundo del evento de manera profesional con video en alta calidad
                para que ningun detalle se escape. Capturamos cada segundo del evento de manera
                profesional con video en alta calidad para que ningun detalle se escape.
              </p>
              <Button to='/galeria'>GALERIA</Button>
            </div>
          </div>
        </div>
        <div className='caracteristica'>
          <div className='caracteristica__info caracteristica__info--baby-blue flex-center'>
            <div className='caracteristica__content'>
              <h3 className='caracteristica__title text--s-black mb-3'>GRABACION DE VIDEO</h3>
              <div className='border border--s-black border--short'></div>
              <p className='text--s-black mt-35 mb-5'>
                Capturamos cada segundo del evento de manera profesional con video en alta calidad
                para que ningun detalle se escape. Capturamos cada segundo del evento de manera
                profesional con video en alta calidad para que ningun detalle se escape.
              </p>
              <Button to='/galeria'>GALERIA</Button>
            </div>
          </div>
          <div className='caracteristica__image'>
            <picture>
              <source srcset={usAgainsHq} media='(min-width: 992px)' />
              <source srcset={usAgainsMq} media='(min-width: 768px)' />
              <img srcset={usAgainsLq} alt='' className='image' />
            </picture>
          </div>
        </div>
        <div className='caracteristica'>
          <div className='caracteristica__image'>
            <picture>
              <source srcset={trinketHq} media='(min-width: 992px)' />
              <source srcset={trinketMq} media='(min-width: 768px)' />
              <img srcset={trinketLq} alt='' class='image' />
            </picture>
          </div>
          <div className='caracteristica__info flex-center'>
            <div className='caracteristica__content'>
              <h3 className='caracteristica__title text--s-black mb-3'>GRABACION DE VIDEO</h3>
              <div className='border border--s-black border--short'></div>
              <p className='text--s-black mt-35 mb-5'>
                Capturamos cada segundo del evento de manera profesional con video en alta calidad
                para que ningun detalle se escape. Capturamos cada segundo del evento de manera
                profesional con video en alta calidad para que ningun detalle se escape.
              </p>
              <Button to='/galeria'>GALERIA</Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
