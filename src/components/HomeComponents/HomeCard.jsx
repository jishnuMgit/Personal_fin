import React from 'react'

const HomeCard = () => {
  return (
    <div className=''>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="p-6 bg-white lg:w-72 rounded-lg  border shadow-sm  dark:border-none dark:bg-[#1d1933]">
    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Total Balance</h3>
    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$432568</p>
        <hr />

    <p className="mt-2 text-sm text-green-600 dark:text-green-400">↑ 2.47% <span className="text-gray-500 dark:text-gray-400">Last month <strong>$24,478</strong></span></p>
  </div>

  <div className="p-6  lg:w-72 bg-white rounded-lg  border shadow-sm  dark:border-none dark:bg-[#1d1933]">
    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Total Period Change</h3>
    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$245860</p>
    <hr />

    <p className="mt-2 text-sm text-green-600 dark:text-green-400">↑ 2.47% <span className="text-gray-500 dark:text-gray-400">Last month <strong>$24,478</strong></span></p>
  </div>

  <div className="p-6 lg:w-72 bg-white rounded-lg  border shadow-sm  dark:border-none dark:bg-[#1d1933]">
    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Total Period Expenses</h3>
    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$25.35</p>
   <hr />

    <p className="mt-2 text-sm text-red-600 dark:text-red-400">↓ 2.47% <span className="text-gray-500 dark:text-gray-400">Last month <strong>$24,478</strong></span></p>
  </div>

  <div className="p-6 lg:w-72 bg-white rounded-lg  border shadow-sm  dark:border-none dark:bg-[#1d1933]">
    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Total Period Income</h3>
    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$22.56</p>
    <hr />

    <p className="mt-2 text-sm text-green-600 dark:text-green-400">↑ 2.47% <span className="text-gray-500 dark:text-gray-400">Last month <strong>$24,478</strong></span></p>
  </div>
</div>

    </div>
  )
}

export default HomeCard