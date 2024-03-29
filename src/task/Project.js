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
         <div style={{width:"95%"}}>
            <img src={travelocity} alt="pagal"/>
            <h1>Trevleocity Clone</h1>
            <h2> <span style={{fontSize:15}}> Description :</span>It Provide online hotel and cab booking service to the user</h2>
            <h3><span style={{fontSize:15}}>TECH STACK</span>:HTML | CSS | JAVASCRIPT | JSON-SERVER | REACT | Redux | MATERIAL-UI | CHAKRA-UI</h3>
            <div className='github'>
                <a href='https://github.com/akram3598786/TravelCity-Clone'target="_blank" rel="noreferrer">Source Code</a>
                <a href='https://travelcity-clone.netlify.app/'target="_blank" rel="noreferrer">Live</a>
            </div>
         </div>
         <div>
            <img src={myfitness} alt="pagal"/>
            <h1>MyFitnessPal Clone</h1>
            <h2> <span style={{fontSize:15}}>DESCRIPTION</span>:It helps user to achive there fitness goal </h2>
            <h3><span style={{fontSize:15}}>TECH STACK</span>: HTML | CSS | JAVASCRIPT | JSON-SERVER | REACT | Redux</h3>
            <div className='github'>
                <a href='https://github.com/Ankit-Ankushe/myFitnessPal-Clone'target="_blank" rel="noreferrer">Source Code</a>
                <a href='https://lifestylepalteam.netlify.app/'target="_blank" rel="noreferrer">Live</a>
            </div>
         </div>
         <div style={{width:"95%"}}>
            <img src={kfc} alt="pagal"/>
            <h1>KFC Clone</h1>
            <h2><span style={{fontSize:15}}>DESCRIPTION</span>: user can order food thorugh our kfc website</h2>
            <h3><span style={{fontSize:15}}>TECH STACK</span> : HTML | CSS | JAVASCRIPT | JSON-SERVER | REACT | Redux</h3>
            <div className='github'>
                <a href='https://github.com/Mukul-hub-dotcom/KFC_clone_Project'target="_blank" rel="noreferrer">Source Code</a>
                <a href='https://kfc-clonning.netlify.app/'target="_blank" rel="noreferrer">Live</a>
            </div>
         </div>
         <div>
            <img src={zoomcar} alt="pagal"/>
            <h1>ZoomCar Clone</h1>
            <h2><span style={{fontSize:15}}>DESCRIPTION</span> : provide Online cab booking facility to the user</h2>
            <h3><span style={{fontSize:15}}>TECH STACK</span> : HTML | CSS | JAVASCRIPT | JSON-SERVER | REACT | Redux | LOCAL-STORAGE</h3>
            <div className='github'>
                <a href='https://github.com/rahul-6472/zoomcar.in'target="_blank" rel="noreferrer">Source Code</a>
                <a href='https://zoomcar-india.netlify.app/'target="_blank" rel="noreferrer">Live</a>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Project
