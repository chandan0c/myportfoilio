import React from 'react'
import "./Myimage.css"
import logo from '../../src/images/Myimage.jpeg';
function Myimage() {
  return (
       <div className="myimg" alt="image">
        <div>
           <h1>Hi I am Chandan ,</h1>
           <h1 className="red">Full Stack Developer</h1>
           <h2>An enthusiastic Full Stack Web Developer with a strong set of <br/> as well as non-technical skills and a dedication towards <br/> creating useful and interactive web applications.</h2>
           <button>
               <a href="https://drive.google.com/file/d/1LANcQgtPwNwQjUCqvEms8qtDBXquUGRX/view?usp=sharing">Resume</a>
           </button>
           <div className="sociallink">
              <a href="https://www.linkedin.com/in/chandan-giri-9746a6238/">Linkdin</a>
              <a href="https://github.com/">Github</a>
           </div>
        </div>
        <div>
            <img src={logo} alt="my image"/>
        </div>
     </div>
  )
}

export default Myimage
