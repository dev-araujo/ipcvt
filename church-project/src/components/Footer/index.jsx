import ImageLogo from "../../assets/logo-ipcvt.png";

import { useNavigate } from "react-router-dom";
import "./styles.css";

function Footer() {
  const nav = useNavigate();
  const contentIcons = [
    { class: "bi bi-facebook", link: "https://pt-br.facebook.com/ipcvt/" },
    {
      class: "bi bi-youtube",
      link: "https://www.youtube.com/@IPCVTIgrejaPresbiteriana",
    },
    { class: "bi bi-instagram", link: "https://www.instagram.com/ipcvt/" },
    {
      class: "bi bi-spotify",
      link: "https://open.spotify.com/show/1RWZu10Ghrz8AlRaLS3imu",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          className="footer__logo"
          onClick={() => nav("/")}
          src={ImageLogo}
          alt="logo-ipcvt"
        />
        <p>
          ipcvt - Igreja Presbiteriana Central em Vilar dos Teles - Rua Venância
          Oliveira Santos, 289 - Vilar dos Teles - CEP 25560-000 São João de
          Meriti/RJ
        </p>
      </div>
      <div className="footer__container">
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
            {contentIcons.map((icon) => (
              <a href={icon.link} target="_blank" rel="noreferrer">
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
