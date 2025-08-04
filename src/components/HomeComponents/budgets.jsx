import { Book, BusFront, Carrot, PawPrint, Shirt } from "lucide-react";

const budgets = [
  { label: 'Grocery Stores', value: 75, color: 'bg-green-500', icon: <Carrot /> },
  { label: 'Transportation', value: 25, color: 'bg-cyan-400', icon: <BusFront />},
  { label: 'Pets', value: 50, color: 'bg-sky-400', icon: <PawPrint /> },
  { label: 'Education', value: 45, color: 'bg-indigo-400', icon: <Book /> },
  { label: 'Clothes', value: 35, color: 'bg-purple-400', icon: <Shirt /> },
];

const MonthlyBudgets = () => {
  return (
    <div className="bg-white  dark:bg-[#1d1933] p-5 rounded-lg  border shadow-sm  dark:border-none w-full">
      <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">Monthly Budgets</h2>
      <ul className="space-y-[13px]">
        {budgets.map((item, idx) => (
          <li key={idx}>
            <div className="flex items-center justify-between text-sm mb-1">
              <div className="flex items-center gap-2">
<div className={`w-10 rounded-full h-10 flex items-center justify-center ${item.color}`}>
                    <span className="text-xl">{item.icon}</span>

</div>
                <span className="text-gray-800 dark:text-gray-200">{item.label}</span>
              </div>
              <span className="text-gray-600 dark:text-gray-400">{item.value} / 100</span>
            </div>
            <div className="w-full h-2 rounded bg-gray-200 dark:bg-gray-700">
              <div
                className={`${item.color} h-2 rounded`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthlyBudgets;
