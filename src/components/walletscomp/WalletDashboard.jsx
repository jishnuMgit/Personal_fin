import React, { useState } from 'react';

const WalletDashboard = () => {
  const [selectedWallet, setSelectedWallet] = useState('City Bank');

  const wallets = [
    { name: 'City Bank', amount: '$221,478', icon: '🏦' },
    { name: 'Debit Card', amount: '$221,478', icon: '💳' },
    { name: 'Visa Card', amount: '$221,478', icon: '💳' },
    { name: 'Cash', amount: '$221,478', icon: '💰' },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6 text-black dark:text-white">
        {/* Sidebar Wallet List */}
        <div className="space-y-4 w-full lg:w-80">
          {wallets.map((wallet, index) => (
            <div
              key={index}
              onClick={() => setSelectedWallet(wallet.name)}
              className={`flex items-center justify-between px-4 h-[90px] py-4 rounded-lg cursor-pointer    border shadow-sm  dark:border-none
                ${
                  selectedWallet === wallet.name
                    ? 'bg-[#2f2cd8] text-white border-[#2f2cd8]'
                    : 'bg-white dark:bg-[#1D1A33] border-gray-300 dark:border-gray-600 hover:bg-[#f0f0ff] dark:hover:bg-[#2f2cd8]'
                }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl text-[#4F46E5] border shadow-sm  dark:border-none">
                  {wallet.icon}
                </div>
                <div>
                  <p className={`font-semibold text-sm ${selectedWallet === wallet.name ? 'text-white' : 'text-black dark:text-gray-300'}`}>
                    {wallet.name}
                  </p>
                  <p className={`text-xs ${selectedWallet === wallet.name ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                    {wallet.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white dark:bg-[#1D1A33] text-sm font-semibold px-4 py-3 rounded-lg flex items-center justify-between cursor-pointer border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-[#2a2646] ">
            Add new wallet <span className="text-xl">➕</span>
          </div>
        </div>

        {/* Main Panel */}
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div className="bg-white dark:bg-[#1D1A33] border shadow-sm  dark:border-none rounded-lg px-6 py-4 text-lg font-semibold">
            {selectedWallet}
          </div>

          {/* Balance + Card Block */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Total Balance Card */}
            <div className="bg-white dark:bg-[#1D1A33] border shadow-sm  dark:border-none rounded-lg p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Balance</p>
              <p className="text-3xl font-bold mt-1 text-black dark:text-white">$221,478</p>

              <div className="mt-4 border-t border-gray-300 dark:border-gray-600 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Personal Funds</span>
                  <span className="text-black dark:text-white font-semibold">$32,500.28</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Credit Limits</span>
                  <span className="text-black dark:text-white font-semibold">$2500.00</span>
                </div>
              </div>
            </div>

            {/* Debit Card Block – DO NOT MODIFY */}
            <div className="bg-[#18143A] rounded-lg p-6 relative">
              <div className="flex justify-between items-start">
                <p className="text-sm text-gray-400">{selectedWallet}</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="Visa"
                  className="h-6"
                />
              </div>

              <div className="mt-8 text-2xl tracking-widest font-bold text-white">
                1234 &nbsp; 5678 &nbsp; 7890 &nbsp; 9875
              </div>

              <div className="mt-6 flex justify-between text-sm text-white font-medium">
                <span>Saiful Islam</span>
                <span className="text-gray-300">
                  EXP: <strong>12/21</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Total & Expenses Stats */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#1D1A33] border shadow-sm  dark:border-none rounded-lg p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Balance</p>
              <p className="text-3xl font-bold mt-2 text-black dark:text-white">$432,568</p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                ↑ 2.47%{' '}
                <span className="text-gray-500 dark:text-gray-400">
                  Last month <strong>$24,478</strong>
                </span>
              </p>
            </div>

            <div className="bg-white dark:bg-[#1D1A33] rounded-lg border shadow-sm  dark:border-none p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Expenses</p>
              <p className="text-3xl font-bold mt-2 text-black dark:text-white">$432,568</p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                ↑ 2.47%{' '}
                <span className="text-gray-500 dark:text-gray-400">
                  Last month <strong>$24,478</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
