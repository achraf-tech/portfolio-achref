import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithubSquare,
  FaPlay,
} from "react-icons/fa";
import Typical from "react-typical";

const Banner = () => {
  const [state] = React.useState({
    title: "I'm Achref",
    text: "a junior web developer with ambitions to become Full Stack!",
    Image: "/image/TOM.png",
  });

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <div data-aos="zoom-in">
                  <ul className="header__ul">
                    <li>
                      <FaFacebook />
                    </li>

                    <li>
                      <FaTwitter />
                    </li>

                    <li>
                      <FaInstagram />
                    </li>
                    <li>
                      <FaGithubSquare />
                    </li>
                  </ul>
                </div>

                <div data-aos="zoom-in-right">
                  <h1>{state.title}</h1>
                </div>
                <div data-aos="zoom-out-left">
                  <p>{state.text}</p>
                </div>

                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="" className="btn btn-smart">
                    <FaPlay className="paly" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="banner__img">
              <img src={state.Image} alt="TOM" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
