import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const BalanceChart = ({ data = [], title = 'Balance Overtime' }) => {
  return (
    <div className="bg-white dark:bg-[#1a1a2e]  p-6 rounded-lg shadow-sm">
      <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">
        {title}
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4d6d" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ff4d6d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4d6d" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#ff4d6d" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="year" stroke="#94a3b8" className="text-sm dark:text-white" />
          <YAxis stroke="#94a3b8" className="text-sm dark:text-white" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              borderColor: '#e2e8f0',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#718096' }}
            itemStyle={{ color: '#4a5568' }}
            wrapperClassName="dark:bg-gray-800 dark:text-white"
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#ff4d6d"
            fillOpacity={1}
            fill="url(#colorLight)"
            className="dark:fill-[url(#colorDark)]"
            dot={{ stroke: '#ff4d6d', strokeWidth: 2, fill: '#fff' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;
