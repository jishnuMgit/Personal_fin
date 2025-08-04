const payments = [
  { title: 'Internet', date: '5 January 2024', amount: '+450.00', status: 'Due', color: 'bg-yellow-500' },
  { title: 'Apple Music', date: '5 January 2024', amount: '+450.00', status: 'Cancel', color: 'bg-red-600' },
  { title: 'Groceries', date: '5 January 2024', amount: '+450.00', status: 'Paid', color: 'bg-green-600' },
  { title: 'Netflix', date: '5 January 2024', amount: '+450.00', status: 'Paid', color: 'bg-green-600' },
  { title: 'Gym', date: '5 January 2024', amount: '+450.00', status: 'Due', color: 'bg-yellow-500' },
  { title: 'Phone Bill', date: '5 January 2024', amount: '+450.00', status: 'Cancel', color: 'bg-red-600' },
];

const PaymentsHistory = () => {
  return (
    <div className="bg-white dark:bg-[#1d1933] p-4 rounded-lg  border shadow-sm  dark:border-none w-full h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold text-gray-800 dark:text-white">Payments History</h2>
        <a href="#" className="text-sm text-indigo-400 hover:underline">See more</a>
      </div>

      {payments.map((item, idx) => (
        <div key={idx} className="border-b border-gray-700 py-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="  text-lg font-bold dark:text-white text-black">{item.title}</p>
              <p className="text-xs text-gray-400">{item.date}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-white">{item.amount}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full text-white ${item.color}`}>
                {item.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentsHistory;
