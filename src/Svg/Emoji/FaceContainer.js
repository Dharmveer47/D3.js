export const FaceContainer = ({
  children,
  centerX,
  centerY,
  width,
  height,
}) => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {children}
      </g>
    </svg>
  );
};
