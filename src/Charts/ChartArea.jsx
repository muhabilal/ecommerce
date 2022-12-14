import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
const pdata = [
  {
    name: "Jan-Feb",
    Off: 50,
  },
  {
    name: "March-April",
    Off: 30,
  },
  {
    name: "May-June",
    Off: 5,
  },
  {
    name: "July-Aug",
    Off: 40,
  },
  {
    name: "Sept-Oct",
    Off: 10,
  },
  {
    name: "Nov-Dec",
    Off: 50,
  },
];
const ChartArea = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Kids Sale
      </h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Off" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartArea;
