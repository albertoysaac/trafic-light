import React, { useState } from "react";

const TraficLight = () => {
  const [selectedLight, setSelectedLight] = useState(null);

  const turnOn = (color) => {
    setSelectedLight(color);
  };

  return (
    <div class="container-fluid">
      <div class="container d-flex flex-column align-items-center">
        <div class="poste"></div>
        <div class="traficLight">
          <div
            className={`red light ${selectedLight === "red" ? "selected" : ""}`}
            key={"red"}
            onClick={() => turnOn("red")}
          ></div>
          <div
            className={`yellow light ${
              selectedLight === "yellow" ? "selected" : ""
            }`}
            onClick={() => turnOn("yellow")}
          ></div>
          <div
            className={`green light ${
              selectedLight === "green" ? "selected" : ""
            }`}
            onClick={() => turnOn("green")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TraficLight;
