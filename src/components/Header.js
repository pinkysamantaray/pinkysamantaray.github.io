import React, { Component } from "react";
import { Parallax } from "react-parallax";
import PSLogo from '../assets/images/ps_logo.png';

const image1 =
  process.env.PUBLIC_URL + "/abstract-background-canvas-249798.jpg";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <Parallax bgImage={image1} strength={500}>
          <div className="col-md-10 col-sm-12 mx-auto headerContainer">
            <div className="logoContainer d-none d-md-block d-lg-block"><img src={PSLogo} alt="logo" className="logo" /></div>
            <code className="display-4">
              Hello there&nbsp;
              <i className="fas fa-ghost" />
              !!
            </code>
            <div className="mt-3 headerText">
              <i className="fas fa-terminal" />
              &nbsp; My name is <strong>Pinky Samantaray</strong>!
            </div>
            <div className="mt-2 headerText">
              <i className="fas fa-terminal" />
              &nbsp; I am currently a Front-End Engineer making an impact at <strong>Deloitte<span className="greenDot">.</span></strong>
            </div>
            <hr />
            <div className="row headerDesc">
              <div className="col text-justified">
                <p>
                  <span role="img" aria-label="icon">▪️</span> As a Certified Scrum Master, I lead complex transformation programs from beginning to end. I work within the Financial Services & Consumer Business industries and have 7+ years experience in solving complex problems via developing innovative, sustainable business and technology solutions. I am a frontend Engineer by passion.
                  <br /><br />
                  <span role="img" aria-label="icon">▪️</span> I enjoy consulting for the opportunity it gives me to work side-by-side with clients to co-design real solutions for their business and their people.
                  <br /><br />
                  <span role="img" aria-label="icon">▪️</span> I am currently based in Amsterdam, focusing on designing and implementing large scale business transformations. I am experienced across end to end transformations, starting with translating business strategy into capabilities and initiatives, all the way down to the detailed implementation and launch of <span role="img" aria-label="icon">🆕</span> structures and products.
                  <br /><br />
                  <span role="img" aria-label="icon">▪️</span> I enjoy applying a Design approach to problem solving, underpinned by placing the customer at the heart of everything I do. I am passionate about learning, exploring <span role="img" aria-label="icon">🆕</span> cultures and ways of working and am always looking for a <span role="img" aria-label="icon">🆕</span> challenge.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Header;
