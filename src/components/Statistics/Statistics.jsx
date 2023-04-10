import React from 'react';
import {ResponsiveContainer,Line,XAxis,YAxis,CartesianGrid,Tooltip,Brush,AreaChart,Area} from "recharts";

const Statistics = () => {
    const assignmentMark = [
        {id : 1 , name: "Assignment 1" , mark: '55'},
        {id : 2 , name: "Assignment 2" , mark: '58'},
        {id : 3 , name: "Assignment 3" , mark: '59'},
        {id : 4 , name: "Assignment 4" , mark: '60'},
        {id : 5 , name: "Assignment 5" , mark: '60'},
        {id : 6 , name: "Assignment 6" , mark: '58'},
        {id : 7 , name: "Assignment 7" , mark: '60'},
        {id : 8 , name: "Assignment 8" , mark: '60'},
    ];
    return (
        <div className='lg:container mx-auto my-5 text-center'>
            <h1 className='text-2xl font-bold'>Assignment Analytics</h1>
            <AreaChart className='my-5 mx-auto'
                width={1000}
                height={300}
                data={assignmentMark}
                syncId="anyId"
                margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="mark" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
        </div>
    );
};

export default Statistics;