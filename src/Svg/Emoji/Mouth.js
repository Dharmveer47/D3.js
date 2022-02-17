import React from "react";
import { arc } from "d3";
export const Mouth = ({eyeRadious,eyeOffsetY,eyeOffsetX,mouthWidth,mouthRadious}) => {

    
  const MouthArc = arc()
  .innerRadius(mouthWidth)
  .outerRadius(mouthRadious + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

  return (
    <>
      <circle r={eyeRadious} cx={-eyeOffsetX} cy={-eyeOffsetY} fill="black" />
      <circle r={eyeRadious} cx={eyeOffsetX} cy={-eyeOffsetY} fill="black" />
      <path d={MouthArc()} />
    </>
  );
};
