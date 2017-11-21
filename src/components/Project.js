import ProjectTitle from './ProjectTitle'
import ProjectImage from './ProjectImage'
import React from 'react'
import dailynews from '../images/dailynews.png'
import soundx from '../images/soundx.png'
import pokedex from '../images/pokedex.png'

class Project extends React.Component{
  render(){
    return(
      <div>
        <div className="container">
            <div className="col-md-8 col-md-offset-2">
            <div className="project">
              <ProjectTitle title="Daily News" />
              <div className="project__image-container col-md-6 col-md-offset-3">
                <ProjectImage image={dailynews}/>
              </div>
              <div className="project__description-container col-md-10 col-md-offset-1">
                <p className="project__description">
                  Daily News is a news aggregator of many major news stations.
                  It is built with React, Redux and multiple other Javascript Ecosystem tools. 
                  It is styled beautifly with the Semantic-UI library.
                  Daily News is deployed on Heroku.
                </p>
              </div>
              <div className="project__links-container col-md-6 col-md-offset-3">
                <a className="btn btn-default" href="https://shinbun.herokuapp.com/">Demo</a>
                <a className="btn btn-default" href="https://github.com/nickharvey27/Daily-News">Github</a>
              </div>
            </div>

            <div className="project">
              <ProjectTitle title="Sound X" />
              <div className="project__image-container col-md-6 col-md-offset-3">
                <ProjectImage image={soundx}/>
              </div>
              <div className="project__description-container col-md-10 col-md-offset-1">
                <p className="project__description">
                  Sound X is a Soundcloud Client built utilzing React and Redux. 
                  It utilizes Soundcloud's API and many cutting edge Javascript Technologies like Webpack, ES6, Async/Await.
                   Its features also include a dynamic search and endless pagination. Sound X also uses SASS for it's CSS 
                   preprocessor. Sound X also uses BEM methodology to structure it's CSS.
                </p>
              </div>
              <div className="project__links-container col-md-6 col-md-offset-3">
                <a className="btn btn-default" href="https://soundx.herokuapp.com/">Demo</a>
                <a className="btn btn-default" href="https://github.com/nickharvey27/SoundX">Github</a>
              </div>
            </div>

            <div className="project">
              <ProjectTitle title="Dex" />
              <div className="project__image-container col-md-6 col-md-offset-3">
                <ProjectImage image={pokedex}/>
              </div>
              <div className="project__description-container col-md-10 col-md-offset-1">
                <p className="project__description">
                  Dex is a Pokexdex with the original 151 Pokemon. It is a RESTFUl API written with 
                  Ruby On Rails with Postgresql as the database. The Front-End is written with React.
                  Dex is deployed on Heroku
                </p>
              </div>
              <div className="project__links-container col-md-6 col-md-offset-3">
                <a className="btn btn-default" href="https://github.com/nickharvey27/Pokedex">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project