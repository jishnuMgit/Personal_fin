const expenses = [
  { label: "Food", color: "bg-orange-500", amount: "$1200", percent: "38%" },
  { label: "Transport", color: "bg-yellow-500", amount: "$1200", percent: "38%" },
  { label: "Healthcare", color: "bg-yellow-400", amount: "$1200", percent: "38%" },
  { label: "Education", color: "bg-green-400", amount: "$1200", percent: "38%" },
  { label: "Clothes", color: "bg-green-600", amount: "$1200", percent: "38%" },
  { label: "Pets", color: "bg-cyan-400", amount: "$1200", percent: "38%" },
  { label: "Entertainment", color: "bg-gray-700", amount: "$1200", percent: "38%" },
];

const ExpenseBreakdown = () => {
  return (
    <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg  border shadow-sm  dark:border-none w-full">
      <h2 className="text-md font-semibold text-gray-700 dark:text-white mb-4">Monthly Expenses Breakdown</h2>

      {/* 🌈 Smooth Gradient Bar */}
      <div className="h-2 rounded mb-4 bg-gradient-to-r from-orange-500   via-cyan-400 to-gray-700" />

      {/* 💰 Expense List */}
      <ul className="space-y-6">
        {expenses.map((exp, idx) => (
          <li key={idx} className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-200">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${exp.color}`}></span>
              {exp.label}
            </div>
            <div className="font-semibold">
              {exp.amount}{' '}
              <span className="text-sm font-normal text-gray-400">{exp.percent}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseBreakdown;
