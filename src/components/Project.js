import { Link } from 'react-router';
import dailynews from '../images/dailynews.png';
import cr from '../images/cr.png';
import gh from '../images/gh.png';
import mb from '../images/mb.png';
import pokedex from '../images/pokedex.png';
import ProjectImage from './ProjectImage';
import ProjectTitle from './ProjectTitle';
import React from 'react';
import soundx from '../images/soundx.png';

class Project extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <div className="project col-md-4">
              <ProjectTitle title="Sound X" />
              <div className="project__image-container col-md-12">
                <a href="https://soundx.herokuapp.com/">
                  <ProjectImage image={soundx} />
                </a>
              </div>
              <div className="project__description-container col-md-10 col-md-offset-1">
                <p className="project__description">
                  Sound X is a Soundcloud Client built utilzing React, Redux and
                  the Soundcloud API. Its features also include a dynamic
                  search, endless pagination, and a music player using HTML5.
                </p>
              </div>
              <div className="project__links-container col-md-6 col-md-offset-3">
                <a
                  className="btn btn-default"
                  href="https://github.com/nickharvey27/SoundX"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="project col-md-4">
              <ProjectTitle title="Cryptographor" />
              <div className="project__image-container col-md-12">
                <a href="https://cryptographor.herokuapp.com/">
                  <ProjectImage image={cr} />
                </a>
              </div>
              <div className="project__description-container col-md-10 col-md-offset-1">
                <p className="project__description">
                  View the top 50 cryptocurrencies price, market cap and 24 hour
                  change percentage. Users may also view price graphs for 7, 30,
                  180 and 365 days.
                </p>
              </div>
              <div className="project__links-container col-md-6 col-md-offset-3">
                <a
                  className="btn btn-default"
                  href="https://github.com/nickharvey27/cryptographor"
                >
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
                  Pokexdex of the original 151 Pokemon. It is a REST API written
                  using Ruby On Rails with Postgresql as the database. The
                  Front-End is written with React.
                </p>
              </div>
              <div className="project__links-container col-md-6 col-md-offset-3">
                <a
                  className="btn btn-default"
                  href="https://github.com/nickharvey27/Pokedex"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="project col-md-4">
              <ProjectTitle title="Material Bootstrap" />
              <Link to="/mb">
                <div className="project__image-container col-md-12">
                  <ProjectImage image={mb} />
                </div>
              </Link>
              <div className="project__description-container col-md-10 col-md-offset-1">
                <p className="project__description">
                  Material Bootstrap is a redesign of the bootstrap components
                  with a Material-UI inspired flair. It was written with SCSS.
                </p>
              </div>
              <div className="project__links-container col-md-6 col-md-offset-3">
                <a
                  className="btn btn-default"
                  href="https://github.com/nickharvey27/Material-Bootstrap"
                >
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
                  Daily News is a news aggregator of major news stations. It is
                  built with React, Redux and multiple other Javascript
                  Ecosystem tools. It is styled beautifly with the Semantic-UI
                  library.
                </p>
              </div>
              <div className="project__links-container col-md-6 col-md-offset-3">
                <a
                  className="btn btn-default"
                  href="https://github.com/nickharvey27/Daily-News"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="project col-md-4">
              <ProjectTitle title="Github-Flavored Markdown Preview" />
              <div className="project__image-container col-md-12">
                <ProjectImage image={gh} />
              </div>
              <div className="project__description-container col-md-10 col-md-offset-1">
                <p className="project__description">
                  Github Flavored Markdown Previewer written with React.
                </p>
              </div>
              <div className="project__links-container col-md-6 col-md-offset-3">
                <a
                  className="btn btn-default"
                  href="https://github.com/nickharvey27/Github-Flavored-Markdown-Preview"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
