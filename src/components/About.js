import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="container about">
        <div className="col-md-10 col-md-offset-1">
          <h2 className="about__header">About Me</h2>
          <div className="about__description-container col-md-6">
            <p className="about__description">
              Hello! My name is Nick Harvey. I am a Front-End Developer with a
              focus on React and all things Javascript. I love programming and
              it has been a passion of mine for three years now. If you are in search of
              a highly motivated and passionate developer send
              me an
              <a id="github-link" href="mailto:nharvey278@gmail.com">
                {' '}
                email!
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
