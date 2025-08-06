import {
  ShoppingCart,
 
  Calendar 
} from 'lucide-react';

const icons = {
  Calendar: Calendar,
  
};

const Historycop = () => {
  // Local static data (you can edit or add more)
  const transactions = [
    { category: 'Calendar', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', wallets: 'MASTERCARD' },
    { category: 'Calendar', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', wallets: 'MASTERCARD' },
    { category: 'Calendar', date: '13.12.2023', desc: 'Fuel', amount: '-60.00', wallets: 'MASTERCARD' },
    { category: 'Calendar', date: '14.12.2023', desc: 'Online Course', amount: '-100.00', wallets: 'MASTERCARD' },
    { category: 'Calendar', date: '15.12.2023', desc: 'Cinema', amount: '-12.00', wallets: 'MASTERCARD' },
  ];

  return (
   <div className="w-full">
  <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg border shadow-sm dark:border-none w-full">
    <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">
      Transaction History
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] text-sm text-left text-gray-500 dark:text-gray-300">
        <thead className="sticky top-0 bg-white dark:bg-[#1d1933] z-10">
          <tr className="border-b border-gray-600 text-xs">
            <th className="py-2">Date</th>
            <th className="py-2">Wallet</th>
            <th className="py-2">Description</th>
            <th className="py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, idx) => {
            const Icon = icons[tx.category] || ShoppingCart;
            return (
              <tr key={idx} className="border-b border-gray-700 dark:text-[#6e84ad]">
                {/* Date with Icon */}
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-8 h-8 flex items-center justify-center rounded-full"
                      aria-label={`${tx.category} icon`}
                    >
                      <Icon size={16} />
                    </span>
                    <span>{tx.date}</span>
                  </div>
                </td>

                {/* Wallet */}
                <td className="py-3">{tx.wallets}</td>

                {/* Description */}
                <td className="py-3">{tx.desc}</td>

                {/* Amount */}
                <td
                  className={`py-3 ${
                    tx.amount.toString().startsWith('-') ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  {parseFloat(tx.amount).toFixed(2)}$
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
};

export default Historycop;
