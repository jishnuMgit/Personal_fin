import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', food: 10, transport: 15, shopping: 20 },
  { month: 'Feb', food: 12, transport: 10, shopping: 28 },
  { month: 'Mar', food: 18, transport: 22, shopping: 33 },
  { month: 'Apr', food: 15, transport: 20, shopping: 30 },
  { month: 'May', food: 18, transport: 20, shopping: 35 },
  { month: 'Jun', food: 10, transport: 15, shopping: 20 },
  { month: 'Jul', food: 12, transport: 16, shopping: 17 },
  { month: 'Aug', food: 14, transport: 19, shopping: 29 },
  { month: 'Sep', food: 15, transport: 20, shopping: 28 },
  { month: 'Oct', food: 12, transport: 15, shopping: 20 },
  { month: 'Nov', food: 20, transport: 25, shopping: 24 },
  { month: 'Dec', food: 18, transport: 22, shopping: 26 },
];

const WeeklyExpensesChart = () => (
  <div className="bg-white dark:bg-[#1d1933] lg:h-[400px] p-6 rounded-lg  border shadow-sm  dark:border-none w-full">
    <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">Weekly Expenses</h2>
    <div className="h-64 lg:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barSize={20}
          stackOffset="none"
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
        >
          <XAxis
            dataKey="month"
            stroke="#999"
            tickLine={false}
            axisLine={{ stroke: '#444' }}
          />
          <YAxis
            stroke="#999"
            tickLine={false}
            axisLine={{ stroke: '#444' }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1d1933', border: 'none', color: '#fff' }}
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
          />
          <Bar dataKey="food" stackId="a" fill="#ec38bc" radius={[4, 4, 0, 0]} />
          <Bar dataKey="transport" stackId="a" fill="#7303c0" radius={[4, 4, 0, 0]} />
          <Bar dataKey="shopping" stackId="a" fill="#30cfd0" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default WeeklyExpensesChart;
