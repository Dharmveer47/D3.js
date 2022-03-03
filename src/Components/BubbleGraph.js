import React, { useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const parseDomain = (data) => [
  0,
  Math.max(
    Math.max.apply(
      null,
      data.map((entry) => entry.value)
    )
  ),
];

const BubbleGraph = () => {
  const [data, setData] = useState([]);
  const url2 =
    "https://gist.githubusercontent.com/Dharmveer47/041fe5142c0774bee82cd10a829fa2c0/raw/195eb42e92d4cd4ddca387dc92c2b6782a97f21c/data.json";

  useEffect(() => {
    fetch(url2).then((res) => res.json().then((data) => setData(data)));
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(data);
  return (
    <div>
      {/* <SingleData name="Jan" data={data[0]} show={false}/>
      <SingleData name="Feb" data={data[0]} show={false}/>
      <SingleData name="Mar" data={data[0]} show={false}/>
      <SingleData name="Apr" data={data[0]} show={false}/>
      <SingleData name="May" data={data[0]} show={false}/>
      <SingleData name="Jun" data={data[0]} show={false}/>
      <SingleData name="Jul" data={data[0]} show={false}/>
      <SingleData name="Aug" data={data[0]} show={false}/>
      <SingleData name="Sep" data={data[0]} show={false}/>
      <SingleData name="Oct" data={data[0]} show={false}/> */}
      {/* <SingleData name="Nov" data={data[0]} show={false}/> */}
      <SingleData name="Dec" data={data[0]} show={true} size={15}/>
    </div>
  );
};

const SingleData = ({ data,name,show,size }) => {


  const renderTooltip = (props) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #999",
            fontSize: "15px",
            color: "gray",
            margin: 0,
            borderRadius: "5px",
            boxShadow: "0px 0px 10px #999",
            padding: 10,
          }}
        >
          <ul>
            <li>Days :{data.Day}</li>
            <li>Buses :{data.Buses}</li>
            <li>Trucks :{data.Trucks}</li>
            <li>Motercar :{data.Motercar}</li>
            <li>Total Traffic :{data.Traffic}</li>
          </ul>
        </div>
      );
    }

    return null;
  };

  const domain = parseDomain(data);
  const range = [20, 900];
  return (
    <ResponsiveContainer width="100%" height={500}>
      <ScatterChart
        width={800}
        height={40}
        margin={{
          top: 11,
          right: 0,
          bottom: -5,
          left: 0,
        }}
      >
        <XAxis
          unit="h"
          type="number"
          dataKey="Hour"
          interval={0}
          // tick={{ fontSize: 0 }}
          tick={show ? { fontSize: size } : { fontSize: 0 }}
          tickLine={show}
          axisLine={show}
          // tickLine={{ transform: "translate(0, -6)" }}
          padding={{ left: 20, right: 20 }}
          // domain={["day[0]", 24]}
        />
        <YAxis
          type="number"
          dataKey="Traffic"
          height={10}
          width={80}
          // tick={false}
          // tickLine={false}
          // axisLine={false}
          padding={{ top: 5 }}
          margin={{ top: 5 }}
          label={{ value: name, position: "insideRight" }}
        />
        <ZAxis type="number" dataKey="Traffic" domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data} fill="skyblue" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default BubbleGraph;
