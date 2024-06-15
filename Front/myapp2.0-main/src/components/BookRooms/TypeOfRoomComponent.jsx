import React, { useState, useEffect } from "react";

function TypeOfRoomComponent(props) {
  let [state, setState] = useState(false);

  useEffect(() => {
    setState(props.currentRoomName === props.typeOfRoom);
  }, [props, state]);

  if (state) {
    return (
      <button
        className="bookroom-header-button-element textblock bookroom-btn-act"
        disabled
      >
        {props.typeOfRoom}
      </button>
    );
  } else {
    return (
      <button className="bookroom-header-button-element btn-yellow textblock yellow-black-textblock">
        {props.typeOfRoom}
      </button>
    );
  }
}

export default TypeOfRoomComponent;
