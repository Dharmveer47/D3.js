import React from "react";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { max, scaleBand, scaleLinear, format,extent } from "d3";
import "../../App.css";

const Cvs = () => {
  const width = 700;
  const height = 400;
  const margin = { top: 20, right: 50, bottom: 50, left: 200 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const data = useData();

  //   console.log(data);

  if (!data) return <div>Loading...</div>;
  const yValue = (d) => d.sepal_length;
  const xValue = (d) => d.sepal_width;

  const yScale = scaleBand()
  .domain(extent(data,yValue))
  .range([0, innerHeight])
  
  const xScale = scaleLinear()
  .domain(extent(data,xValue))
  .range([0, innerWidth]);
  
//  console.log();
  return (
    <div style={{ border: "1px solid red" }}>
      <svg width={width} height={height}>
        <g
          transform={`translate(${margin.left},${margin.top})`}
          stroke="white"
          strokeWidth="1"
        >
          <AxisBottom
            // tickFormat={(n) => format(".2s")(n).replace("M", "B")}
            tickFormat={format('.2s')}
            innerHeight={innerHeight}
            xScale={xScale}
          />

          <AxisLeft yScale={yScale} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + 40}
            textAnchor="middle"
          >
            Populations
          </text>
          <Marks
            data={data}
            yScale={yScale}
            xScale={xScale}
            xValue={xValue}
            yValue={yValue}
            tooltipFormat={format('.2s')}
          />
        </g>
      </svg>
    </div>
  );
};

export default Cvs;
