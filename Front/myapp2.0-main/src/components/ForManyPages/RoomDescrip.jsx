import React, { Component } from "react";

export class RoomDescrip extends Component {
  render() {
    return (
      <div className="room-description-wrapper">
        <div className="room-description textblock yellow-black-textblock">
          {this.props.textOfDesc}
        </div>
      </div>
    );
  }
}

export default RoomDescrip;
