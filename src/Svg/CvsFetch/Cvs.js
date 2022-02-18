import React, { useState, useEffect } from "react";
// import * as d3 from "d3";
import { csv, arc,pie } from "d3";

const url =
  "https://gist.githubusercontent.com/Dharmveer47/031331ed2d8f62839b0bfcf0ba379e91/raw/Colors%2520Name";

const width = 550;
const height = 400;
const centerX = width / 2;
const centerY = height / 2;

const piArc = arc()
  .innerRadius(0)
  .outerRadius(width);

const Cvs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(url).then((data) => {
      setData(data);
    });
  }, []);

  const colorPie = pie().value(1);

  if (!data) {
    return <div>Loading...</div>;
  } else
    return (
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          {colorPie(data).map((d,i) => (
            <path 
             fill={d.data["RGB hex value"]}
             d={piArc(d)}
            //  key={d["RGB hex value"]}

            //  d={piArc({
            //      startAngle: (i / data.length ) * 2 * Math.PI,
            //      endAngle: ((i+1) / data.length ) * 2 * Math.PI,
                
            //  })}

             />
          ))}
        </g>
      </svg>
    );
};

export default Cvs;

// Width fetch async and await
// const fetchText = async (url) =>{
//     const response = await fetch(url);
//     return await response.text();
// }
// console.log(fetchText(url));
// fetchText(url).then(text=>{
// const data = d3.csvParse(text)
// console.log(data.length ,"Row")
// console.log(Math.round(text.length / 1024 ),"Kb")
// console.log(data.columns.length ,"columns")
// })
