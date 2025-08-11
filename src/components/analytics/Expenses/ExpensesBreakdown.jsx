
import  { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const ExpensesBreakdown = ({title}) => {
  // Edit this data as needed
  const data = [
    { name: "Food", value: 1200 },
    { name: "Transport", value: 1200 },
    { name: "Healthcare", value: 1200 },
    { name: "Education", value: 1200 },
    { name: "Clothes", value: 1200 },
    { name: "Pets", value: 1200 },
    { name: "Entertainment", value: 1200 },
  ];

  const COLORS = [
    "#3B82F6", // blue-500
    "#2563EB", // blue-600
    "#1D4ED8", // blue-700
    "#60A5FA", // blue-400
    "#93C5FD", // blue-300
    "#1E3A8A", // blue-900
    "#0EA5E9", // sky-500 (a subtle accent)
  ];

  const total = useMemo(
    () => data.reduce((sum, d) => sum + d.value, 0),
    [data]
  );

  const formatCurrency = (v) =>
    v.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const { name, value } = payload[0].payload;
    const pct = ((value / total) * 100).toFixed(0);
    return (
      <div className="rounded-md border bg-white/90 px-3 py-2 text-xs shadow dark:bg-[#1d1933]/90 dark:text-white">
        <div className="font-semibold">{name}</div>
        <div>{formatCurrency(value)} · {pct}%</div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg border shadow-sm dark:border-none w-full">
      <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">
       {title}
      </h2>

      {/* Donut Chart */}
      <div className="w-full h-56">
        <ResponsiveContainer>
          <PieChart>
            <defs>
              {/* subtle glow ring */}
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodOpacity="0.2" />
              </filter>
            </defs>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={68}
              outerRadius={96}
              paddingAngle={2}
              strokeWidth={2}
              stroke="rgba(255,255,255,0.06)"
              filter="url(#shadow)"
            >
              {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* List */}
      <div className="mt-6 space-y-3">
        {data.map((d, i) => {
          const pct = Math.round((d.value / total) * 100);
          return (
            <div
              key={d.name}
              className="flex items-center justify-between text-sm border-b border-gray-200/20 pb-2 last:border-b-0 dark:text-gray-300"
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                  aria-hidden
                />
                <span className="text-gray-700 dark:text-gray-200">{d.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="tabular-nums text-gray-700 dark:text-gray-200">
                  {formatCurrency(d.value)}
                </span>
                <span className="text-gray-500 dark:text-gray-400">{pct}%</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Total: <span className="tabular-nums">{formatCurrency(total)}</span>
      </div>
    </div>
  );
};

export default ExpensesBreakdown;
