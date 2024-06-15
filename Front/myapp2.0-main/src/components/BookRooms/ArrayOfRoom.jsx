import React from "react";

function ArrayOfRooms(props) {
  const roomArray = [];

  function BlockRooms(props) {
    if (props.isBooked) {
      return (
        <div>
          <button className="bookroom-button-element textblock bookroom-btn-active">
            {props.roomNumber}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="bookroom-button-element btn-yellow textblock yellow-black-textblock ">
            {props.roomNumber}
          </button>
        </div>
      );
    }
  }

  for (let i = 0; i < 9; i++) {
    roomArray.push({
      roomNumber: props.roomFloor + (i + 1),
      isBooked: false,
    });
  }

  return roomArray.map((room) => (
    <BlockRooms isBooked={room.isBooked} roomNumber={room.roomNumber} />
  ));
}

export default ArrayOfRooms;
