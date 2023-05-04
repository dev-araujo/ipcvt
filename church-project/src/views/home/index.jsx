import { useState, useEffect } from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "react-elastic-carousel";

import Footer from "../../components/Footer";
import videos from "../../db/videos.json";

import "./styles.css";

const Home = () => {
  const [dataBase, setDataBase] = useState([]);
  const [load, setLoad] = useState(true);

  const getData = () => {
    setDataBase(videos.items);
    if (videos.items.length > 0) {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
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
        <Footer />

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={load}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </section>
    </div>
  );
};

export default Home;
