import { useState, useEffect } from "react";
import axios from "axios";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "react-elastic-carousel";

import videos from "../../db/videos.json";
import social from "../../db/social.json";

import "./styles.css";

const Home = () => {
  const [dataBase, setDataBase] = useState([]);
  const [load, setLoad] = useState(true);

  const getData = () => {
    setDataBase(videos.items.reverse());
    if (videos.items.length > 0) {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="container-videos-area">
        <Carousel itemsToShow={1}>
          {dataBase.map((video, index) => {
            return (
              <section key={index} className="videos-area">
                <div className="layout-videos">
                  <h2 className="title-videos">{video.snippet.title}</h2>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  >
                    <img
                      alt="video thumbnail"
                      className="thumb"
                      src={video.snippet.thumbnails.high.url}
                    />
                  </a>
                </div>
              </section>
            );
          })}
        </Carousel>
        <section className="social-media">
          <p>siga-nos em nossas redes sociais</p>
          <div className="icons">
            {social.media.map((item, index) => (
              <a key={index} target="_blank" rel="noreferrer" href={item.url}>
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </section>

        <footer>
          <div className="footer-content">
            <p>
              ipcvt - Igreja Presbiteriana Central em Vilar dos Teles - Rua
              Venância Oliveira Santos, 289 - Vilar dos Teles - CEP 25560-000
              São João de Meriti/RJ
            </p>
          </div>
        </footer>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={load}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </section>
    </>
  );
};

export default Home;
