import React from "react";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { max, scaleBand, scaleLinear } from "d3";
import "../../App.css";


const Cvs = () => {
  const width = 700;
  const height = 400;
  const margin = { top: 20, right: 50, bottom: 20, left: 200 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const data = useData();

  //   console.log(data);

  if (!data) return <div>Loading...</div>;

  const yValue = (d) => d.Country;
  const xValue =  (d) => d.Population;
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(.1)

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <div style={{ border: "1px solid red" }}>
      <svg width={width} height={height}>
        <g
          transform={`translate(${margin.left},${margin.top})`}
          stroke="white"
          strokeWidth="1"
        >
          <AxisBottom innerHeight={innerHeight} xScale={xScale} />

          <AxisLeft yScale={yScale} />
          <Marks data={data} yScale={yScale} xScale={xScale} xValue={xValue} yValue={yValue} />
        </g>
      </svg>
    </div>
  );
};



export default Cvs;
