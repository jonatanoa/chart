import React from "react";
import c3 from "c3";

const Chart = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: "#chart",
      data: {
        columns: [
          ["data0", 30, 200, 100, 400, 150, 250],
          ["data1", 350, 120, 40, 40, 5, 75],
          ["data2", 50, 20, 10, 40, 15, 25],
          ["data3", 80, 20, 100, 400, 150, 250],
          ["data4", 500, 200, 30, 60, 300, 200],
        ],
        type: "bar",
        types: {
          data2: "line",
          data3: "line",
          data4: "spline",
        },
       
      },
    });
  }, []);

  return <div id="chart" />;
};
export default Chart;