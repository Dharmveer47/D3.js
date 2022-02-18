import React, { useState, useEffect } from "react";
import { url } from "./Url";
// import * as d3 from "d3";
import { csv, max, scaleBand, scaleLinear } from "d3";

const Cvs = () => {
  const width = 400;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"];
      return d;
    };
    csv(url, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  //   console.log(data);

  if (!data) return <div>Loading...</div>;

  

  console.log(data);
  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);

  return (
    <div style={{ border: "1px solid red" }}>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`} fill="" stroke="white" stroke-width="1">
            
          {data.map((d) => (
              <rect
              x={0}
              y={yScale(d.Country)}
              width={xScale(d.Population)}
              height={yScale.bandwidth()}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Cvs;
