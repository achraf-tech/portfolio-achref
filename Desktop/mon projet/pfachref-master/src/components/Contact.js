import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithubSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyCenter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/image/baya.png" alt="baya" />
                <p>
It would be better if the bottom one looked to the right <br/>and the top one disappeared.                </p>
                <ul className="contactCircles">
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaGithubSquare />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
