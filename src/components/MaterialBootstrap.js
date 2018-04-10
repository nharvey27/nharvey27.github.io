import React from 'react';
import '../mb/mb.css';
import '../mb/font-awesome.4.7.0/css/font-awesome.min.css';
import img1 from '../mb/assets/img/img1.jpg';
import img2 from '../mb/assets/img/img2.jpg';
import img3 from '../mb/assets/img/img3.jpg';
import img4 from '../mb/assets/img/img4.jpg';
import img5 from '../mb/assets/img/img5.png';
import img6 from '../mb/assets/img/img6.jpg';
import img7 from '../mb/assets/img/img7.jpg';

export default class MaterialBootstrap extends React.Component {
  render() {
    return (
      <div className="container display-body">
        <div className="row">
          <div className="col-md-12">
            <h1>Components</h1>
          </div>
        </div>

        <div className="row">
          <h1 className="center-header">Buttons</h1>

          <div className="row">
            <div className="col-md-12">
              <h2 className="center-header">Raised Buttons</h2>
            </div>

            <div className="col-md-10 col-md-offset-1">
              <div className="btn btn-raised-default" ripple="ripple">
                Default
              </div>
              <div className="btn btn-raised-primary">Primary</div>
              <div className="btn btn-raised-info">Info</div>
              <div className="btn btn-raised-success">Success</div>
              <div className="btn btn-raised-warning">Warning</div>
              <div className="btn btn-raised-danger">Danger</div>
              <div className="btn btn-raised-primary">
                With Icons
                <i className="material-icons">mood</i>
              </div>
            </div>
          </div>

          <div className="col-md-12 ">
            <h2 className="center-header">Flat Buttons</h2>
          </div>

          <div className="col-md-10 col-md-offset-1">
            <div className="btn btn-flat-default ">Default</div>
            <div className="btn btn-flat-primary ">Primary</div>
            <div className="btn btn-flat-info ">Info</div>
            <div className="btn btn-flat-success ">Success</div>
            <div className="btn btn-flat-warning ">Warning</div>
            <div className="btn btn-flat-danger ">Danger</div>
            <div className="btn btn-flat-primary">
              With Icons
              <i className="material-icons">mood</i>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h2 className="center-header">Multi Raised Colored Buttons</h2>
            </div>

            <div className="col-md-10 col-md-offset-1">
              <div className="btn btn-raised-red">Red</div>
              <div className="btn btn-raised-purple">Purple</div>
              <div className="btn btn-raised-deep-purple">Deep Purple</div>
              <div className="btn btn-raised-indigo">Indigo</div>
              <div className="btn btn-raised-blue">Blue</div>
              <div className="btn btn-raised-light-blue">Light Blue</div>
              <div className="btn btn-raised-cyan">Cyan</div>
              <div className="btn btn-raised-green">Green</div>
              <div className="btn btn-raised-light-green">Light Green</div>
              <div className="btn btn-raised-lime">Lime</div>
              <div className="btn btn-raised-yellow">Yellow</div>
              <div className="btn btn-raised-amber">Amber</div>
              <div className="btn btn-raised-orange">Orange</div>
              <div className="btn btn-raised-deep-orange">Deep Orange</div>
              <div className="btn btn-raised-brown">Brown</div>
              <div className="btn btn-raised-grey">Grey</div>
              <div className="btn btn-raised-blue-grey">Blue Grey</div>
              <div className="btn btn-raised-midnight-blue">Midnight Grey</div>
              <div className="btn btn-raised-belizehole">Belizehole</div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h2 className="center-header">Multi Flat Colored Buttons</h2>
            </div>

            <div className="col-md-10 col-md-offset-1">
              <div className="btn btn-flat-red">Red</div>
              <div className="btn btn-flat-purple">Purple</div>
              <div className="btn btn-flat-deep-purple">Deep Purple</div>
              <div className="btn btn-flat-indigo">Indigo</div>
              <div className="btn btn-flat-blue">Blue</div>
              <div className="btn btn-flat-light-blue">Light Blue</div>
              <div className="btn btn-flat-cyan">Cyan</div>
              <div className="btn btn-flat-green">Green</div>
              <div className="btn btn-flat-light-green">Light Green</div>
              <div className="btn btn-flat-lime">Lime</div>
              <div className="btn btn-flat-yellow">Yellow</div>
              <div className="btn btn-flat-amber">Amber</div>
              <div className="btn btn-flat-orange">Orange</div>
              <div className="btn btn-flat-deep-orange">Deep Orange</div>
              <div className="btn btn-flat-brown">Brown</div>
              <div className="btn btn-flat-grey">Grey</div>
              <div className="btn btn-flat-blue-grey">Blue Grey</div>
              <div className="btn btn-flat-midnight-blue">Midnight Grey</div>
              <div className="btn btn-flat-belizehole">Belizehole</div>
            </div>
          </div>

          <div className="row">
            <h1 className="center-header">Social Buttons</h1>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h2 className="center-header">Raised Social Button</h2>
            </div>

            <div className="col-md-10 col-md-offset-1">
              <div className="btn btn-raised-facebook">
                <i className="fa fa-facebook" aria-hidden="true" />Facebook
              </div>
              <div className="btn btn-raised-twitter">
                <i className="fa fa-twitter" aria-hidden="true" />Twitter
              </div>
              <div className="btn btn-raised-google-plus">
                <i className="fa fa-google-plus" aria-hidden="true" />Google
                Plus
              </div>
              <div className="btn btn-raised-linkedin">
                <i className="fa fa-linkedin" aria-hidden="true" />Linkedin
              </div>
              <div className="btn btn-raised-skype">
                <i className="fa fa-skype" aria-hidden="true" />Skype
              </div>
              <div className="btn btn-raised-youtube">
                <i className="fa fa-youtube" aria-hidden="true" />Youtube
              </div>
              <div className="btn btn-raised-tumblr">
                <i className="fa fa-tumblr" aria-hidden="true" />Tumblr
              </div>
              <div className="btn btn-raised-medium">
                <i className="fa fa-medium" aria-hidden="true" />Medium
              </div>
              <div className="btn btn-raised-reddit">
                <i className="fa fa-reddit" aria-hidden="true" />Reddit
              </div>
              <div className="btn btn-raised-github">
                <i className="fa fa-github" aria-hidden="true" />Github
              </div>
              <div className="btn btn-raised-yahoo">
                <i className="fa fa-yahoo" aria-hidden="true" />Yahoo
              </div>
              <div className="btn btn-raised-slack">
                <i className="fa fa-slack" aria-hidden="true" />Slack
              </div>
              <div className="btn btn-raised-stack-overflow">
                <i className="fa fa-stack-overflow" aria-hidden="true" />Stack
                Overflow
              </div>
              <div className="btn btn-raised-flickr">
                <i className="fa fa-flickr" aria-hidden="true" />Flickr
              </div>
              <div className="btn btn-raised-purple">
                <i className="fa fa-envelope-o" aria-hidden="true" />Email
              </div>
              <div className="btn btn-raised-grey">
                <i className="fa fa-comments-o" aria-hidden="true" />Comments
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h2 className="center-header">Simple Raised Social Button</h2>
            </div>

            <div className="col-md-10 col-md-offset-1">
              <div className="btn btn-raised-facebook">
                <i className="fa fa-facebook" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-twitter">
                <i className="fa fa-twitter" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-google-plus">
                <i className="fa fa-google-plus" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-linkedin">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-skype">
                <i className="fa fa-skype" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-youtube">
                <i className="fa fa-youtube" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-tumblr">
                <i className="fa fa-tumblr" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-medium">
                <i className="fa fa-medium" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-reddit">
                <i className="fa fa-reddit" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-github">
                <i className="fa fa-github" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-yahoo">
                <i className="fa fa-yahoo" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-slack">
                <i className="fa fa-slack" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-stack-overflow">
                <i className="fa fa-stack-overflow" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-flickr">
                <i className="fa fa-flickr" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-purple">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="btn btn-raised-grey">
                <i className="fa fa-comments-o" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h2 className="center-header">Social Floating Action Button</h2>
            </div>

            <div className="col-md-10 col-md-offset-1">
              <div className="btn btn-floating btn-raised-facebook">
                <i className="fa fa-facebook" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-twitter">
                <i className="fa fa-twitter" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-google-plus">
                <i className="fa fa-google-plus" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-linkedin">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-skype">
                <i className="fa fa-skype" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-youtube">
                <i className="fa fa-youtube" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-tumblr">
                <i className="fa fa-tumblr" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-medium">
                <i className="fa fa-medium" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-reddit">
                <i className="fa fa-reddit" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-github">
                <i className="fa fa-github" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-yahoo">
                <i className="fa fa-yahoo" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-slack">
                <i className="fa fa-slack" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-stack-overflow">
                <i className="fa fa-stack-overflow" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-flickr">
                <i className="fa fa-flickr" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-purple">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="btn btn-floating btn-raised-grey">
                <i className="fa fa-comments-o" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h2 className="center-header">Flat Social Buttons</h2>
            </div>

            <div className="col-md-10 col-md-offset-1">
              <div className="btn  btn-flat-facebook">
                <i className="fa fa-facebook" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-twitter">
                <i className="fa fa-twitter" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-google-plus">
                <i className="fa fa-google-plus" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-linkedin">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-skype">
                <i className="fa fa-skype" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-youtube">
                <i className="fa fa-youtube" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-tumblr">
                <i className="fa fa-tumblr" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-medium">
                <i className="fa fa-medium" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-reddit">
                <i className="fa fa-reddit" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-github">
                <i className="fa fa-github" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-yahoo">
                <i className="fa fa-yahoo" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-slack">
                <i className="fa fa-slack" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-stack-overflow">
                <i className="fa fa-stack-overflow" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-flickr">
                <i className="fa fa-flickr" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-email">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="btn btn-flat-comments">
                <i className="fa fa-comments-o" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h1 className="center-header">Button Sizes</h1>
            </div>

            <div className="col-md-10 col-md-offset-1">
              <div className="btn btn-xs btn-raised-blue" ripple="ripple">
                X-Small
              </div>
              <div className="btn btn-sm btn-raised-red">Small</div>
              <div className="btn btn-raised-green">Normal</div>
              <div className="btn btn-lg btn-raised-primary">Large</div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h1 className="center-header">Rounded Button</h1>
            </div>

            <div className="col-md-10 col-md-offset-1">
              <div className="btn rounded btn-raised-blue">Rounded</div>
              <div className="btn  rounded btn-raised-deep-orange">Small</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <h1 className="center-header">Cards</h1>

          <div className="col-md-12">
            <h2 className="center-header">Simple Cards</h2>

            <div className="col-md-4">
              <div className="card ">
                <div className="card-content">
                  <div className="card-image">
                    <img src={img4} alt="" />
                  </div>

                  <div className="card-body">
                    <h3 className="card-title">Tree</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div className="card-footer">
                      <button className="btn btn-raised-primary">Share</button>
                      <button className="btn btn-flat-danger">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-content">
                  <div className="card-image">
                    <img src={img1} alt="" />
                  </div>

                  <div className="card-body">
                    <h3 className="card-title">David Choe</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-content">
                  <div className="card-image">
                    <img src={img3} alt="" />
                  </div>

                  <div className="card-body center">
                    <h3 className="card-title">Mountains</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div className="card-footer center">
                      <div className="btn btn-floating btn-raised-facebook">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </div>
                      <div className="btn btn-floating btn-raised-twitter">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2 className="center-header">Profile Cards</h2>
            <div className="col-md-4">
              <div className="card">
                <div className="card-content">
                  <div className="card-image overlay">
                    <img src="../mb/assets/img5.png" alt="" />
                  </div>

                  <div className="card-image">
                    <img src={img4} alt="" />
                  </div>

                  <div className="card-body">
                    <h3 className="card-title">Japan</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry
                    </p>
                    <div className="card-footer">
                      <button className="btn btn-raised-amber">Share</button>
                      <button className="btn btn-flat-midnight-blue">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-content">
                  <div className="card-image rounded">
                    <img src={img6} alt="" />
                  </div>

                  <div className="card-body center">
                    <h3 className="card-title">Model</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-content">
                  <div className="card-image overlay">
                    <img src={img5} alt="" />
                  </div>
                  <div className="card-image">
                    <img src={img7} alt="" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Mountains</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of tfhe printing and
                      typesetting industry.Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.Lorem Ipsum is
                      simply dummy text of the printing and typesetting industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2 className="center-header">Raised Cards</h2>

            <div className="col-md-4">
              <div className="card">
                <div className="card-content raised">
                  <div className="card-image side-raised">
                    <img src={img6} alt="" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Japan</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry
                    </p>
                    <div className="card-footer">
                      <div className="btn btn-floating btn-raised-facebook">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </div>
                      <div className="btn btn-floating btn-raised-twitter">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </div>
                      <div className="btn btn-floating btn-raised-google-plus">
                        <i className="fa fa-google-plus" aria-hidden="true" />
                      </div>
                      <div className="btn btn-floating btn-raised-medium">
                        <i className="fa fa-medium" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-content raised">
                  <div className="card-image above-raised">
                    <img src={img6} alt="" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Japan</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-content raised">
                  <div className="card-image side-raised">
                    <img src={img6} alt="" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Model</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry
                    </p>
                    <div className="card-footer">
                      <div className="btn btn-floating btn-raised-github">
                        <i className="fa fa-github" aria-hidden="true" />
                      </div>
                      <div className="btn btn-floating btn-raised-reddit">
                        <i className="fa fa-reddit" aria-hidden="true" />
                      </div>
                      <div className="btn btn-floating btn-raised-tumblr">
                        <i className="fa fa-tumblr" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <h1 className="center-header">Forms</h1>
          <div className="col-md-12">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <input type="text" className="floating-input form-control" />
                  <label className="floating-control-label">Name</label>
                </div>
                <div className="form-group">
                  <input type="text" className="floating-input form-control" />
                  <label className="floating-control-label">Address</label>
                </div>

                <div className="form-group">
                  <input type="text" className="floating-input form-control" />
                  <label className="floating-control-label">Email</label>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="floating-input form-control"
                  />
                  <label className="floating-control-label">Password</label>
                </div>
                <button type="submit" className="btn btn-raised-primary">
                  Submit
                </button>
              </form>
            </div>

            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <span className="form-icon">
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                  </span>
                  <input type="text" className="floating-input form-control" />
                  <label className="floating-control-label">Email</label>
                </div>
                <div className="form-group">
                  <span className="form-icon">
                    <i className="material-icons">lock_outline</i>
                  </span>
                  <input
                    type="password"
                    className="floating-input form-control"
                  />
                  <label className="floating-control-label">Password</label>
                </div>
                <button type="submit" className="btn btn-raised-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <h1 className="center-header">Inputs</h1>

          <div className="col-md-12">
            <h2 className="center-header">Basic Inputs</h2>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Normal"
              />
            </div>
            <div className="col-md-6 form-group">
              <input type="text" className="floating-input form-control" />
              <label className="floating-control-label">
                With Floating Label
              </label>
            </div>
          </div>

          <div className="col-md-12">
            <h2 className="center-header">With Icons</h2>
            <div className="col-md-6">
              <div className="input-group">
                <span className="form-icon">
                  <i className="material-icons">lock_outline</i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="With Material Icons"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-group">
                <span className="form-icon">
                  <i className="fa fa-unlock" aria-hidden="true" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Font Awesome Icons"
                />
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <h2 className="center-header">Success & Error Inputs</h2>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control has-success"
                placeholder="Input Success"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control has-error"
                placeholder="Input Error"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-6">
              <h2 className="center-header">Text Area</h2>
              <textarea
                type="text"
                className="form-control"
                placeholder="Input Success"
              />
            </div>
            <div className="col-md-6">
              <h2>Select</h2>
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
              <h2>Checkboxes</h2>
              <div className="checkbox ">
                <label>
                  <input type="checkbox" value="" checked={true} />
                  <span className="checkbox-material">
                    <span className="check" />
                  </span>
                  Checked
                </label>
              </div>

              <div className="checkbox">
                <label>
                  <input type="checkbox" value="" />
                  <span className="checkbox-material">
                    <span className="check" />
                  </span>
                  Unchecked
                </label>
              </div>

              <div className="checkbox disabled">
                <label>
                  <input type="checkbox" value="" disabled />
                  <span className="checkbox-material">
                    <span className="check" />
                  </span>
                  Disabled Checked
                </label>
              </div>

              <div className="checkbox disabled">
                <label>
                  <input type="checkbox" value="" disabled />
                  <span className="checkbox-material">
                    <span className="check" />
                  </span>
                  Disabled Unchecked
                </label>
              </div>
            </div>

            <div className="col-md-6 ">
              <h2>Radio Buttons</h2>
              <div className="radio radio-primary">
                <label>
                  <input type="radio" name="optionsRadios" checked="" /> On
                </label>
              </div>
              <div className="radio radio-primary">
                <label>
                  <input type="radio" name="optionsRadios" /> Off
                </label>
              </div>
              <div className="radio radio-primary">
                <label>
                  <input type="radio" name="optionsRadios" disabled /> Disabled
                </label>
              </div>
            </div>
          </div>

          <h1 className="center-header">Dropdown</h1>

          <div className="col-md-12">
            <div className="col-md-6">
              <h2>Raised Dropdown</h2>
              <div className="dropdown">
                <button
                  className="btn btn-raised-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Dropdown Example
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <h2>Flat Dropdown</h2>
              <div className="dropdown">
                <button
                  className="btn btn-flat-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Dropdown Example
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="col-md-6">
              <h2> Rounded Dropdown</h2>
              <div className="dropdown">
                <button
                  className="btn btn-raised-primary dropdown-toggle rounded"
                  type="button"
                  data-toggle="dropdown"
                >
                  Dropdown Example
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <h2> Dropup</h2>
              <div className="dropup">
                <button
                  className="btn btn-raised-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Dropup Example
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1 className="center-header">Navbars</h1>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="#">
                    Default Navbar
                  </a>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Search"
                          className="floating-input form-control"
                        />
                      </div>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fa fa-twitter-square"
                          aria-hidden="true"
                        />Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fa fa-facebook-official"
                          aria-hidden="true"
                        />Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <nav className="navbar navbar-primary">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-2"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="#">
                    Primary Navbar
                  </a>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-2"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="#">
                        <i className="material-icons">account_circle</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="material-icons">favorite</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="material-icons">camera_enhance</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="material-icons">phone_in_talk</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="material-icons">notifications</i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <nav className="navbar navbar-info">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-3"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="#">
                    Info Navbar
                  </a>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-3"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="#">Explore</a>
                    </li>
                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Favorites
                        <span className="caret" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">Action</a>
                        </li>
                        <li>
                          <a href="#">Another action</a>
                        </li>
                        <li>
                          <a href="#">Something else here</a>
                        </li>
                        <li role="separator" className="divider" />
                        <li>
                          <a href="#">Separated link</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <nav className="navbar navbar-success">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-4"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="#">
                    Success Navbar
                  </a>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-4"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="#">Profile</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <nav className="navbar navbar-warning">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-5"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="#">
                    Warning Navbar
                  </a>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-5"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active">
                      <a href="#">
                        <i className="material-icons">settings</i>Settings
                      </a>
                    </li>

                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">account_circle</i>Account
                        <span className="caret" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">Profile</a>
                        </li>
                        <li>
                          <a href="#">Orders</a>
                        </li>
                        <li>
                          <a href="#">Sign Out</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <nav className="navbar navbar-danger">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-6"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="#">
                    Danger Navbar
                  </a>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-6"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="#">Share</a>
                    </li>
                    <li>
                      <a href="#">Pin</a>
                    </li>
                    <li>
                      <a href="#">Reblog</a>
                    </li>
                    <li>
                      <a href="#">Repost</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <h1 className="center-header">Progress Bars</h1>
          <div className="col-md-12">
            <h2 className="center-header">Basic</h2>
            <div className="progress">
              <div
                className="progress-bar progress-info"
                role="progressbar"
                aria-valuenow="35"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '35%' }}
              >
                <span className="sr-only">35% Complete</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-success"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '50%' }}
              >
                <span className="sr-only">50% Complete</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-warning"
                role="progressbar"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '65%' }}
              >
                <span className="sr-only">65% Complete</span>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <h2 className="center-header">Striped</h2>
            <div className="progress">
              <div
                className="progress-bar progress-success progress-bar-striped"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '60%' }}
              >
                <span className="sr-only">60% Complete</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-danger progress-bar-striped"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '80%' }}
              >
                <span className="sr-only">90% Complete</span>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <h2 className="center-header">Animated</h2>
            <div className="progress">
              <div
                className="progress-bar progress-info progress-bar-striped active"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '90%' }}
              >
                <span className="sr-only">60% Complete</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 label-container">
            <h1>Labels</h1>
            <span className="label label-default">Default</span>
            <span className="label label-primary">Primary</span>
            <span className="label label-success">Success</span>
            <span className="label label-info">Info</span>
            <span className="label label-warning">Warning</span>
            <span className="label label-danger">Danger</span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <h1 className="center-header">Badges</h1>

          <div className="col-md-12 badge-container">
            <button className=" btn btn-flat-default" href="#">
              Flat
              <span className="badge">42</span>
            </button>

            <button className="btn btn-flat-primary" type="button">
              Messages
              <span className="badge">4</span>
            </button>

            <button className="btn btn-raised-info" type="button">
              Raised
              <span className="badge">23</span>
            </button>
            <button className="btn btn-raised-success" type="button">
              Matches
              <span className="badge">2</span>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1 className="center-header">Tables</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr>
                  <th scope="row">1</th>
                  <td>Bubble Gum</td>
                  <td>$2.99</td>
                  <td>8</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Dr. Pepper</td>
                  <td>$1.99</td>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Coffee</td>
                  <td>$0.50</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-8 col-md-offset-2">
            <h1 className="center-header">Tables</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr>
                  <th scope="row">1</th>
                  <td>Joe</td>
                  <td>Rogan</td>
                  <td>
                    <div className=" btn btn-xs btn-raised-twitter">
                      <i className="fa fa-twitter" aria-hidden="true" />JRE
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Joey</td>
                  <td>Diaz</td>
                  <td>
                    <div className=" btn btn-xs btn-raised-twitter">
                      <i className="fa fa-twitter" aria-hidden="true" />Mad
                      Flavor
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Eddie</td>
                  <td>Bravo</td>
                  <td>
                    <div className=" btn btn-xs btn-raised-twitter">
                      <i className="fa fa-twitter" aria-hidden="true" />10PJJ
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 ">
            <h1 className="center-header">Pagination</h1>
            <div className="col-md-6 pagi">
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-md-6 pagi">
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li>
                    <a>
                      <i className="material-icons">arrow_back</i>
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a>
                      <i className="material-icons">arrow_forward</i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1 className="center-header">Typography</h1>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>HEADER 1</span>
                </div>
                <div className="col-md-9">
                  <h1>Check, Check, Check it out!</h1>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>HEADER 2</span>
                </div>
                <div className="col-md-9">
                  <h2>Check, Check, Check it out!</h2>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>HEADER 3</span>
                </div>
                <div className="col-md-9">
                  <h3>Check, Check, Check it out!</h3>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>HEADER 4</span>
                </div>
                <div className="col-md-9">
                  <h4>Check, Check, Check it out!</h4>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>HEADER 5</span>
                </div>
                <div className="col-md-9">
                  <h5>Check, Check, Check it out!</h5>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>HEADER 6</span>
                </div>
                <div className="col-md-9">
                  <h6>Check, Check, Check it out!</h6>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>PARAGRAPH</span>
                </div>
                <div className="col-md-9">
                  <p>Check, Check, Check it out!</p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>Primary Text</span>
                </div>
                <div className="col-md-9">
                  <p className="primary-text">Check, Check, Check it out!</p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>Info Text</span>
                </div>
                <div className="col-md-9 info-text">
                  <p>Check, Check, Check it out!</p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>Success Text</span>
                </div>
                <div className="col-md-9 success-text">
                  <p>Check, Check, Check it out!</p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>Warning Text</span>
                </div>
                <div className="col-md-9 warning-text">
                  <p>Check, Check, Check it out!</p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 typography">
                  <span>Danger Text</span>
                </div>
                <div className="col-md-9 danger-text">
                  <p>Check, Check, Check it out!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1 className="center-header">Alerts</h1>
            <div className="alert alert-primary alert-dismissible" role="alert">
              <i className="fa fa-bookmark" aria-hidden="true" />PRIMARY: This
              is the primary text color. Can't you tell by the aweome pink!
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="alert alert-info alert-dismissible" role="alert">
              <i className="fa fa-exclamation" aria-hidden="true" />INFO: The
              family has 10 weights, ranging from Regular to Bold and is ideally
              suited for book text..
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="alert alert-success alert-dismissible" role="alert">
              <i className="fa fa-check" aria-hidden="true" />SUCCESS: Whatever
              you did worked so thanks for not blowing up the server :)
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="alert alert-warning alert-dismissible" role="alert">
              <i className="fa fa-exclamation-triangle" aria-hidden="true" />WARNING:
              Dude you almost blew up the server you need to chill.
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="alert alert-danger alert-dismissible" role="alert">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <i className="fa fa-times" aria-hidden="true" />
              DANGER: Well You blew up the server thanks a lot ...
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1 className="center-header">Jumbotron</h1>
            <div className="jumbotron">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
                Learn more here at http://getbootstrap.com/components/#jumbotron
              </p>
              <div>
                <a
                  className="btn btn-flat-primary btn-lg"
                  href="#"
                  role="button"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div
              style={{
                background: 'black',
                border: '0',
                height: '1px',
                margin: '48px 0px',
                opacity: '.56',
              }}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1 className="center-header">Javascript Components</h1>
          </div>

          <div className="col-md-12">
            <h1 className="center-header">Tabs</h1>

            <div className="col-md-6">
              <h2>Tabs With Card</h2>

              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a
                    href="#home"
                    aria-controls="home"
                    role="tab"
                    data-toggle="tab"
                  >
                    Home
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#profile"
                    aria-controls="profile"
                    role="tab"
                    data-toggle="tab"
                  >
                    Profile
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#messages"
                    aria-controls="messages"
                    role="tab"
                    data-toggle="tab"
                  >
                    Messages
                  </a>
                </li>
              </ul>
              <div className="tab-content card">
                <div role="tabpanel" className="tab-pane active" id="home">
                  Ille vivere. Ut ad te quaerebam ... purgare caeli. Sunt uh ...
                  nonnullus propter errorem qui de rebus inter nos et iacere
                  puto suus in causa, id est in mensa. Levir meus, priusquam
                  oppugnarent tempus quis, admonere dicitur. Credo quod idem
                  mihi praesidium.
                </div>
                <div role="tabpanel" className="tab-pane" id="profile">
                  Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his
                  diebus? Quisque semper aliquid videtur, in volutpat mauris.
                  Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum
                  explicans. Gus mortuus est. Lorem opus habeo.
                </div>
                <div role="tabpanel" className="tab-pane" id="messages">
                  Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis
                  quod blinking res Ive 'been vocans super vos? Et conteram
                  illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu
                  facere conatus sum ad te in omni tempore?
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h2>Simple Tabs</h2>

              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a
                    href="#away"
                    aria-controls="away"
                    role="tab"
                    data-toggle="tab"
                  >
                    Home
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#two"
                    aria-controls="two"
                    role="tab"
                    data-toggle="tab"
                  >
                    Profile
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#three"
                    aria-controls="three"
                    role="tab"
                    data-toggle="tab"
                  >
                    Messages
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="away">
                  Ille vivere. Ut ad te quaerebam ... purgare caeli. Sunt uh ...
                  nonnullus propter errorem qui de rebus inter nos et iacere
                  puto suus in causa, id est in mensa. Levir meus, priusquam
                  oppugnarent tempus quis, admonere dicitur. Credo quod idem
                  mihi praesidium.
                </div>
                <div role="tabpanel" className="tab-pane" id="two">
                  Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his
                  diebus? Quisque semper aliquid videtur, in volutpat mauris.
                  Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum
                  explicans. Gus mortuus est. Lorem opus habeo.
                </div>
                <div role="tabpanel" className="tab-pane" id="three">
                  Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis
                  quod blinking res Ive 'been vocans super vos? Et conteram
                  illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu
                  facere conatus sum ad te in omni tempore?
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-6">
              <h1>Modals</h1>
              <div
                className="btn btn-raised-primary btn-lg"
                data-toggle="modal"
                data-target="#myModal"
              >
                Launch demo modal
              </div>
            </div>

            <div className="col-md-6">
              <h1>Popovers</h1>
              <button
                type="button"
                className="btn btn-raised-primary"
                data-container="body"
                data-toggle="popover"
                data-placement="left"
                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                Popup left
              </button>

              <button
                type="button"
                className="btn btn-raised-primary"
                data-container="body"
                data-toggle="popover"
                data-placement="top"
                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                Popup top
              </button>

              <button
                type="button"
                className="btn btn-raised-primary"
                data-container="body"
                data-toggle="popover"
                data-placement="bottom"
                data-content="Vivamus
          sagittis lacus vel augue laoreet rutrum faucibus."
              >
                Popup bottom
              </button>

              <button
                type="button"
                className="btn btn-raised-primary"
                data-container="body"
                data-toggle="popover"
                data-placement="right"
                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                Popup right
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div
                style={{
                  background: 'black',
                  border: '0',
                  height: '1px',
                  margin: '48px 0px',
                  opacity: '.56',
                }}
              >
                {' '}
              </div>
            </div>
          </div>

          <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla &hellip;
                  </p>
                </div>
                <div className="modal-footer">
                  <div className="btn btn-raised-default" data-dismiss="modal">
                    Close
                  </div>
                  <div className="btn btn-raised-primary">Save changes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
