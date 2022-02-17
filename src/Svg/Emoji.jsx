import React from "react";
import { arc } from "d3";
/**  r= {height/2 - strokeWidth/2} **/
const Emoji = () => {
  const width = 400;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;
  const eyeOffsetX = 90;
  const eyeOffsetY = 70;
  const eyeRadious = 60;
  const mouthRadious = 10;
  const mouthWidth = 120;

   

  const MouthArc = arc()
    .innerRadius(mouthWidth)
    .outerRadius(mouthRadious + mouthWidth)
    .startAngle(Math.PI/2)
    .endAngle(Math.PI * 3/2);

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          <circle
            r={centerY - strokeWidth / 2}
            
            fill="yellow"
            stroke="black"
            strokeWidth={strokeWidth}
          />
          <circle
            r={eyeRadious}
            cx={ - eyeOffsetX}
            cy={ - eyeOffsetY}
            fill="black"
          />
          <circle
            r={eyeRadious}
            cx={ eyeOffsetX}
            cy={ - eyeOffsetY}
            fill="black"
          />
          <path d={MouthArc()} />
        </g>
      </svg>
    </div>
  );
};

export default Emoji;
