import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <div className="appContainer container-fluid">
        <div className="row">
          <Header />
        </div>

        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
