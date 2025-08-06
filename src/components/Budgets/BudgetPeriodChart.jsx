import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

const data = [
  { name: 'Jan', rent: 5, food: 4, travel: 3 },
  { name: 'Feb', rent: 6, food: 5, travel: 4 },
  { name: 'Mar', rent: 5, food: 4, travel: 3 },
  { name: 'Apr', rent: 6, food: 5, travel: 4 },
  { name: 'May', rent: 3, food: 2, travel: 1 },
  { name: 'Jun', rent: 7, food: 5, travel: 3 },
  { name: 'Jul', rent: 5, food: 3, travel: 2 },
  { name: 'Aug', rent: 6, food: 5, travel: 3 },
  { name: 'Sep', rent: 8, food: 6, travel: 4 },
  { name: 'Oct', rent: 3, food: 2, travel: 1 },
];

const BudgetPeriodChart = () => {
  const isDark = localStorage.getItem('theme') === 'dark';

  return (
    <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg border dark:border-none">
      <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">
        Budget Period
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={25}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis dataKey="name" stroke="#8884d8" className="text-sm dark:text-white" />
          <YAxis stroke="#8884d8" className="text-sm dark:text-[#2f2cd8] "/>
          <Tooltip
            cursor={{ fill: 'transparent' }}
            contentStyle={{
              backgroundColor: isDark ? '#2f2cd8' : '#2f2cd8',
              border: 'none',
              borderRadius: '6px',
              color: isDark ? '#2f2cd8' : '#2f2cd8',
            }}
            labelStyle={{ color: '#ccc' }}
            itemStyle={{ color: '#eee' }}
          />
          <Bar dataKey="rent" stackId="a" fill={isDark ? '#4f46e5' : '#3f46e5'} />
          <Bar dataKey="food" stackId="a" fill={isDark ? '#4338ca' : '#5b4dff'} />
          <Bar dataKey="travel" stackId="a" fill={isDark ? '#3730a3' : '#7b6eff'} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetPeriodChart;
