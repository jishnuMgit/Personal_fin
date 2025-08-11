
import IncomeVsExpenseGraph from './IncomeVsExpenseGraph'
import TransactionHistory from '../../common/TransactionHistory'

const IncomevsExpenses = () => {
          const sampleData = [
  { category: 'Beauty', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', currency: 'USD' },
  { category: 'Bills & Fees', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', currency: 'USD' },
  { category: 'Beauty', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', currency: 'USD' },
  { category: 'Bills & Fees', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', currency: 'USD' },
   { category: 'Beauty', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', currency: 'USD' },
  { category: 'Bills & Fees', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', currency: 'USD' },
  { category: 'Beauty', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', currency: 'USD' },
  { category: 'Bills & Fees', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', currency: 'USD' },
   { category: 'Beauty', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', currency: 'USD' },
  { category: 'Bills & Fees', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', currency: 'USD' },
  { category: 'Beauty', date: '12.12.2023', desc: 'Grocery Items', amount: '-32.20', currency: 'USD' },
  { category: 'Bills & Fees', date: '12.12.2023', desc: 'Electricity Bill', amount: '-45.00', currency: 'USD' },
 
];
  return (
    <div>
 <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
      {/* Left: Donut + list */}
      <section className="min-w-0">
 <IncomeVsExpenseGraph/>   
    </section>

      {/* Right: Table */}
      <section className="min-w-0">
        <TransactionHistory title="Recent Expenses" transactions={sampleData} />
      </section>
    </div>


    </div>
  )
}

export default IncomevsExpenses