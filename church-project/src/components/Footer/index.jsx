import ImageLogo from "../../assets/logo-ipcvt.png";

import { useNavigate } from "react-router-dom";

import social from "../../db/social.json";

import "./styles.css";

function Footer() {
  const nav = useNavigate();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer-content">
          <img
            className="footer__logo"
            onClick={() => nav("/")}
            src={ImageLogo}
            alt="logo-ipcvt"
          />
          <p>
            ipcvt - Igreja Presbiteriana Central em Vilar dos Teles - Rua
            Venância Oliveira Santos, 289 - Vilar dos Teles - CEP 25560-000 São
            João de Meriti/RJ
          </p>
        </div>

        <section className="activities">
          <p className="title">Atividades </p>
          <div className="activies__list">
            <p>Domingo -09:00 - EBD (presencial)</p>
            <p>Domingo -18:00 - Culto (presencial e online)</p>
            <p>Quarta - 19:30 - Reencontro (presencial)</p>
          </div>
        </section>

        <section className="social-media">
          <p>Redes sociais</p>
          <div className="icons">
            {social.contentIcons.map((icon, index) => (
              <a key={index} href={icon.link} target="_blank" rel="noreferrer">
                <i className={icon.class}></i>
              </a>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
