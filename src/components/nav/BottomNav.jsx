// src/components/BottomNav.jsx
import {
  CircleDashed,
  CreditCard,
  DollarSign,
  Target,
  User,
  BarChart2,
  UserCheck,
  Link,
  Settings,
} from 'lucide-react';

const navItems = [
  { icon: <CircleDashed size={24} />, label: 'Overview' },
  { icon: <CreditCard size={24} />, label: 'Payments' },
  { icon: <DollarSign size={24} />, label: 'Earnings' },
  { icon: <Target size={24} />, label: 'Goals' },
  { icon: <User size={24} />, label: 'Customers' },
  { icon: <BarChart2 size={24} />, label: 'Analytics' },
  { icon: <UserCheck size={24} />, label: 'Staff' },
  { icon: <Link size={24} />, label: 'Integrations' },
  { icon: <Settings size={24} />, label: 'Settings' },
];

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#2f2cd8] text-white border-t shadow-md flex justify-around items-center py-2 z-50 md:hidden overflow-x-auto">
      {navItems.map((item, index) => (
        <div key={index} className="group relative flex flex-col items-center px-2 cursor-pointer">
          {item.icon}
          {/* Tooltip (optional on hover) */}
          {/* <span className="text-[10px] mt-1">{item.label}</span> */}
        </div>
      ))}
    </div>
  );
};

export default BottomNav;
