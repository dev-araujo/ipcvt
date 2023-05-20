import { useState } from 'react';
import './styles.css';
import RouteImageOne from '../../assets/route-church-one.jpg'
import RouteImageTwo from '../../assets/route-church-two.jpg'
import RouteImageThree from '../../assets/route-church-three.jpg'

const Where = () => {
  return (
    <>
      <section className='map' >
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3678.7707953187096!2d-43.365178224486975!3d-22.773885833135154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x99650ec67c48e7%3A0xa08f186be9e99f31!2sR.%20Ven%C3%A2ncia%20Oliveira%20dos%20Santos%20-%20Vilar%20dos%20Teles%2C%20S%C3%A3o%20Jo%C3%A3o%20de%20Meriti%20-%20RJ%2C%2025561-145!3m2!1d-22.7738908!2d-43.362603299999996!5e0!3m2!1spt-BR!2sbr!4v1684253742395!5m2!1spt-BR!2sbr"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>

        <p className='map-orientation' >Para ver uma <strong>rota</strong> do seu endereço até a igreja, clique em <strong>"mais opções"</strong> no mapa acima.</p>
      </section>

      <div className='routes-church' >


        <img src={RouteImageOne} alt="" srcset="" />
        <img src={RouteImageTwo} alt="" srcset="" />
        <img src={RouteImageThree} alt="" srcset="" />
      </div>

      <p>
        Nossos encontros dominicais acontecem em um prédio verde, de esquina, na rua do Colégio Batista, bem pertinho da rua da feira.
      </p>
    </>
  )
};

export default Where;
