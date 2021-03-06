import React,{useState, useCallback} from 'react'

const MouseCircle = () => {

    
        const width = "100%";
        const height = "100vh";
        const X = width/2;
        const Y = height/2;
        const circleRadius = 30;
    const [move, setMove] = useState({X,Y});
    // console.log(move);

    const handleMouseMove = useCallback((event) =>{
        const { clientX, clientY} = event;
        setMove({X:clientX,Y:clientY})
    },[setMove]) 
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