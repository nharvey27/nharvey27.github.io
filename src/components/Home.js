import About from "./About"
import Footer from "./Footer"
import ProjectsContainer from "./ProjectsContainer"
import React from "react"
import Typist from "react-typist"
import home1 from "../images/home1.jpg"
class Home extends React.Component {
  componentDidMount() {
    setTimeout(function() {
      document.getElementById("glyphicon").children[0].className += " load"
    }, 2000)
  }

  render() {
    return (
      <div>
        <div className="">
          <img src={home1} alt="" className="hero" />
          <div className="name">
            <span>Hi, </span>
            <Typist avgTypingDelay={80} startDelay={600}>
              I'm Nick. I build Web Applications.
            </Typist>
            <p className="glyphicon" id="glyphicon">
              <span id="down-click" className="glyphicon glyphicon-arrow-down">
                {" "}
              </span>
            </p>
          </div>
        </div>
        <About />
        <ProjectsContainer />
        <Footer />
      </div>
    )
  }
}

export default Home
