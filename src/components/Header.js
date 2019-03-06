import React, { Component } from "react";
import { Parallax } from "react-parallax";

const image1 =
  process.env.PUBLIC_URL + "/abstract-background-canvas-249798.jpg";

class Header extends Component {
  render() {
    return (
      <Parallax bgImage={image1} strength={500}>
        <div className="jumbotron container-fluid headerContainer">
          <code className="display-4">Hello!</code>
          <h3>
            My name is <strong>Pinky Samantaray</strong> !!
          </h3>
          <h6>
            currently a Front-End Engineer making an impact at Deloitte Digital.
          </h6>
          <hr />
          <div className="row headerDesc">
            <div className="col text-justified">
              <h5>
                Having worked in the Software industry, through various phases
                of the software development life cycle, I have learnt to be
                creative and productive and I want to pursue this passion to go
                ahead and to be the expert I want to be. <br />
              </h5>
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
}

export default Header;
