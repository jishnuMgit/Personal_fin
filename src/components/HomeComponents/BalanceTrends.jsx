import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '4 Jan', balance: 20 },
  { date: '5 Jan', balance: 70 },
  { date: '6 Jan', balance: 55 },
  { date: '7 Jan', balance: 110 },
  { date: '8 Jan', balance: 90 },
  { date: '9 Jan', balance: 150 },
  { date: '10 Jan', balance: 120 },
];

const BalanceTrends = () => {
  return (
    <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg  w-full  border shadow-sm  dark:border-none lg:h-[400px]">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-md font-semibold text-gray-700 dark:text-white">Balance Trends</h2>
          <p className="text-3xl font-bold text-blue-800 dark:text-white">$221,478</p>
        </div>
        <p className="text-green-600 dark:text-green-400 text-sm">↑ 12.25%<br /><span className="text-gray-500 dark:text-gray-300">Last Month</span></p>
      </div>

      <div className="lg:h-72 h-48 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="date" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Area type="monotone" dataKey="balance" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceTrends;
