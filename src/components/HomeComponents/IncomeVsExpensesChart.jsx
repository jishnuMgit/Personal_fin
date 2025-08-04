import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', income: 5, expense: 4 },
  { month: 'Feb', income: 6, expense: 5 },
  { month: 'Mar', income: 4.5, expense: 3.5 },
  { month: 'Apr', income: 5.5, expense: 4.5 },
  { month: 'May', income: 3, expense: 2 },
  { month: 'Jun', income: 6, expense: 5 },
  { month: 'Jul', income: 4.5, expense: 3.5 },
  { month: 'Aug', income: 5.8, expense: 4.7 },
  { month: 'Sep', income: 7.5, expense: 6.5 },
  { month: 'Oct', income: 3.1, expense: 2.3 },
];

const IncomeVsExpensesChart = () => {
  return (
    <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg  border shadow-sm  dark:border-none w-full lg:h-[400px]">
      <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">Monthly Income vs Expenses</h2>
      <div className="lg:h-72 h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip
  contentStyle={{
    backgroundColor: '#fff', // dark background to match your theme
    border: 'none',
    color: '#fff',
    borderRadius: '6px',
    fontSize: '12px',
  }}
  cursor={{ fill: 'rgba(255,255,255,0.05)' }} // optional: subtle bar hover
/>

            <Bar dataKey="income" fill="#2f2cd8" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expense" fill="#201d54" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeVsExpensesChart;
