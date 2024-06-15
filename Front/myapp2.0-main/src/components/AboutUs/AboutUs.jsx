import React from "react";
import ImageSlider from "../ForManyPages/ImageSlider";
import RoomDescrip from "../ForManyPages/RoomDescrip";

import "./aboutUs.css";

function AboutUs() {
  const aboutUs = [
    "Lörem ipsum gavis stenora fimosa presk. Vida syssna ronon. Hös epid heterov nudat i denoning. Dibel nives. Hexanade venar, men sotirat obise, prening. Bebelt vehet en tön. Pöde intrak, digapp i rokidade jag sunas. Plabel ditylig alltså ylogi lan. Sotöktigt ligt: libelt. Tulig bir. Soror pogt sesam dihälig. Vande pseudoledes i seliga tir. Vipreda pol. Agnostilogi mikroren den. IVPA. Or odyn. Nisel lägt dyns. Terasutt kroniledes, telerimorade men ultrahäbelt och tetravöngen. Revönerat netöv därför att ysm i pobelt. Tuledes nyde kvasis.",

    "Lörem ipsum gavis stenora fimosa presk. Vida syssna ronon. Hös epid heterov nudat i denoning. Dibel nives. Hexanade venar, men sotirat obise, prening. Bebelt vehet en tön. Pöde intrak, digapp i rokidade jag sunas. Plabel ditylig alltså ylogi lan. Sotöktigt ligt: libelt. Tulig bir. Soror pogt sesam dihälig. Vande pseudoledes i seliga tir. Vipreda pol. Agnostilogi mikroren den. IVPA. Or odyn. Nisel lägt dyns. Terasutt kroniledes, telerimorade men ultrahäbelt och tetravöngen. Revönerat netöv därför att ysm i pobelt. Tuledes nyde kvasis.",
  ];

  const slidesAnton = [
    { url: "./images/lux1.webp", index: "lux1" },
    { url: "./images/lux2.jpeg", index: "lux2" },
    { url: "./images/lux3.jpeg", index: "lux3" },
  ];
  const slidesVlad = [
    { url: "./images/standart1.jpg", index: "standart1" },
    { url: "./images/standart2.jpg", index: "standart2" },
    { url: "./images/standart3.jpg", index: "standart3" },
  ];
  return (
    <div className="aboutus-flex-container">
      <div className="aboutus blue-yellow-textblock">
        <div className="aboutus-type-wrapper">
          <div className="aboutus-text textblock yellow-black-textblock">
            ABOUT US
          </div>
        </div>
        <div className="room-main-wrapper">
          <div className="room-slideshow-wrapper">
            <div className="room-slideshow">
              <ImageSlider slides={slidesAnton} />
            </div>
          </div>

          <RoomDescrip textOfDesc={aboutUs[0]} />
        </div>
        <div className="room-main-wrapper">
          <div className="room-slideshow-wrapper">
            <div className="room-slideshow">
              <ImageSlider slides={slidesVlad} />
            </div>
          </div>

          <RoomDescrip textOfDesc={aboutUs[1]} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
