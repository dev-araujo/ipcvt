import { useState, useEffect } from "react";
import axios from "axios";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "react-elastic-carousel";
// import { Icon } from "@iconify/react";
// import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import InstagramIcon from "@mui/icons-material/Instagram";

import { BASE_URL } from "../../service/BASE_URL";

import "./styles.css";

const Home = () => {
  const [dataBase, setDataBase] = useState([]);
  const [load, setLoad] = useState(true);

  const getData = () => {
    axios.get(BASE_URL).then((response) => {
      setDataBase(response.data);
      if (response.data.length > 0) {
        setLoad(false);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="social-media">
        <p>siga-nos em nossas redes sociais</p>
        <div className="icons">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-youtube"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-spotify"></i>
        </div>
      </section>
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
