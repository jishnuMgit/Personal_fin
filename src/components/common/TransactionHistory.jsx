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

const TransactionHistory = ({ transactions = [], title = "Transaction History" }) => {
  return (
    <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg lg:h-[400px] border shadow-sm dark:border-none w-full">
      <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">{title}</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-300">
          <thead>
            <tr className="border-b border-gray-600 text-xs">
              <th className="py-2">Category</th>
              <th className="py-2">Date</th>
              <th className="py-2">Description</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Currency</th>
            </tr>
          </thead>
        </table>

        {/* Scrollable Body */}
        <div className="scrollable-container">
          <div className="scrollable-body">
            <table className="min-w-[600px] w-full text-sm text-left text-gray-500 dark:text-gray-300">
              <tbody>
                {transactions.map((tx, idx) => {
                  const Icon = icons[tx.category] || ShoppingCart;
                  return (
                    <tr key={idx} className="border-b border-gray-700">
                      <td className="py-3 flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white">
                          <Icon size={16} />
                        </span>
                        {tx.category}
                      </td>
                      <td>{tx.date}</td>
                      <td>{tx.desc}</td>
                      <td>{tx.amount}</td>
                      <td>{tx.currency}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
