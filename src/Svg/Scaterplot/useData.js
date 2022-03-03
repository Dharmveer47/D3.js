import { useState, useEffect } from "react";
import { csv } from "d3";
export const url =
  "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv";

// Custom Hooks
export const useData = () => {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    const row = (d) => {
      d.sepal_length = +d.sepal_length;
      d.sepal_width = +d.sepal_width;
      d.petal_length = +d.petal_length;
    };
    csv(url, row).then((data) => {
      setData(data);
    });
  }, []);

  return data;
};
