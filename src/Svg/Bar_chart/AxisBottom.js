<<<<<<< HEAD
export const AxisBottom = ({innerHeight,xScale,tickFormat}) => {
=======
export const AxisBottom = ({innerHeight,xScale}) => {
>>>>>>> 29f74845672b7ee2b4116c30c73657e284d738fc
    return xScale.ticks().map((tickValue) => (
      <g className="tick " transform={`translate(${xScale(tickValue)},0)`} key={tickValue}>
        <line y2={innerHeight}  />
        <text y={innerHeight + 3} dy=".71em" dx="-.71em">
<<<<<<< HEAD
          {tickFormat(tickValue)}
=======
          {tickValue / 1000}{" "}
>>>>>>> 29f74845672b7ee2b4116c30c73657e284d738fc
        </text>
      </g>
    ));
  };
  