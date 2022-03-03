export const AxisLeft = ({yScale}) => {
    return yScale.domain().map((tickValue) => (
      <text
        style={{ textAnchor: "end" }}
        dy=".32em"
        x={-5}
        y={yScale(tickValue)}
        key={tickValue}
      >
        {tickValue}
      </text>
    ));
  };
  