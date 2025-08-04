import { ChevronRight } from 'lucide-react';
import WalletDashboard from '../../components/walletscomp/WalletDashboard';
import BalanceChart from '../../components/common/BalanceChart';
import TransactionHistory from '../../components/common/TransactionHistory';

const Wallets = () => {

  const sampleData = [
  { year: '2010', value: 15 },
  { year: '2011', value: 35 },
  { year: '2012', value: 34 },
  { year: '2013', value: 60 },
  { year: '2014', value: 20 },
  { year: '2015', value: 39 },
  { year: '2016', value: 60 },
];

  const sampleData1 = [
  { category: 'Beauty', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', currency: 'USD' },
  { category: 'Bills & Fees', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', currency: 'USD' },
    { category: 'Beauty', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', currency: 'USD' },
  { category: 'Bills & Fees', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', currency: 'USD' },
];

  return (
    <div className='pb-10'>
      <div className="sm:ml-16 pt-[120px] p-4 lg:ml-10  bg-[#f6f9fc] dark:bg-[#131129] min-h-screen">
        <div className="flex flex-col text-black dark:text-white space-y-10 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-10">
            {/* Header */}
            <div>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Wallets</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Welcome Ekash Finance Management
                  </p>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-300 mt-2 lg:mt-0">
                  <p className="hover:underline cursor-pointer">Home</p>
                  <ChevronRight className="mx-2 h-4 w-4" />
                  <p className="font-medium text-blue-600 dark:text-blue-400">Wallets</p>
                </div>
              </div>
            </div>

            {/* Main Wallet Content */}
            <div>
              <WalletDashboard />
            </div>

            <div className='lg:w-full flex justify-end '>

              <div className='lg:w-3/4 w-full'>
                  <BalanceChart data={sampleData}  title="Balance Overtime" />

              </div>


                  

            </div>
            <div className='lg:w-full flex justify-end'>
              <div className='lg:w-3/4  w-full'>
              <TransactionHistory transactions={sampleData1} title="Transaction History"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
