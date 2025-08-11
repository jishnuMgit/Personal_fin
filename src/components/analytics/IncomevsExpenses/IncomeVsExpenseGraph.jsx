// IncomeVsExpenseGraph.jsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const IncomeVsExpenseGraph = () => {
  const data = [
    { month: "Jan", income: 5, expense: 4 },
    { month: "Feb", income: 6, expense: 5 },
    { month: "Mar", income: 4.5, expense: 3.8 },
    { month: "Apr", income: 5.5, expense: 4.7 },
    { month: "May", income: 3, expense: 2 },
    { month: "Jun", income: 6, expense: 5 },
    { month: "Jul", income: 4.5, expense: 3.6 },
    { month: "Aug", income: 6, expense: 5 },
    { month: "Sep", income: 7.5, expense: 6.8 },
    { month: "Oct", income: 3, expense: 2.2 },
  ];

  // theme colors to match your UI
  const INCOME_COLOR = "#2f2cd8"; // bright blue
  const EXPENSE_COLOR = "#201d54"; // deep blue

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="rounded-md border bg-white/90 px-3 py-2 text-xs shadow dark:bg-[#1d1933]/90 dark:text-white">
        <div className="font-semibold">{label}</div>
        <div>Income: {payload[0].value}</div>
        <div>Expense: {payload[1].value}</div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg border shadow-sm dark:border-none w-full">
      <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">
        Income vs Expense Graph
      </h2>

      <div className="w-full h-72">
        <ResponsiveContainer>
          <BarChart data={data} barSize={30}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="rgba(255,255,255,0.05)"
            />
            <XAxis
              dataKey="month"
              stroke="rgba(255,255,255,0.4)"
              tickLine={false}
            />
            <YAxis
              stroke="rgba(255,255,255,0.4)"
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.05)" }} />
            <Legend
              wrapperStyle={{ color: "white" }}
              iconType="circle"
              verticalAlign="top"
              height={36}
            />
            <Bar dataKey="income" fill={INCOME_COLOR} radius={[4, 4, 0, 0]} />
            <Bar dataKey="expense" fill={EXPENSE_COLOR} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeVsExpenseGraph;
