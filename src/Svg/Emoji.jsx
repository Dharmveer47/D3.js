import React from "react";
import { Mouth } from "./Emoji/Mouth";
import { BackgroundCircle } from "./Emoji/BgCircle";
import { FaceContainer } from "./Emoji/FaceContainer";
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

  return (
    <div>
      <FaceContainer centerX={centerX} centerY={centerY} width={width} height={height} >
          <BackgroundCircle centerY={centerY} strokeWidth={strokeWidth} />
          <Mouth
            mouthWidth={mouthWidth}
            mouthRadious={mouthRadious}
            eyeRadious={eyeRadious}
            eyeOffsetX={eyeOffsetX}
            eyeOffsetY={eyeOffsetY}
          /> 
        </FaceContainer>
    </div>
  );
};


export default Emoji;
