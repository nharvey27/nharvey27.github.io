import ProjectsContainer from './ProjectsContainer'
import React from 'react'
import image from '../images/icon.png'
import Typist from 'react-typist';
import About from './About'

class Home extends React.Component{
  componentDidMount(){
    setTimeout(function() {
      document.getElementById("glyphicon").children[0].className += " load";      
    }, 1500);
  }

  render(){
    return(
      <div>
        <div className="App">
          <canvas> </canvas>
          <div className="Name">
            <span>Hi, </span>
            <Typist avgTypingDelay={120} startDelay={600} >
              I'm Nick
            </Typist>
            <a className="glyphicon" id="glyphicon" href="#">
              <span id="down-click" className="glyphicon glyphicon-arrow-down"> </span>
            </a>
          </div>
        </div>
        <div>
          <About /> 
          <ProjectsContainer />
        </div>
      </div>
    )
  }
}

export default Home