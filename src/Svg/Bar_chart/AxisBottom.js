export const AxisBottom = ({innerHeight,xScale,tickFormat}) => {
    return xScale.ticks().map((tickValue) => (
      <g className="tick " transform={`translate(${xScale(tickValue)},0)`} key={tickValue}>
        <line y2={innerHeight}  />
        <text y={innerHeight + 3} dy=".71em" dx="-.71em">
          {tickFormat(tickValue)}
        </text>
      </g>
    ));
  };
  