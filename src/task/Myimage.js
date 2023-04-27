import React from "react";
import "./Myimage.css";
import logo from "../../src/images/Myimage.jpeg";
function Myimage() {
  return (
    <div id="Home" className="myimg">
      <div className="MyimgInner">
        <div>
          <h1>Hi I am Chandan,</h1>
          <h1 className="red">Full Stack Developer</h1>
          {/*<h2>An enthusiastic Full Stack Web Developer with a strong set of technical<br/> as well as non-technical skills and a dedication towards <br/> creating useful and interactive web applications.</h2>*/}
          <h2>
            High adaptability to learn new technologies quickly and paying
            attention to details. Aims to leverage knowledge and build
            world-class Web applications while facilitating organization in
            achieving functional goals.
          </h2>
          <span className="ResumBtn">
            <button>
              <a
                href="https://drive.google.com/file/d/1UWU2ZcRI10HSTpY2WBRNc8OBVCNtFRgk/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </button>
          </span>
        </div>
        <div className="sociallink">
          <a
            href="https://www.linkedin.com/in/chandan-giri-9746a6238/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a href="https://github.com/chandan0c" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
      <div className="myimg2">
        <img style={{ width: "40%",alignItems:"center",position:"relative",top:"30%",left:"30%"}} src={logo} alt="pagal" />
      </div>
    </div>
  );
}

export default Myimage;
