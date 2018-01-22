import dailynews from "../images/dailynews.png"
import pokedex from "../images/pokedex.png"
import ProjectImage from "./ProjectImage"
import ProjectTitle from "./ProjectTitle"
import React from "react"
import soundx from "../images/soundx.png"

class Project extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          <div className="project col-md-4">
            <ProjectTitle title="Sound X" />
            <div className="project__image-container col-md-12">
              <a href="https://soundx.herokuapp.com/">
                <ProjectImage image={soundx} />
              </a>
            </div>
            <div className="project__description-container col-md-10 col-md-offset-1">
              <p className="project__description">
                Sound X is a Soundcloud Client built utilzing React and Redux. Its features also include a dynamic search and endless pagination, and a music
                player using HTML5.
              </p>
            </div>
            <div className="project__links-container col-md-6 col-md-offset-3">
              <a className="btn btn-default" href="https://github.com/nickharvey27/SoundX">
                Github
              </a>
            </div>
          </div>

          <div className="project col-md-4">
            <ProjectTitle title="Daily News" />
            <div className="project__image-container col-md-12">
              <a href="https://shinbun.herokuapp.com/">
                <ProjectImage image={dailynews} />
              </a>
            </div>
            <div className="project__description-container col-md-10 col-md-offset-1">
              <p className="project__description">
                Daily News is a news aggregator of many major news stations. It is built with React, Redux and multiple other Javascript Ecosystem tools. It is
                styled beautifly with the Semantic-UI library.
              </p>
            </div>
            <div className="project__links-container col-md-6 col-md-offset-3">
              <a className="btn btn-default" href="https://github.com/nickharvey27/Daily-News">
                Github
              </a>
            </div>
          </div>

          <div className="project col-md-4">
            <ProjectTitle title="Dex" />
            <div className="project__image-container col-md-12">
              <a href="http://harveypokedex.herokuapp.com/">
                <ProjectImage image={pokedex} />
              </a>
            </div>
            <div className="project__description-container col-md-10 col-md-offset-1">
              <p className="project__description">
                Dex is a Pokexdex of the original 151 Pokemon. It is a RESTFUl API written with Ruby On Rails with Postgresql as the database. The Front-End is
                written with React.
              </p>
            </div>
            <div className="project__links-container col-md-6 col-md-offset-3">
              <a className="btn btn-default" href="https://github.com/nickharvey27/Pokedex">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
