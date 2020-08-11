import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="nav justify-content-end bg-light mx-2">
          <li className="nav-item">
            <small>
              <span className="nav-link disabled">
                All rights reserved. 2020 <i className="far fa-copyright" />
              </span>
            </small>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
