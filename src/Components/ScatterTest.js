import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data01 = [
  { x: 10, y: 1, z: 200 },
  { x: 10, y: 1, z: 260 },
  { x: 170, y: 1, z: 400 },
  { x: 140, y: 1, z: 600 },
  { x: 100, y: 1, z: 500 },
  { x: 50, y: 1, z: 200 },
  { x: 230, y: 1, z: 20 },
  { x: 260, y: 1, z: 250 },
  { x: 190, y: 1, z: 25 },
  { x: 198, y: 1, z: 21 },
  { x: 180, y: 1, z: 260 },
  { x: 230, y: 1, z: 232 },
];
const data02 = [
  { x: 10, y: 2, z: 200 },
  { x: 10, y: 2, z: 260 },
  { x: 170, y: 2, z: 400 },
  { x: 140, y: 2, z: 280 },
  { x: 100, y: 2, z: 500 },
  { x: 50, y: 2, z: 200 },
  { x: 200, y: 2, z: 20 },
  { x: 240, y: 2, z: 250 },
  { x: 190, y: 2, z: 25 },
  { x: 198, y: 2, z: 21 },
  { x: 180, y: 2, z: 260 },
  { x: 210, y: 2, z: 232 },
];
// const data03 = [
//   { x: 10, y: 3, z: 200 },
//   { x: 10, y: 3, z: 260 },
//   { x: 170, y: 3, z: 400 },
//   { x: 140, y: 3, z: 280 },
//   { x: 100, y: 3, z: 500 },
//   { x: 50, y: 3, z: 200 },
//   { x: 200, y: 3, z: 20 },
//   { x: 240, y: 3, z: 250 },
//   { x: 190, y: 3, z: 25 },
//   { x: 198, y: 3, z: 21 },
//   { x: 180, y: 3, z: 260 },
//   { x: 210, y: 3, z: 232 },
// ];
// const data04 = [
//   { x: 10, y: 4, z: 200 },
//   { x: 300, y: 4, z: 260 },
//   { x: 170, y: 4, z: 400 },
//   { x: 140, y: 4, z: 280 },
//   { x: 100, y: 4, z: 600 },
//   { x: 50, y: 4, z: 200 },
//   { x: 200, y: 4, z: 20 },
//   { x: 240, y: 4, z: 250 },
//   { x: 190, y: 4, z: 25 },
//   { x: 198, y: 4, z: 21 },
//   { x: 180, y: 4, z: 260 },
//   { x: 210, y: 4, z: 232 },
// ];

const ScatterTest = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis
          type="number"
          dataKey="y"
          name="weight"
          unit="kg"
          range={[60, 700]}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: "Jan", position: "center" }}
          />

        <ZAxis
          type="number"
          dataKey="z"
          range={[60, 700]}
          name="score"
          unit="km"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="A school" data={data01} fill="#82ca9d" />
        <Scatter name="B school" data={data02} fill="#8884d8" />
        {/* <Scatter name="B school" data={data03} fill="yellow" />
        <Scatter name="C school" data={data04} fill="blue" /> */}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterTest;
