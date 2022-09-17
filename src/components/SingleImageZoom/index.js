import React, { Component } from "react";
import mediumZoom from "medium-zoom";
import { Waypoint } from "react-waypoint";
import Image from "@theme/IdealImage";

class SingleImageZoom extends Component {
  state = {
    tag: false,
    random: 0,
  };

  _handleWaypointEnter = () => {
    this.setState({ tag: true });
    const rand = Math.floor(Math.random() * 200);
    this.setState({ random: this.state.random + rand }, function () {
      setTimeout(() => {
        mediumZoom("#single-image-zoom-" + this.state.random, {
          background: "#000",
        });
      }, 1000);
    });
  };
  render() {
    return (
      <Waypoint onEnter={this._handleWaypointEnter}>
        {this.state.tag ? (
          <Image
            id={"single-image-zoom-" + this.state.random}
            img={this.props.img}
          />
        ) : null}
      </Waypoint>
    );
  }
}

export default SingleImageZoom;
