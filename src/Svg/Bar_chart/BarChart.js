import React from "react";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
<<<<<<< HEAD
import { max, scaleBand, scaleLinear, format } from "d3";
import "../../App.css";
=======
import { max, scaleBand, scaleLinear } from "d3";
import "../../App.css";

>>>>>>> 29f74845672b7ee2b4116c30c73657e284d738fc

const Cvs = () => {
  const width = 700;
  const height = 400;
<<<<<<< HEAD
  const margin = { top: 20, right: 50, bottom: 50, left: 200 };
=======
  const margin = { top: 20, right: 50, bottom: 20, left: 200 };
>>>>>>> 29f74845672b7ee2b4116c30c73657e284d738fc
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const data = useData();

  //   console.log(data);

  if (!data) return <div>Loading...</div>;

  const yValue = (d) => d.Country;
<<<<<<< HEAD
  const xValue = (d) => d.Population;
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.1);
=======
  const xValue =  (d) => d.Population;
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(.1)
>>>>>>> 29f74845672b7ee2b4116c30c73657e284d738fc

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
<<<<<<< HEAD
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
=======
          <AxisBottom innerHeight={innerHeight} xScale={xScale} />

          <AxisLeft yScale={yScale} />
          <Marks data={data} yScale={yScale} xScale={xScale} xValue={xValue} yValue={yValue} />
>>>>>>> 29f74845672b7ee2b4116c30c73657e284d738fc
        </g>
      </svg>
    </div>
  );
};



export default Cvs;
