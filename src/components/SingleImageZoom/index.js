// How to combine IdealImage and ImageZoom?
// IdealImage works during page scrolling, and ImageZoom works after building
// Workaround: handle each image individually using Waypoint

import React, { Component } from "react";
import mediumZoom from "medium-zoom";
import Image from "@theme/IdealImage";

class SingleImageZoom extends Component {
  state = {
    random: 0,
  };
  _handleImageLoaded = () => {
    const rand = Math.floor(Math.random() * 200);
    this.setState({ random: this.state.random + rand }, function () {
      setTimeout(() => {
        // About medium-zoom (but this in building time): https://github.com/francoischalifour/medium-zoom
        // But idea (after building) I took from here: https://github.com/flexanalytics/plugin-image-zoom/blob/master/src/zoom.js
        mediumZoom("#single-image-zoom-" + this.state.random, {
          background: "#000",
        });
      }, 1000);
    });
  };

  render() {
    return (
      // Read more about Waypoint: https://github.com/civiccc/react-waypoint
      // First, read how to work IdealImage: https://github.com/stereobooster/react-ideal-image/blob/master/introduction.md
      <Image
        loaded={this._handleImageLoaded.bind(this)}
        id={"single-image-zoom-" + this.state.random}
        img={this.props.img}
        alt={this.props.img.src.src
          .replace(/(?:\/([a-z-]*))+.*/, "$1")
          .replace(/-/g, " ")
          .replace(/^./, (str) => str.toUpperCase())}
      />
    );
  }
}

export default SingleImageZoom;
