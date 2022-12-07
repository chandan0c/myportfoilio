
import './App.css';
import Nevbar from './task/Nevbar';
import Myimage from './task/Myimage';
import Aboutme from './task/Aboutme';
import Skills from './task/Skills';
import Project from './task/Project';
import Contact from './task/Contact';

function App() {

  const handleONclick=(id)=>{
    if(id===2){
      let Y=document.querySelector("#Home").offsetTop
    
      document.body.scrollTop = Number(Y)-50;
      document.documentElement.scrollTop = Number(Y)-50;
       
    }
    console.log(id)
    if(id===3){
      let Y=document.querySelector("#AboutMe").offsetTop
    
      document.body.scrollTop = Number(Y)-50;
      document.documentElement.scrollTop = Number(Y)-50;
       
    }
    if(id===4){
      let Y=document.querySelector("#skills").offsetTop
    
      document.body.scrollTop = Number(Y)-50;
      document.documentElement.scrollTop = Number(Y)-50;
       
    }
    if(id===5){
      let Y=document.querySelector("#project").offsetTop
    
      document.body.scrollTop = Number(Y)-50;
      document.documentElement.scrollTop = Number(Y)-50;
       
    }
    if(id===6){
      let Y=document.querySelector("#contact").offsetTop
    
      document.body.scrollTop = Number(Y)-50;
      document.documentElement.scrollTop = Number(Y)-50;
       
    }
 

}
  return (
    <div className="App">
        <Nevbar handleONclick={handleONclick}/>
        <Myimage/>
        <Aboutme/>
        <Skills/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
