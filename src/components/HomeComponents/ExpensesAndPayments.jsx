import WeeklyExpensesChart from './WeeklyExpensesChart';
import PaymentsHistory from './PaymentsHistory';

const ExpensesAndPayments = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
      <div className='lg:col-span-3'>
               <WeeklyExpensesChart />
               

      </div>
      <div className="">
         <PaymentsHistory />
      </div>
    </div>
  );
};

export default ExpensesAndPayments;
