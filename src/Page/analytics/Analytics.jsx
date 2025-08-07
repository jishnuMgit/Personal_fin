import { ReceiptText, Replace, Smartphone, Sparkles  } from "lucide-react"
import WeeklyExpensesChart from "../../components/HomeComponents/WeeklyExpensesChart"

const Analytics = () => {
  return (
    <div className="flex flex-col space-y-10">

        <div className=' '>


        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-4 gap-4">
          
  <div className="p-6 bg-white lg:w-72 rounded-lg flex items-center gap-8  border shadow-sm  dark:border-gray-600    dark:bg-[#1d1933]">
    <div className="w-14 h-14 rounded-full flex justify-center items-center bg-blue-600">
          <Smartphone className="text-white" />
    </div>
<div>
        <h3 className="text-sm font-semibold text-gray-600 dark:text-[#aca7d5] ">Daily Average</h3>
    <p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">$432568</p>
</div>
   </div>

  <div className="p-6  lg:w-72 bg-white rounded-lg flex items-center gap-8  border shadow-sm  dark:border-gray-600  dark:bg-[#1d1933]">
     <div className="w-14 h-14 rounded-full flex justify-center items-center bg-green-600">
          <Replace  className="text-white" />
    </div>
<div>
        <h3 className="text-sm font-semibold text-gray-600 dark:text-[#aca7d5]">Change</h3>
    <p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">+45.68%</p>
</div>
  </div>

  <div className="p-6 lg:w-72 bg-white rounded-lg flex items-center gap-8  border shadow-sm  dark:border-gray-600  dark:bg-[#1d1933]">
    <div className="w-14 h-14 rounded-full flex justify-center items-center bg-orange-500">
          <ReceiptText className="text-white" />
    </div>
<div>
        <h3 className="text-sm font-semibold text-gray-600 dark:text-[#aca7d5]">Total Transaction</h3>
    <p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">568</p>
</div>
  </div>

  <div className="p-6 lg:w-72 bg-white rounded-lg  flex items-center gap-8 border shadow-sm  dark:border-gray-600  dark:bg-[#1d1933]">
      <div className="w-14 h-14 rounded-full flex justify-center items-center bg-red-600">
          <Sparkles className="text-white" />
    </div>
<div>
        <h3 className="text-sm font-semibold text-gray-600 dark:text-[#aca7d5]">Categories</h3>
    <p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">32</p>
</div>
  </div>
</div>

    </div>

    <div>
        <WeeklyExpensesChart/>

    </div>
    </div>
  )
}

export default Analytics