








import React, { useState } from 'react';
import BudgetPeriodChart from '../Budgets/BudgetPeriodChart';

const CommonDashboard = ({
  budgets = [],
  spendInfo = {},
  stats = {},
}) => {
  const [selected, setSelected] = useState(budgets[0]?.category || '');
  const activeBudget = budgets.find((b) => b.category === selected);

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:px-20 md:pl-10  text-gray-700 dark:text-white">
  {/* Sidebar */}
  <div className="space-y-4 w-full lg:w-80">
    {budgets.map((budget, index) => (
      <div
        key={index}
        onClick={() => setSelected(budget.category)}
        className={`flex items-center h-24 justify-between px-4 py-4 rounded-lg cursor-pointer border shadow-sm transition-all duration-200 ${
          selected === budget.category
            ? 'bg-[#2f2cd8] text-white border-[#2f2cd8]'
            : 'bg-white dark:bg-[#1d1933] border-gray-300 dark:border-gray-700 hover:bg-[#f0f0ff] dark:hover:bg-[#2f2cd8]/20'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white dark:bg-[#2e2b48] flex items-center justify-center text-lg">
            {budget.icon}
          </div>
          <div>
            <p className="font-semibold text-sm">{budget.category}</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">{budget.amount}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-300">{budget.duration}</p>
      </div>
    ))}

    <div className="bg-white dark:bg-[#1d1933] text-sm font-semibold px-4 py-3 rounded-lg flex items-center justify-between cursor-pointer border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#2a2646]">
      Add new budget <span className="text-xl">➕</span>
    </div>
  </div>

  {/* Main Panel */}
  <div className="flex-1 space-y-6">
    {/* Header */}
    <div className="bg-white dark:bg-[#1d1933] border border-gray-300 dark:border-gray-700 rounded-lg px-6 py-4 text-lg font-semibold">
      {activeBudget?.category || 'Select Category'}
    </div>

    {/* Spend and Budget Block */}
    <div className="grid md:grid-cols-1 gap-6">
      <div className="bg-white dark:bg-[#1d1933] border border-gray-300 dark:border-gray-700 rounded-lg p-6">
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300">
          <p>Spend</p>
          <p>Budget</p>
        </div>
        <div className="flex justify-between items-center mt-2 text-2xl font-semibold">
          <p>{spendInfo.spend}</p>
          <p>{spendInfo.budget}</p>
        </div>
        <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 mt-4 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#4f46e5]"
            style={{ width: spendInfo.progress || '0%' }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-300 mt-2">{spendInfo.progress}</div>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-wrap justify-between gap-4 bg-white dark:bg-[#1d1933] border border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
        <div className="flex-1 min-w-[120px]">
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">Last Month</p>
          <p className="text-2xl font-bold">{stats.lastMonth}</p>
        </div>
        <div className="flex-1 min-w-[120px]">
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">Expenses</p>
          <p className="text-2xl font-bold">{stats.expenses}</p>
        </div>
        <div className="flex-1 min-w-[120px]">
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">Taxes</p>
          <p className="text-2xl font-bold">{stats.taxes}</p>
        </div>
        <div className="flex-1 min-w-[120px]">
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">Debt</p>
          <p className="text-2xl font-bold">{stats.debt}</p>
        </div>
      </div>
    </div>
    <div>
      <BudgetPeriodChart/>
    </div>
  </div>
</div>

  );
};

export default CommonDashboard;

