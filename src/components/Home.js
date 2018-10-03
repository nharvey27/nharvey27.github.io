import About from './About';
import Footer from './Footer';
import ProjectsContainer from './ProjectsContainer';
import React from 'react';
import Typist from 'react-typist';
import Exp from './Exp'

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="hero" > </div>
          <div className="name">
            <p>Hi, I'm Nick. 
            </p>
            <p>
            I build Web Applications.
            </p>
            <p onClick={ () => window.scroll({top: window.innerHeight, bottom: 0, behavior: "smooth" })} className="glyphicon" id="glyphicon">
              <span id="down-click" className="glyphicon glyphicon-arrow-down ">
                {' '}
              </span>
            </p>
          </div>
        </div>
     
      <div className="row">
        <Exp />
      </div>
      <div className="row">
        <About />
      </div>
      <div className="row">
        <ProjectsContainer />
      </div>
      <div className="row">
        <Footer />
      </div>
      </div>
    );
  }
}

export default Home;
