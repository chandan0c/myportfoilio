import React from 'react'
import "./Project.css";
import travelocity from '../../src/images/travelocity.png'
import zoomcar from '../../src/images/zoomcar.png'
import kfc from '../../src/images/kfc.png'
import myfitness from '../../src/images/myfitness.png'
function Project() {
  return (
    <div className='projectcontainer' id="project">
       <h1>Projects</h1>
       <div className='project'>
         <div>
            <img src={travelocity} alt="pagal"/>
            <h1>Trevleocity Clone</h1>
            <h2>It Provide online hotel and cab booking service to the user</h2>
            <h3>HTML | CSS | JAVASCRIPT | JSON-SERVER | REACT | Redux | MATERIAL-UI | CHAKRA-UI</h3>
            <div className='github'>
                <a href='https://github.com/akram3598786/TravelCity-Clone'>Source Code</a>
                <a href='https://travelcity-clone.netlify.app/'>Live</a>
            </div>
         </div>
         <div>
            <img src={myfitness} alt="pagal"/>
            <h1>MyFitnessPal Clone</h1>
            <h2>It helps user to achive there fitness goal </h2>
            <h3>HTML | CSS | JAVASCRIPT | JSON-SERVER | REACT | Redux</h3>
            <div className='github'>
                <a href='https://github.com/Ankit-Ankushe/myFitnessPal-Clone'>Source Code</a>
                <a href='https://lifestylepalteam.netlify.app/'>Live</a>
            </div>
         </div>
         <div>
            <img src={kfc} alt="pagal"/>
            <h1>KFC Clone</h1>
            <h2>user can order food thorugh kfc website</h2>
            <h3>HTML | CSS | JAVASCRIPT | JSON-SERVER | REACT | Redux</h3>
            <div className='github'>
                <a href='https://github.com/Mukul-hub-dotcom/KFC_clone_Project'>Source Code</a>
                <a href='https://kfc-clonning.netlify.app/'>Live</a>
            </div>
         </div>
         <div>
            <img src={zoomcar} alt="pagal"/>
            <h1>ZoomCar Clone</h1>
            <h2>provide Online cab booking facility to the user</h2>
            <h3>HTML | CSS | JAVASCRIPT | JSON-SERVER | REACT | Redux | LOCAL-STORAGE</h3>
            <div className='github'>
                <a href='https://github.com/rahul-6472/zoomcar.in'>Source Code</a>
                <a href='https://zoomcar-india.netlify.app/'>Live</a>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Project
