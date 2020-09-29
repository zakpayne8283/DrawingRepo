import React from "react";

export function Pixel(props) {
  const _CSS = {
    top: props.y * props.pixelWidth,
    left: props.x * props.pixelWidth,
    width: props.pixelWidth + "px",
    height: props.pixelWidth + "px",
    backgroundColor: props.color ? props.color : "black",
    position: "absolute"
  };

  return (
    <div style={_CSS} className="pixel">
      {props.children}
    </div>
  );
}
