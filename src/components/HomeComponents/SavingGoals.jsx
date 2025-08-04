import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const goals = [
  { label: 'Vacation', value: 80 },
  { label: 'Gift', value: 80 },
  { label: 'New Car', value: 80 },
  { label: 'Laptop', value: 80 },
];

const SavingGoals = () => {
  return (
    <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg  border shadow-sm  dark:border-none ">
      <h2 className="text-md font-semibold text-gray-800 dark:text-white mb-4">Saving Goals</h2>
      <div className="grid grid-cols-2 gap-6">
        {goals.map((goal, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <div className="w-20 h-20">
              <CircularProgressbar
                value={goal.value}
                text={`${goal.value}%`}
                styles={buildStyles({
                  textSize: '28px',
                  textColor: '#3b82f6',
                  pathColor: '#3b82f6',
                  trailColor: '#1e1b2f',
                })}
              />
            </div>
            <p className="mt-2 text-sm dark:text-white text-gray-800 ">{goal.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingGoals;
