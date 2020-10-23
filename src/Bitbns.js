import React from "react";
import Chart from "react-google-charts";

function Bitbns({ coins }) {
  // graphList.push(x, [i["coin"].split(0, 3), i["buy"], i["sell"]]);
  //
  return (
    <div>
      {coins ? (
        <Chart
          width={400}
          height={"300px"}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={coins}
          options={{
            title: "BitBNS",
            hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: "50%", height: "70%" },
            // lineWidth: 25
          }}
        />
      ) : null}
    </div>
  );
}

export default Bitbns;
