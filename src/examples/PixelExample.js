import React from "react";

import { Pixel, _2DSurface as TwoDSurface } from "../DrawReact";

export default function PixelExample() {
  return (
    <TwoDSurface pixelWidth="5" height="120" width="240">
      <Pixel x={10} y={5} />
      <Pixel x={11} y={6} />
    </TwoDSurface>
  );
}
