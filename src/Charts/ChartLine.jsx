import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const pdata = [
  {
    name: "Jan-Feb",
    Off: 30,
  },
  {
    name: "Mar-Apr",
    Off: 10,
  },
  {
    name: "May-June",
    Off: 50,
  },
  {
    name: "July-Aug",
    Off: 0,
  },
  {
    name: "Sept-Oct",
    Off: 40,
  },
  {
    name: "Nov-Dec",
    Off: 10,
  },
];
const ChartLine = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Men Sale
      </h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 100, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="Off"
            stroke="green"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartLine;
