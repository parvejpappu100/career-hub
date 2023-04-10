import React from "react";
import {
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
} from "recharts";

const Statistics = () => {
  const assignmentMark = [
    { id: 1, name: "A 1", mark: "55" },
    { id: 2, name: "A 2", mark: "58" },
    { id: 3, name: "A 3", mark: "59" },
    { id: 4, name: "A 4", mark: "60" },
    { id: 5, name: "A 5", mark: "60" },
    { id: 6, name: "A 6", mark: "58" },
    { id: 7, name: "A 7", mark: "60" },
    { id: 8, name: "A 8", mark: "60" },
  ];
  return (
    <div className="  bg-sky-50 text-center  py-10">
      <h1 className="text-2xl font-bold">Assignment Analytics</h1>
      <div className="lg:container mx-auto">
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              className="my-5 mx-auto"
              data={assignmentMark}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="mark"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className=" font-semibold">
            <h6><small>A 1 = Assignment 1</small></h6>
            <p><small>mark = Assignment Mark</small></p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
