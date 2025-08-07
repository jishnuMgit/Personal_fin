import {
  Banknote,
  CreditCard,
  Wallet,
  WalletCards,
} from 'lucide-react';

const wallets = [
  { id: 'city', label: 'City Bank', icon: Banknote },
  { id: 'debit', label: 'Debit Card', icon: CreditCard },
  { id: 'visa', label: 'Visa Card', icon: WalletCards },
  { id: 'cash', label: 'Cash', icon: Wallet },
];

const SidebarProfile = ({ onSelect }) => {
  return (
    <div className="dark:bg-[#1a1a2e] bg-white border dark:border-none h-[530px] shadow-sm text-black  dark:text-white rounded-lg p-6 space-y-4 w-full lg:w-[600px] md:w-1/3">
      <div className='flex items-center gap-3'>
<img
  src="./OIP.jpg"
  className="w-20 h-20 rounded-full object-cover"
  alt="Profile"
/>
      <div className="text-lg font-bold mb-4">Henry John Paulin</div>
      </div>

      <div className="flex justify-between items-center text-sm mb-4 border-b border-gray-700 pb-4">
        <div>
          <p className="text-gray-400 lg:text-xl text-sm md:text-sm  ">25 June 2024</p>
          <p className="text-xs">Registered</p>
        </div>

        <div className='h-14 w-[2px] dark:bg-white bg-black'>

        </div>
        <div>
          <p className="text-gray-400 lg:text-xl text-sm md:text-sm ">05</p>
          <p className="text-xs">Referral</p>
        </div>
      </div>

      <div className="space-y-3">
        {wallets.map(({ id, label, icon: Icon }) => (
          <div
            key={id}
            className="flex justify-between items-center  px-4 py-2 rounded cursor-pointer dark:hover:bg-[#4c47a3] hover:bg-[#dbdaeb]"
            onClick={() => onSelect(id)}
          >
            <div className="flex items-center gap-3">
              <Icon className="text-blue-400" size={20} />
              <span className="text-sm">{label}</span>
            </div>
            <span className="text-lg text-gray-400">›</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarProfile;
