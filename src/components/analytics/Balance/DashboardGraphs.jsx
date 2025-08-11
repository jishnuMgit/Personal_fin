// DashboardGraphs.jsx
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

/* ---------- Theme ---------- */
const BG_DARK = "#1d1933";
const AXIS = "rgba(255,255,255,0.45)";
const GRID = "rgba(255,255,255,0.06)";
const CURSOR = "rgba(255,255,255,0.04)";
const LINE = "#fb7185";   // rose-400
const FILL = "rgba(251, 113, 133, 0.18)";
const BAR = "#60A5FA";    // blue-400

/* ---------- Sample data ---------- */
const totalBalanceData = [
  { year: "2010", value: 28 },
  { year: "2011", value: 35 },
  { year: "2012", value: 36 },
  { year: "2013", value: 48 },
  { year: "2014", value: 46 },
  { year: "2015", value: 41 },
  { year: "2016", value: 60 },
];

const walletBars = [
  { name: "W1", v: 18 }, { name: "W2", v: 24 }, { name: "W3", v: 20 },
  { name: "W4", v: 12 }, { name: "W5", v: 26 }, { name: "W6", v: 17 },
  { name: "W7", v: 28 }, { name: "W8", v: 14 }, { name: "W9", v: 33 },
  { name: "W10", v: 10 }, { name: "W11", v: 22 }, { name: "W12", v: 35 },
  { name: "W13", v: 13 }, { name: "W14", v: 19 }, { name: "W15", v: 16 },
  { name: "W16", v: 25 }, { name: "W17", v: 31 }, { name: "W18", v: 15 },
  { name: "W19", v: 21 }, { name: "W20", v: 23 },
];

/* ---------- Shared tooltip ---------- */
const CardTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border bg-white/90 px-3 py-2 text-xs shadow dark:bg-[#1d1933]/90 dark:text-white">
      {label && <div className="font-semibold mb-0.5">{label}</div>}
      {payload.map((p) => (
        <div key={p.dataKey}>{p.name || p.dataKey}: {p.value}</div>
      ))}
    </div>
  );
};

export default function DashboardGraphs() {
  return (
    <div className="space-y-6">
      {/* Total Balance */}
      <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg border shadow-sm dark:border-none">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
          Total Balance
        </h3>
        <div className="h-64">
          <ResponsiveContainer>
            <AreaChart data={totalBalanceData} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={GRID} />
              <XAxis dataKey="year" stroke={AXIS} tickLine={false} axisLine={false} />
              <YAxis stroke={AXIS} tickLine={false} axisLine={false} />
              <Tooltip content={<CardTooltip />} cursor={{ fill: CURSOR }} />
              <Area
                type="monotone"
                dataKey="value"
                name="Balance"
                stroke={LINE}
                fill={FILL}
                strokeWidth={3}
                dot={{ r: 4, stroke: BG_DARK, strokeWidth: 2, fill: LINE }}
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Balance by Wallet */}
      <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg border shadow-sm dark:border-none">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
          Balance by Wallet
        </h3>
        <div className="h-80">
          <ResponsiveContainer>
            <BarChart data={walletBars} barSize={14} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={GRID} />
              <XAxis dataKey="name" stroke={AXIS} tickLine={false} axisLine={false} interval={0} />
              <YAxis stroke={AXIS} tickLine={false} axisLine={false} />
              <Tooltip content={<CardTooltip />} cursor={{ fill: CURSOR }} />
              <Bar dataKey="v" name="Balance" fill={BAR} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
