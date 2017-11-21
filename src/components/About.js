import React from 'react'

class About extends React.Component{
  render(){
    return(
      <div className="container about">
        <div className="col-md-10 col-md-offset-1">
          <h2 className="about__header">
            Front-End Web Developer with a passion for all things React and Javascript!
          </h2>
          <div className="about__description-container">
            <p className="about__description col-md-8">
              Hello! My name is Nick Harvey. I am a Front-End Developer with a special 
              interest in React and Javascript. I love programming and it has been a passion of mine for three years now. After working part time for 
              a local start-up for 6 months I now believe I have the skills necessary to contribute to your company. If you're interested
              in hiring a highly motivated and passionate developer do not hesitate to send me an email!
            </p>
            <img src="" alt="" className="about__img col-md-4"/>
          </div>
        </div>
      </div>
    )
  }
}

export default About