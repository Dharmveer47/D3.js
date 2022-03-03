<<<<<<< HEAD
export const Marks = ({ data, yScale,tooltipFormat, xScale, xValue, yValue }) => {
  return data.map((d) => (
    <rect
      className="mark"
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </rect>
  ));
};
=======
export const Marks = ({data,yScale,xScale,xValue,yValue}) => {
    return data.map((d) => (
      <rect
      className="mark"
        key={yValue(d)}
        x={0}
        y={yScale(yValue(d))}
        width={xScale(xValue(d))}
        height={yScale.bandwidth()}
      />
    ));
  };
>>>>>>> 29f74845672b7ee2b4116c30c73657e284d738fc
