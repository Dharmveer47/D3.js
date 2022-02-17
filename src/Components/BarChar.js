import React from "react";
import { months, data } from "../obj";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data02 = [
  { hour: "12a", index: 1, value: 500 },
  { hour: "1a", index: 1, value: 180 },
  { hour: "2a", index: 1, value: 150 },
  { hour: "3a", index: 1, value: 120 },
  { hour: "4a", index: 1, value: 200 },
  { hour: "5a", index: 1, value: 300 },
  { hour: "6a", index: 1, value: 400 },
  { hour: "7a", index: 1, value: 200 },
  { hour: "8a", index: 1, value: 100 },
  { hour: "9a", index: 1, value: 150 },
  { hour: "10a", index: 1, value: 160 },
  { hour: "11a", index: 1, value: 170 },
  { hour: "12a", index: 1, value: 180 },

];

const data01 = [
  { hour: "0100", index: 1, traffic: 160 },
  { hour: "0200", index: 1, traffic: 180 },
  { hour: "0300", index: 1, traffic: 150 },
  { hour: "0400", index: 1, traffic: 120 },
  { hour: "0500", index: 1, traffic: 200 },
  { hour: "0600", index: 1, traffic: 300 },
  { hour: "0700", index: 1, traffic: 100 },
  { hour: "0800", index: 1, traffic: 200 },
  { hour: "0900", index: 1, traffic: 100 },
  { hour: "1000", index: 1, traffic: 150 },
  { hour: "1100", index: 1, traffic: 160 },
  { hour: "1200", index: 1, traffic: 160 },
  { hour: "1300", index: 1, traffic: 180 },

];

const parseDomain = () => [
  0,
  Math.max(
    Math.max.apply(
      null,
      data01.map((entry) => entry.value)
    ),
    // Math.max.apply(
    //   null,
    //   data02.map((entry) => entry.value)
    // )
  ),
];

const BarChar = () => {

  return (
    <div style={{ width: "100%" }}>
     <MultiBar month="Jan" op="0"/>
     <MultiBar month="Feb"op="0"/>
     <MultiBar month="Mar" op="0"/>
     <MultiBar month="Apr" op="100"/>
    </div>
  );
};

const MultiBar = ({month,op}) => {
  const domain = parseDomain();
  const range = [1, 1000];

  const renderTooltip = (props) => {
    // console.log(props);
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #999",
            margin: 0,
            padding: 10,
          }}
        >
          <p>{data.hour}</p>
          <p>
            <span>Traffic: </span>
            {data.traffic}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={70}>
      <ScatterChart
        width={800}
        height={100}
        fill="#8884d"
        shape="star"
        margin={{
          top: 20,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>

        <XAxis
          type="category"
          dataKey="hour"
          interval={0}
          // tick={{ fontSize: 10 }}
          tickLine={{ transform: "translate(0, -6)" }}
          // hide={false}
          opacity={op}
          interval={'preversveStartEnd'}
        />
        <YAxis
          // type="number"
          dataKey="index"
          name="sunday"
          height={0}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: `${month}`, position: "center" }}
        />
        <ZAxis type="number" dataKey="traffic" domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data01} fill="#333233" opacity={50} />
        
        
      </ScatterChart>
      
    </ResponsiveContainer>
  );
};

export default BarChar;
