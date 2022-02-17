import React,{useState} from 'react'

const MouseCircle = () => {

    const [move, setMove] = useState({});
    // console.log(move);

    const width = 600;
    const height = 500;
    const circleX = width/2;
    const circleY = height/2;
    const circleRadius = 30;

    const handleMouseMove = (event) =>{
        const { clientX, clientY} = event;
        setMove({clientX,clientY})
    }

  return (
    <div style={{border: "1px solid red"}}>
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle
        cx={move.clientX}
        cy={move.clientY}
        r={circleRadius}
        fill="yellow"
      />
        </svg>
    </div>
  )
}

export default MouseCircle