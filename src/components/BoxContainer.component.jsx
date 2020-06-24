import React, { Component } from "react";
import "./BoxContainer.style.css";
import Box from "./Box.component";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: ["purple", "magenta", "lightgreen", "lightblue"],
  };
  state = {};
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
