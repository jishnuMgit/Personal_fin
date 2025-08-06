import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Wallet-specific data
const chartData = {
  city: {
    day: [
      { name: '1AM', value: 40 },
      { name: '2AM', value: 60 },
      { name: '3AM', value: 30 },
    ],
    week: [
      { name: 'Mon', value: 80 },
      { name: 'Tue', value: 100 },
      { name: 'Wed', value: 60 },
    ],
    month: [
      { name: 'Week 1', value: 150 },
      { name: 'Week 2', value: 180 },
      { name: 'Week 3', value: 120 },
    ],
    year: [
      { name: 'Jan', value: 400 },
      { name: 'Feb', value: 500 },
      { name: 'Mar', value: 300 },
    ],
  },
  debit: {
    day: [
      { name: '1AM', value: 30 },
      { name: '2AM', value: 50 },
      { name: '3AM', value: 20 },
    ],
    week: [
      { name: 'Mon', value: 60 },
      { name: 'Tue', value: 110 },
      { name: 'Wed', value: 90 },
    ],
    month: [
      { name: 'Week 1', value: 120 },
      { name: 'Week 2', value: 150 },
      { name: 'Week 3', value: 180 },
    ],
    year: [
      { name: 'Jan', value: 300 },
      { name: 'Feb', value: 450 },
      { name: 'Mar', value: 500 },
    ],
  },
  visa: {
    day: [
      { name: '1AM', value: 20 },
      { name: '2AM', value: 70 },
      { name: '3AM', value: 40 },
    ],
    week: [
      { name: 'Mon', value: 90 },
      { name: 'Tue', value: 60 },
      { name: 'Wed', value: 110 },
    ],
    month: [
      { name: 'Week 1', value: 180 },
      { name: 'Week 2', value: 200 },
      { name: 'Week 3', value: 140 },
    ],
    year: [
      { name: 'Jan', value: 450 },
      { name: 'Feb', value: 350 },
      { name: 'Mar', value: 520 },
    ],
  },
  cash: {
    day: [
      { name: '1AM', value: 10 },
      { name: '2AM', value: 30 },
      { name: '3AM', value: 20 },
    ],
    week: [
      { name: 'Mon', value: 50 },
      { name: 'Tue', value: 40 },
      { name: 'Wed', value: 70 },
    ],
    month: [
      { name: 'Week 1', value: 110 },
      { name: 'Week 2', value: 90 },
      { name: 'Week 3', value: 100 },
    ],
    year: [
      { name: 'Jan', value: 250 },
      { name: 'Feb', value: 300 },
      { name: 'Mar', value: 400 },
    ],
  },
};

const ChartPanel = ({ selectedWallet }) => {
  const [range, setRange] = useState('day');
  const data = chartData[selectedWallet]?.[range] || [];

  return (
    <div className="flex flex-col items-center w-full gap-6">
      {/* Spend/Budget Card */}
      <div className="dark:bg-[#1a1a2e] bg-white border border-gray-200 dark:border-none text-black dark:text-white rounded-lg p-6 w-full md:w-3/3 shadow-sm h-[150px]">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Spend</p>
            <p className="text-2xl font-bold">$1458.30</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Budget</p>
            <p className="text-2xl font-bold">$1458.30</p>
          </div>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2">
          <div className="h-2 bg-blue-600 rounded-full w-[55%] transition-all duration-500"></div>
        </div>
      </div>

      {/* Chart Card with Time Range Buttons */}
      <div className="dark:bg-[#1a1a2e] bg-white border border-gray-200 dark:border-none text-black dark:text-white rounded-lg p-6 w-full md:w-3/3 shadow-sm space-y-6">
        {/* Buttons */}
        <div className="flex md:gap-3 gap-2 " >
          {['day', 'week', 'month', 'year'].map((key) => (
            <button
              key={key}
              onClick={() => setRange(key)}
              className={`md:px-4 px-2 py-1 text-sm rounded-full border transition-all ${
                range === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-[#2a2b3c] text-gray-700 dark:text-white border-gray-300'
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {/* Recharts Chart */}
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4f46e5"
              fill="#c7d2fe"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartPanel;
