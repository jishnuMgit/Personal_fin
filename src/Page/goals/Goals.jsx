import { ChevronRight } from 'lucide-react'
import React from 'react'
import CommonDashboard from '../../components/common/CommonDashboard'
import GoalsComp from '../../components/goals/GoalsComp'
import TransactionHistory from '../../components/common/TransactionHistory'

const Goals = () => {

  return (
    <div>
 <div className="sm:ml-16 flex flex-col space-y-10 p-4 pt-[120px] lg:ml-10 bg-white dark:bg-[#131129] min-h-screen">


     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between md:pl-20 lg:mr-20">
            <div>
              <h1 className="text-2xl font-bold"> Goals</h1>
              <p className="text-sm text-gray-500 dark:text-gray-300">Welcome Ekash Finance Management</p>
            </div>

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-300 mt-2 lg:mt-0">
              <p className="hover:underline cursor-pointer">Home</p>
              <ChevronRight className="mx-2 h-4 w-4" />
              <p className="font-medium text-blue-600 dark:text-blue-400"> Goals</p>
            </div>
          </div>
       
<div>
   <GoalsComp
  budgets={[
    { category: 'Grocery', amount: '$1458.30', percentage: 25, duration: 'Overtime' },
    { category: 'Cloths', amount: '$1458.30', percentage: 40, duration: 'Week' },
    { category: 'Transportation', amount: '$1458.30', percentage: 60, duration: 'Month' },
    { category: 'Education', amount: '$1458.30', percentage: 80, duration: 'Day' },
  ]}
  spendInfo={{
    spend: '$1458.30',
    budget: '$1458.30',
    progress: '25%',
  }}
  stats={{
    lastMonth: '$42,678',
    expenses: '$1,798',
    taxes: '$255.25',
    debt: '$365,478',
  }}
/>

</div>

       
      </div>

    </div>
  )
}

export default Goals