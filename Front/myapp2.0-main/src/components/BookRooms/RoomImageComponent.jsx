import React, { Component } from "react";
import ImageSlider from "../ForManyPages/ImageSlider";
import RoomDescrip from "../ForManyPages/RoomDescrip";

function RoomImageComponent(props) {
  return (
    <div>
      <div className="bookroom-main-wrapper">
        <div className="bookroom-slideshow-wrapper">
          <div className="bookroom-slideshow">
            <ImageSlider slides={props.slides} />
          </div>
        </div>

        <RoomDescrip textOfDesc={props.descOfRoom} />
      </div>
    </div>
  );
}

export default RoomImageComponent;
