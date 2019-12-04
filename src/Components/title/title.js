import React from "react";
//styles
import "./title.scss";
// icon components
import Location from "./icons/location";
import Facebook from "./icons/facebook";
import Github from "./icons/github";
import Instagram from "./icons/instagram";
import Linkedin from "./icons/linkedin";
function Title() {
  return (
    <div className="Title center">
        <div className="img-container center">
          <div className="img"></div>
        </div>
        <div className="description">
          <h3>Rafael Tabasca</h3>
          <p>Full stack Developer</p>
          <span>claro que si</span>
          <button>Contact</button>
        </div>

      <section className="social">
        <section className="social-content">
          <div className="items layout">
            <h4>Avaibility:</h4>
            <h4>Age:</h4>
            <h4>Location:</h4>
            <h4>Years Experience:</h4>
          </div>
          <div className="text layout">
            <span>
              Full Time(40hr/wk)<span id="avaible">Avaible!</span>
            </span>
            <span>23</span>
            <span className="center location">
              Margarita,Nueva Esparta,Venezuela
              <Location />
            </span>
            <span>2</span>
          </div>
        </section>
        <section className="social-Links center">
          <Facebook />
          <Instagram />
          <Github />
          <Linkedin />
        </section>
      </section>
    </div>
  );
}

export default Title;
