import React from "react";

export function _2DSurface(props) {
  const _CSS = {
    position: "relative",
    border: "2px solid black",
    height: props.height * props.pixelWidth + "px",
    width: props.width * props.pixelWidth + "px"
  };

  const renderedChildren = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { pixelWidth: props.pixelWidth });
  });

  return (
    <div style={_CSS} className="2d-drawing-surface">
      {renderedChildren}
    </div>
  );
}
