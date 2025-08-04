import { ChevronRight } from 'lucide-react';
import HomeCard from '../../components/HomeComponents/HomeCard';
import Nav from '../../components/nav/Nav';
import BalanceTrends from '../../components/HomeComponents/BalanceTrends';
import ExpenseBreakdown from '../../components/HomeComponents/ExpenseBreakdown';
import MonthlyBudgets from '../../components/HomeComponents/budgets';
import IncomeVsExpensesChart from '../../components/HomeComponents/IncomeVsExpensesChart';
import SavingGoals from '../../components/HomeComponents/SavingGoals';
import TransactionHistory from '../../components/common/TransactionHistory';
import ExpensesAndPayments from '../../components/HomeComponents/ExpensesAndPayments';

const Home = () => {
  const sampleData = [
  { category: 'Beauty', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', currency: 'USD' },
  { category: 'Bills & Fees', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', currency: 'USD' },
    { category: 'Beauty', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', currency: 'USD' },
  { category: 'Bills & Fees', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', currency: 'USD' },
  // ... more data
];
  return (
    <>
      <div className="sm:ml-16 p-4 pt-[120px] lg:ml-10 bg-white dark:bg-[#131129] min-h-screen">
       

        <div className="flex flex-col text-black dark:text-white space-y-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-sm text-gray-500 dark:text-gray-300">Welcome Ekash Finance Management</p>
            </div>

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-300 mt-2 lg:mt-0">
              <p className="hover:underline cursor-pointer">Home</p>
              <ChevronRight className="mx-2 h-4 w-4" />
              <p className="font-medium text-blue-600 dark:text-blue-400">Dashboard</p>
            </div>
          </div>

          {/* Top Cards */}
          <HomeCard />

          {/* Balance Trends + Expenses Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <BalanceTrends />
            </div>
            <ExpenseBreakdown />
          </div>

          {/* Budgets + Income vs Expense */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MonthlyBudgets />

            <div className='lg:col-span-2'>
            <IncomeVsExpensesChart />


            </div>
          </div>
          <div>
            <ExpensesAndPayments/>
          </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div>
    <SavingGoals />
  </div>
  <div className="lg:col-span-2 mb-16">
      <TransactionHistory transactions={sampleData} title="Recent Expenses" />
  </div>
</div>


        </div>
      </div>
    </>
  );
};

export default Home;
