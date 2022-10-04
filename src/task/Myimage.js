import React from 'react'
import "./Myimage.css"
import logo from '../../src/images/Myimage.jpeg';
function Myimage() {
  return (
       <div className="myimg">
        <div>
           <div>
           <h1>Hi I am Chandan,</h1>
           <h1 className="red">Full Stack Developer</h1>
           <h2>An enthusiastic Full Stack Web Developer with a strong set of <br/> as well as non-technical skills and a dedication towards <br/> creating useful and interactive web applications.</h2>
           <span className='ResumBtn'><button>
               <a href="https://drive.google.com/file/d/1LANcQgtPwNwQjUCqvEms8qtDBXquUGRX/view?usp=sharing">Resume</a>
           </button>
           </span>
           </div>
           <div className="sociallink">
              <a href="https://www.linkedin.com/in/chandan-giri-9746a6238/">Linkdin</a>
              <a href="https://github.com/">Github</a>
           </div>
        </div>
        <div className='myimg2'>
            <img src={logo} alt="pagal"/>
        </div>
     </div>
  )
}

export default Myimage
