import React from "react";
import RoomWindowComponent from "./RoomWindowComponent";

import "./allRooms.css";

// import lux1 from "C:/Users/mzolo/OneDrive/Рабочий стол/myapp/src/images/lux1.webp"
// import lux2 from "C:/Users/mzolo/OneDrive/Рабочий стол/myapp/src/images/lux2.jpeg"
// import lux3 from "C:/Users/mzolo/OneDrive/Рабочий стол/myapp/src/images/lux3.jpeg"
// import standart1 from "C:/Users/mzolo/OneDrive/Рабочий стол/myapp/src/images/standart1.jpg"
// import standart2 from "C:/Users/mzolo/OneDrive/Рабочий стол/myapp/src/images/standart2.jpg"
// import standart3 from "C:/Users/mzolo/OneDrive/Рабочий стол/myapp/src/images/standart3.jpg"
// import econom1 from "C:/Users/mzolo/OneDrive/Рабочий стол/myapp/src/images/econom1.jpg"
// import econom2 from "C:/Users/mzolo/OneDrive/Рабочий стол/myapp/src/images/econom2.jpg"
// import econom3 from "C:/Users/mzolo/OneDrive/Рабочий стол/myapp/src/images/econom3.jpg"

export default function Rooms() {
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

  return (
    <div className="rooms-flex-container">
      <RoomWindowComponent
        nameOfRoom="LUX ROOMS"
        slides={slidesLux}
        descOfRoom={roomDescArr[0]}
      />

      <RoomWindowComponent
        nameOfRoom="STANDART ROOMS"
        slides={slidesStandart}
        descOfRoom={roomDescArr[1]}
      />

      <RoomWindowComponent
        nameOfRoom="ECONOM ROOMS"
        slides={slidesEconom}
        descOfRoom={roomDescArr[2]}
      />
    </div>
  );
}
