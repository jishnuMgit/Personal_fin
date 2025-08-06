import {
  ShoppingCart,
  Receipt,
  Car,
  GraduationCap,
  Clapperboard,
} from 'lucide-react';

const icons = {
  Beauty: ShoppingCart,
  'Bills & Fees': Receipt,
  Car: Car,
  Education: GraduationCap,
  Entertainment: Clapperboard,
};

const TransactionHistory = () => {
  // Local static data (you can edit or add more)
  const transactions = [
    { category: 'Beauty', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', currency: 'USD' },
    { category: 'Bills & Fees', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', currency: 'USD' },
    { category: 'Car', date: '13.12.2023', desc: 'Fuel', amount: '-60.00', currency: 'USD' },
    { category: 'Education', date: '14.12.2023', desc: 'Online Course', amount: '-100.00', currency: 'USD' },
    { category: 'Entertainment', date: '15.12.2023', desc: 'Cinema', amount: '-12.00', currency: 'USD' },
  ];

  return (
    <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg border shadow-sm dark:border-none w-full">
      <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">
        Transaction History
      </h2>

      <div className="overflow-x-auto">
        {/* Table Header */}
       <table className="w-full min-w-[600px] text-sm text-left text-gray-500 dark:text-gray-300">
  <thead className="sticky top-0 bg-white dark:bg-[#1d1933] z-10">
    <tr className="border-b border-gray-600 text-xs">
      <th className="py-2">Category</th>
      <th className="py-2">Date</th>
      <th className="py-2">Description</th>
      <th className="py-2">Amount</th>
      <th className="py-2">Currency</th>
    </tr>
  </thead>
  <tbody>
    {transactions.map((tx, idx) => {
      const Icon = icons[tx.category] || ShoppingCart;
      return (
        <tr key={idx} className="border-b border-gray-700">
          <td className="py-3">
            <div className="flex items-center gap-2">
              <span
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white"
                aria-label={`${tx.category} icon`}
              >
                <Icon size={16} />
              </span>
              <span>{tx.category}</span>
            </div>
          </td>
          <td className="py-3">{tx.date}</td>
          <td className="py-3">{tx.desc}</td>
          <td
            className={`py-3 ${
              tx.amount.toString().startsWith('-') ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {parseFloat(tx.amount).toFixed(2)}
          </td>
          <td className="py-3">{tx.currency}</td>
        </tr>
      );
    })}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default TransactionHistory;
