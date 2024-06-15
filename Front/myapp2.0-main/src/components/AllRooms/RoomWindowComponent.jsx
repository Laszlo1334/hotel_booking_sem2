import React, { Component } from "react";
import ImageSlider from "../ForManyPages/ImageSlider";
import RoomDescrip from "../ForManyPages/RoomDescrip";

export class RoomWindowComponent extends Component {
  render() {
    return (
      <div className="room blue-yellow-textblock">
        <div className="room-type-wrapper">
          <div className="room-type textblock yellow-black-textblock">
            {this.props.nameOfRoom}
          </div>
        </div>
        <div className="room-main-wrapper">
          <div className="room-slideshow-wrapper">
            <div className="room-slideshow">
              <ImageSlider slides={this.props.slides} />
            </div>
          </div>

          <RoomDescrip textOfDesc={this.props.descOfRoom} />
        </div>
      </div>
    );
  }
}

export default RoomWindowComponent;
