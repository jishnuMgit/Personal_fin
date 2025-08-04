import {
  Shield,
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
import { Link } from 'react-router-dom'; // ✅ Correct import

const navItems = [
  { icon: <CircleDashed size={24} />, label: 'Home', Clink: '/' },
  { icon: <CreditCard size={24} />, label: 'Payments', Clink: '/wallets' },
  { icon: <DollarSign size={24} />, label: 'Earnings', Clink: '/' },
  { icon: <Target size={24} />, label: 'Goals', Clink: '/' },
  { icon: <User size={24} />, label: 'Customers', Clink: '/' },
  { icon: <BarChart2 size={24} />, label: 'Analytics', Clink: '/' },
  { icon: <UserCheck size={24} />, label: 'Staff', Clink: '/' },
  { icon: <LinkIcon size={24} />, label: 'Integrations', Clink: '/' },
  { icon: <Settings size={24} />, label: 'Settings', Clink: '/' },
];

const SideNav = () => {
  return (
    <div className="hidden md:flex fixed top-0 left-0 h-screen w-16 bg-[#2f2cd8] text-white flex-col items-center py-4 space-y-20 shadow-lg">
      <div className="group relative">
        <Shield size={28} />
        <span className="absolute z-[70] left-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Dashboard
        </span>
      </div>

      <div className="flex flex-col gap-8">
        {navItems.map((item, idx) => (
          <div key={idx} className="group relative cursor-pointer">
            <Link to={item.Clink}>{item.icon}</Link> {/* ✅ Fixed */}
            <span className="absolute z-[60] left-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-[#2f2cd8] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
