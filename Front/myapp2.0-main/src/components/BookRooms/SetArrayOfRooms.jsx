import React, { useState, useEffect } from "react";
import ArrayOfRooms from "./ArrayOfRoom";
import RoomImageComponent from "./RoomImageComponent";

function SetArrayOfRooms(props) {
  const roomDescArr = [
    "Lörem ipsum gavis stenora fimosa presk. Vida syssna ronon. Hös epid heterov nudat i denoning. Dibel nives. Hexanade venar, men sotirat obise, prening. Bebelt vehet en tön. Pöde intrak, digapp i rokidade jag sunas. Plabel ditylig alltså ylogi lan. Sotöktigt ligt: libelt. Tulig bir. Soror pogt sesam dihälig. Vande pseudoledes i seliga tir. Vipreda pol. Agnostilogi mikroren den. IVPA. Or odyn. Nisel lägt dyns. Terasutt kroniledes, telerimorade men ultrahäbelt och tetravöngen. Revönerat netöv därför att ysm i pobelt. Tuledes nyde kvasis.",

    "Lörem ipsum gavis stenora fimosa presk. Vida syssna ronon. Hös epid heterov nudat i denoning. Dibel nives. Hexanade venar, men sotirat obise, prening. Bebelt vehet en tön. Pöde intrak, digapp i rokidade jag sunas. Plabel ditylig alltså ylogi lan. Sotöktigt ligt: libelt. Tulig bir. Soror pogt sesam dihälig. Vande pseudoledes i seliga tir. Vipreda pol. Agnostilogi mikroren den. IVPA. Or odyn. Nisel lägt dyns. Terasutt kroniledes, telerimorade men ultrahäbelt och tetravöngen. Revönerat netöv därför att ysm i pobelt. Tuledes nyde kvasis.",

    "Lörem ipsum gavis stenora fimosa presk. Vida syssna ronon. Hös epid heterov nudat i denoning. Dibel nives. Hexanade venar, men sotirat obise, prening. Bebelt vehet en tön. Pöde intrak, digapp i rokidade jag sunas. Plabel ditylig alltså ylogi lan. Sotöktigt ligt: libelt. Tulig bir. Soror pogt sesam dihälig. Vande pseudoledes i seliga tir. Vipreda pol. Agnostilogi mikroren den. IVPA. Or odyn. Nisel lägt dyns. Terasutt kroniledes, telerimorade men ultrahäbelt och tetravöngen. Revönerat netöv därför att ysm i pobelt. Tuledes nyde kvasis.",
  ];
  const slidesLux = [
    { url: "./images/lux1.webp", index: "lux1" },
    { url: "./images/lux2.jpeg", index: "lux2" },
    { url: "./images/lux3.jpeg", index: "lux3" },
  ];
  const slidesStandart = [
    { url: "./images/standart1.jpg", index: "standart1" },
    { url: "./images/standart2.jpg", index: "standart2" },
    { url: "./images/standart3.jpg", index: "standart3" },
  ];
  const slidesEconom = [
    { url: "./images/econom1.jpg", index: "econom1" },
    { url: "./images/econom2.jpg", index: "econom2" },
    { url: "./images/econom3.jpg", index: "econom3" },
  ];
  let [currentTypeOfRoom, setCurrentTypeOfRoom] = useState("Econom");

  useEffect(() => {
    setCurrentTypeOfRoom(props.typeOfRoom);
  }, [props, currentTypeOfRoom]);

  function SwitchTypeOfRoom(props) {
    switch (currentTypeOfRoom) {
      case "Standart":
        return (
          <div>
            <ul className="bookroom-main-wrapper">
              <li className="btn-wrapper">
                <ArrayOfRooms roomFloor="1" />
              </li>
              <li className="btn-wrapper">
                <ArrayOfRooms roomFloor="2" />
              </li>
              <li className="btn-wrapper">
                <ArrayOfRooms roomFloor="3" />
              </li>
            </ul>

            <RoomImageComponent
              slides={slidesStandart}
              descOfRoom={roomDescArr[1]}
            />
          </div>
        );
      case "Luxury":
        return (
          <div>
            <ul className="bookroom-main-wrapper">
              <li className="btn-wrapper">
                <ArrayOfRooms roomFloor="2" />
              </li>
              <li className="btn-wrapper">
                <ArrayOfRooms roomFloor="3" />
              </li>
              <li className="btn-wrapper">
                <ArrayOfRooms roomFloor="4" />
              </li>
            </ul>

            <RoomImageComponent
              slides={slidesLux}
              descOfRoom={roomDescArr[2]}
            />
          </div>
        );
      default:
        return (
          <div>
            <ul className="bookroom-main-wrapper">
              <li className="btn-wrapper">
                <ArrayOfRooms roomFloor="3" />
              </li>
              <li className="btn-wrapper">
                <ArrayOfRooms roomFloor="4" />
              </li>
              <li className="btn-wrapper">
                <ArrayOfRooms roomFloor="5" />
              </li>
            </ul>

            <RoomImageComponent
              slides={slidesEconom}
              descOfRoom={roomDescArr[0]}
            />
          </div>
        );
    }
  }

  return <SwitchTypeOfRoom currentTypeOfRoom={props.currentTypeOfRoom} />;
}

export default SetArrayOfRooms;
