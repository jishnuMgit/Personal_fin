import {
  CircleDashed,
  CreditCard,
  DollarSign,
  Target,
  User,
  BarChart2,
  UserCheck,
  Link as LinkIcon,
  Settings,
} from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Add this

const navItems = [
  { icon: <CircleDashed size={24} />, label: 'Overview', Clink: '/' },
  { icon: <CreditCard size={24} />, label: 'Payments', Clink: '/wallets' },
  { icon: <DollarSign size={24} />, label: 'Earnings', Clink: '/budgets' },
  { icon: <Target size={24} />, label: 'Goals', Clink: '/goals' },
  { icon: <User size={24} />, label: 'Customers', Clink: '/profile' },
  { icon: <BarChart2 size={24} />, label: 'Analytics', Clink: '/analytics' },
  { icon: <UserCheck size={24} />, label: 'Staff', Clink: '/support' },
  { icon: <LinkIcon size={24} />, label: 'Integrations', Clink: '/affiliates' },
  { icon: <Settings size={24} />, label: 'Settings', Clink: '/setting' },
];

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[60px] bg-[#2f2cd8] text-white border-t shadow-md flex justify-around items-center py-2 z-50 md:hidden overflow-x-auto">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.Clink}
          className="group relative flex flex-col items-center px-2 cursor-pointer"
        >
          {item.icon}
          {/* Optional Label */}
          {/* <span className="text-[10px] mt-1">{item.label}</span> */}
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
