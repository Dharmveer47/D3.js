import React from "react";
import { Bubble } from "react-chartjs-2";
import faker from "faker";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend,);

export const options = {
  scales: {
    y: {
      lol: true,
    },
  },
};

// export const data = {
//   datasets: [
//     {
//       label: "Red dataset",
//       data: Array.from({ length: 50 }, () => ({
//         x: faker.datatype.number({ min: -100, max: 100 }),
//         y: faker.datatype.number({ min: -100, max: 100 }),
//         r: faker.datatype.number({ min: 5, max: 20 }),
//       })),
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };
const Bubble2 = () => {
  return (
    <>
      <Bubble options={options} data={data} />
    </>
  );
};

export const data = {
  datasets: [
    {
      label: ["red"],
      data: [
        {
          x: 40,
          y: 10,
          r: 50,
        },
        
        {
          x: 30,
          y: 10,
          r: 10,
        },
        {
          x: 20,
          y: 10,
          r: 15,
        },
        {
          x: 10,
          y: 10,
          r: 10,
        },
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "black"
    },
  ],
};

export default Bubble2;
