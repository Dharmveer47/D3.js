import React,{useState} from 'react'

const MouseCircle = () => {

    
        const width = 600;
        const height = 500;
        const X = width/2;
        const Y = height/2;
        const circleRadius = 30;
    const [move, setMove] = useState({X,Y});
    // console.log(move);

    const handleMouseMove = (event) =>{
        const { clientX, clientY} = event;
        setMove({X:clientX,Y:clientY})
    }

  return (
    <div style={{border: "1px solid red"}}>
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle
        cx={move.X}
        cy={move.Y}
        r={circleRadius}
        fill="yellow"
      />
        </svg>
    </div>
  )
}

export default MouseCircle