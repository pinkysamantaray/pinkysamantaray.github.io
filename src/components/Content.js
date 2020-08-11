import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { currentKey: "" };

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.textInput) {
        this.textInput.parentElement.classList.toggle("focusedElement");
        this.textInput.focus();
      }
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
    // autofocus the input on mount
    this.focusTextInput();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  handleKeyPress(e) {
    this.setState({ currentKey: e.keyCode });
    if (e.keyCode === 38) {
      if (this.textInput.id === "techSkills") {
        e.preventDefault();
        return false;
      }
      this.textInput.parentElement.classList.toggle("focusedElement");
      this.textInput = this.textInput.parentElement.previousSibling.childNodes[3];
      this.focusTextInput();
      e.preventDefault();
    } else if (e.keyCode === 40) {
      if (this.textInput.id === "contact") {
        e.preventDefault();
        return false;
      }
      this.textInput.parentElement.classList.toggle("focusedElement");
      this.textInput = this.textInput.parentElement.nextSibling.childNodes[3];
      this.focusTextInput();
      e.preventDefault();
    } else {
      return false;
    }
  }
  render() {
    console.log(this.textInput);
    return (
      <div className="row bodyContainer mb-4 mt-4">
        <div className="col-md-10 col-sm-12 mx-auto">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="interactionContainer">
                    <div className="col">
                      <div className="comment">
                        ### Hit enter to select and Up/Down arrow keys to navigate
                        ###
                      </div>
                      <div className="questionair">
                        What do you want to know about me?{" "}
                        <span className="blinking-cursor">|</span>
                      </div>
                      <div className="questionair">
                        {" "}
                        > Tech Skills{" "}
                        <input
                          id="techSkills"
                          name="techSkills"
                          type="hidden"
                          value="techSkills"
                          autoFocus={false}
                          ref={this.setTextInputRef}
                        />
                      </div>
                      <div className="questionair">
                        {" "}
                        > Work Experience{" "}
                        <input
                          id="workExperience"
                          name="workExperience"
                          type="hidden"
                          value="workExperience"
                          autoFocus={false}
                        />
                      </div>
                      <div className="questionair">
                        {" "}
                        > Education{" "}
                        <input
                          id="education"
                          name="education"
                          type="hidden"
                          value="education"
                          autoFocus={false}
                        />
                      </div>
                      <div className="questionair">
                        {" "}
                        > Contact{" "}
                        <input
                          id="contact"
                          name="contact"
                          type="hidden"
                          value="contact"
                          autoFocus={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
          <div className="card boxShadow">
            <div className="card-body">
              <div className="sidebarContainer ">
                <h5 className="card-title">
                   
                </h5>
                <p className="card-text">
                      Thank you for visiting my profile. <span role="img" aria-label="icon">🚀</span>
                </p>
                <br />
                <a
                  href="https://www.linkedin.com/in/pinkysamantaray/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mr-2"
                >
                  <i className="fab fa-2x fa-linkedin-in" />
                </a>
                <a
                  href="https://github.com/pinkysamantaray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mr-2"
                >
                  <i className="fab fa-2x fa-github" />
                </a>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
