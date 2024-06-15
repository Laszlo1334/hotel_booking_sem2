import React, { useState } from "react";
import TypeOfRoomComponent from "./TypeOfRoomComponent";
import SetArrayOfRooms from "./SetArrayOfRooms";

import "./bookRooms.css";

function BookRoom() {
  let [currentTypeOfRoom, setCurrentTypeOfRoom] = useState("Econom");

  return (
    <div className="book-room blue-yellow-textblock">
      <nav>
        <ul className="bookroom-header-nav-container">
          <div
            onClick={() => {
              setCurrentTypeOfRoom("Econom");
            }}
          >
            <TypeOfRoomComponent
              typeOfRoom="Econom"
              currentRoomName={currentTypeOfRoom}
            />
          </div>
          <div
            onClick={() => {
              setCurrentTypeOfRoom("Standart");
            }}
          >
            <TypeOfRoomComponent
              typeOfRoom="Standart"
              currentRoomName={currentTypeOfRoom}
            />
          </div>
          <div
            onClick={() => {
              setCurrentTypeOfRoom("Luxury");
            }}
          >
            <TypeOfRoomComponent
              typeOfRoom="Luxury"
              currentRoomName={currentTypeOfRoom}
            />
          </div>
        </ul>
      </nav>
      <SetArrayOfRooms typeOfRoom={currentTypeOfRoom} />
    </div>
  );
}

export default BookRoom;
