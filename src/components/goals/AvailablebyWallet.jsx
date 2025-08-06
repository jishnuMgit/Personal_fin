
import { Banknote, BanknoteX, Book, BusFront, Carrot, CreditCard, PawPrint, PiggyBank, Shirt } from "lucide-react";

const budgets = [
  { label: 'City Bank', value: 75, color: 'bg-green-500', icon:  <PiggyBank /> },
  { label: 'Cash Wallet', value: 25, color: 'bg-cyan-400', icon: <Banknote />},
  { label: 'Card', value: 50, color: 'bg-sky-400', icon:<CreditCard /> },

];

const AvailablebyWallet = () => {
  return (
    <div>
  <div className="bg-white dark:bg-[#1d1933] p-5 rounded-lg border shadow-sm h-[300px] dark:border-none w-full max-w-full">
    <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">
      Available by Wallet
    </h2>
    <ul className="space-y-[30px]">
      {budgets.map((item, idx) => (
        <li key={idx}>
          <div className="flex items-center justify-between text-sm mb-1">
            <div className="flex items-center gap-5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}
              >
                <span className="text-xl">{item.icon}</span>
              </div>
              <span className="text-gray-800 dark:text-gray-200">
                {item.label}
              </span>
            </div>
            <span className="text-gray-600 dark:text-gray-400">
              {item.value} $
            </span>
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
</div>

  )
}

export default AvailablebyWallet