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
    Users: 50,
    Orders: 25,
  },
  {
    name: "March-April",
    Users: 30,
    Orders: 10,
  },
  {
    name: "May-June",
    Users: 5,
    Orders: 0,
  },
  {
    name: "July-Aug",
    Users: 40,
    Orders: 42,
  },
  {
    name: "Sept-Oct",
    Users: 10,
    Orders: 16,
  },
  {
    name: "Nov-Dec",
    Users: 50,
    Orders: 35,
  },
];
const ChartAreaTotal = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Total Users
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
          <Area type="monotone" dataKey="Users" stroke="green" fill="#8884d8" />
          <Area type="monotone" dataKey="Orders" stroke="red" fill="grey" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartAreaTotal;
