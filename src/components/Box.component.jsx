import React, { Component } from "react";
import "./Box.style.css";
import { choice } from './helper';

class Box extends Component {
  state = {
    color: choice(this.props.colors),
  };

  pickColor = () => {
      let newColor;
      do {
        newColor = choice(this.props.colors);
      } while(newColor === this.state.color)
      this.setState({color: newColor})
  }

  handleColor = () => {
    this.pickColor()
  }

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleColor}
      ></div>
    );
  }
}

export default Box;
