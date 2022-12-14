import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
const pdata = [
  {
    name: "Jan-Feb",
    Off: 60,
  },
  {
    name: "Mar-Apr",
    Off: 15,
  },
  {
    name: "May-June",
    Off: 30,
  },
  {
    name: "July-Aug",
    Off: 50,
  },
  {
    name: "Sept-Oct",
    Off: 50,
  },
  {
    name: "Nov-Dec",
    Off: 10,
  },
];
const ChartBar = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Women Sale
      </h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
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
          <Bar dataKey="Off" fill="#8884d8" />
          {/* <Bar dataKey="fees" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartBar;
