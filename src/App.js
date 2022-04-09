import React from "react";
import Header from "./Header";
import Editor from "./Editor";
import Preview from "./Preview";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xml: "<h1>Hello World!</h1>",
      css: "",
    };
  }

  handleChange = (value, language) => {
    this.setState({ [language]: value });
  };

  render() {
    let { xml, css } = this.state;
    return (
      <>
        <Header />
        <div className="main-body container flex">
          <div className="code-container flex">
            <Editor
              language="xml"
              value={xml}
              displayLabel="html"
              handleChange={this.handleChange}
            />
            <Editor
              language="css"
              value={css}
              handleChange={this.handleChange}
            />
          </div>
          <Preview xml={xml} css={css} />
        </div>
      </>
    );
  }
}
