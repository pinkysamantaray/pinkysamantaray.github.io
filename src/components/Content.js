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
        <div className="col-8">
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
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="sidebarContainer">
                <h5 className="card-title">About Me!</h5>
                <p className="card-text">
                  Having worked in the Software industry, through various phases
                  of the software development life cycle, I have learnt to be
                  creative and productive and I want to pursue this passion to
                  go ahead and to be the expert I want to be. <br />
                </p>
                <a
                  href="https://www.linkedin.com/in/pinkysamantaray/"
                  className="btn btn-primary mr-2"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/pinkysamantaray"
                  className="btn btn-primary mr-2"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
