import React from 'react'
import "./Skills.css"
function Skills() {
  return (
    <div className='skillscontainer' id='skills'>
      <h1>Skills</h1>
       <div className='skills'>
            <div>
                <h2>Frontend</h2>
               
                <button>React.Js</button>
                <button>JavaScript</button>
                <button>CSS3</button>
                <button>HTML5</button>
                <button>Redux</button>
                <button>Styled-Components</button>
                <button>Metrial-Ui</button>
                <button>Chakra-Ui</button>
            </div>
            <div>
                <h2>Backend</h2>
               
                <button>Node.Js</button>
                <button>Json-Server</button>
                <button>Moongose</button>
                <button>JWT Auth</button>
            </div>
       </div>
    </div>
  )
}

export default Skills
