import React from 'react';
import github from '../images/github.png'
import email from '../images/email.png'

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <div className="footer__icons-container">
          <span >
            <a className="footer__icon" id="github-link" href="https://github.com/nickharvey27">
              <img src={github} alt=""/>
            </a>

            <a className="footer__icon" id="email-link" href="mailto:nharvey278@gmail.com">
              <img src={email} alt=""/>
            </a>
          </span>
        </div>
      </div>
    )
  }
}

export default Footer