import React from "react";

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.preview = React.createRef();
  }

  componentDidMount() {
    this.showPreview();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.css !== this.props.css || prevProps.xml !== this.props.xml) {
      this.showPreview();
    }
  }

  showPreview = () => {
    if (this.preview.current) {
      let { xml, css } = this.props;
      let document = this.preview.current.contentWindow.document;
      let style = document.createElement("style");
      style.innerText = css;
      document.head.append(style);
      document.body.innerHTML = xml;
    }
  };

  render() {
    return (
      <div className="editor-box output">
        <header className="editor-header grey flex">
          <ul className="circle-list flex">
            <li className="header-circle red"></li>
            <li className="header-circle yellow"></li>
            <li className="header-circle green"></li>
          </ul>
          <h3>OUTPUT</h3>
        </header>
        <iframe
          title="HTML/CSS Preview"
          ref={this.preview}
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}
