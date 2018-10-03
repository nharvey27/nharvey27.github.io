import React from 'react';
import saucedoImg from '../images/saucedoImg.png'
import rawbridgeImg from '../images/rawbridgeImg.png'
import freelanceImg from '../images/freelanceImg.png'

class Exp extends React.Component {
  render() {
    return (
      <div className="experience">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <h2 className="header">Work Experience</h2>
              
              <div className="experience__description-container col-md-4">
                <h2 className="project__title">Saucedo Insurance Portal</h2>
                <div className="col-md-12">
                  <img src={saucedoImg} className="experience__img" />
                </div>
                <p className="project__description">
                  A portal I designed and developed to capture online leads for an insurance firm. 
                  Build with HTML, SASS, and React It's deployed with AWS using, API Gateway, DynomoDB, Simple Email Service, and AWS Lambda.
                </p>
              </div>
              
              <div className="experience__description-container col-md-4">
                <h2 className="project__title">Rawbridge</h2>
                <div className="col-md-12">
                  <img className="experience__img" src={rawbridgeImg} alt=""/>
                </div>
                <p className="project__description">
                  I worked as a Front-End Developer for Rawbridge. I helped transition the company's 
                  mobile application to a web application. I also refactored and converted the code 
                  base from CSS to SASS with BEM Methodology.
                </p>
              </div>
              
              <div className="experience__description-container col-md-4">
                <h2 className="project__title">Harvey Web Studios</h2>
                <div className="col-md-12">
                  <img className="experience__img" src={freelanceImg} alt=""/>
                </div>
                <p className="project__description">
                  I have freelanced building site for Brazilian Jiu Jitsu gyms and tournaments in the Orange County and Los Angeles area.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exp;
