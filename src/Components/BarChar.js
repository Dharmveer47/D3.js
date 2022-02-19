import React from "react";
import {  data } from "../obj";
import '../App.css';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const parseDomain = (data) => [
    // console.log(data)
  0,
  Math.max(
    Math.max.apply(
      null,
      data.map((entry) => entry.value)
    ),
    // Math.max.apply(
    //   null,
    //   data02.map((entry) => entry.value)
    // )
  ),
];

const BarChar = () => {

  return (
    <div style={{ width: "100%" }} className="">
     <MultiBar data={data[0]} month="Jan-" op="0"/>
     <div className="line"></div>
     <MultiBar data={data[1]} month="Feb-"op="0"/>
     <MultiBar data={data[2]} month="Mar-" op="0"/>
     <MultiBar data={data[3]} month="Apr-" op="0"/>
     <MultiBar data={data[4]} month="May-" op="0"/>
     <MultiBar data={data[5]} month="Jun-" op="0"/>
     <MultiBar data={data[6]} month="Jul-" op="0"/>
     {/* <MultiBar data="data01" month="Aug-" op="0"/>
     <MultiBar data="data01" month="Sep-" op="0"/>
     <MultiBar data="data01" month="Oct-" op="0"/>
     <MultiBar data="data01" month="Nov-" op="0"/>
     <MultiBar data="data01" month="Dec-" op="0"/> */}
    </div>
  );
};

const MultiBar = ({month,op,data}) => {
  console.log(data);
  const domain = parseDomain();
  const range = [1, window.innerWidth * 2];

  const renderTooltip = (props) => {
    // console.log(props);
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;

      return (
        <div
          style={{
            background: "#fff",
            boxShadow: "2px 4px 5px black",
            border: "1px solid #999",
            borderRadius: "10px",
            margin: 0,
            padding: 10,
          }}
        >
          <p>Buses : {data.buses}</p>
          <p>Date : {data.date}</p>
          <p>
            <span>Total Traffic: </span>
            {data.traffic}
          </p>
        </div>
      );
    }

    return null;
  };


  console.log( window.innerWidth)
  return (
    <>
    <ResponsiveContainer width="100%" height={70}>
      <ScatterChart
        width={800}
        height={50}
        fill="#8884d"
        shape="star"
        margin={{
          top: 30,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3"/> */}
        <XAxis
          type="category"
          dataKey="hour"
          interval={0}
          tick={{ fontSize: 10 }}
          
          // hide={false}
          opacity={op}
          // interval={'preversveStartEnd'}
        />
        <YAxis
        tickLine={{ transform: "translate(0, -6)" }}
          // type="number"
          dataKey="index"
          name="sunday"
          // height={0}
          // width={80}
          tick={false}
          axisLine={false}
          label={{ value: `${month}`, position: "center" }}
        />
        <ZAxis type="number" dataKey="traffic" domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data} fill="gray" className="game" opacity={50} />
        
        
      </ScatterChart>
      
    </ResponsiveContainer>

    </>
  );
};

export default BarChar;
