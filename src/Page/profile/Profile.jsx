import { useState } from "react";
import ChartPanel from "../../components/profile/ChartPanel";
import SidebarProfile from "../../components/profile/SidebarProfile";
import { ChevronRight } from "lucide-react";

const Profile = () => {
   const [wallet, setWallet] = useState('debit'); // default

  return (

    <div className="sm:ml-16 p-4 pt-[120px] lg:ml-10 bg-white dark:bg-[#131129] min-h-screen">
       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mx-28">
            <div>
              <h1 className="text-2xl font-bold">Profile</h1>
              <p className="text-sm text-gray-500 dark:text-gray-300">Welcome Ekash Finance Management</p>
            </div>

            <div className="flex items-center text-sm text-gray-500  dark:text-gray-300 mt-2 lg:mt-0">
              <p className="hover:underline cursor-pointer">Home</p>
              <ChevronRight className="mx-2 h-4 w-4" />
              <p className="font-medium text-blue-600 dark:text-blue-400">Profile</p>
            </div>
          </div>
       

        <div className="flex flex-col text-black dark:text-white space-y-10 max-w-7xl mx-auto">
          {/* Header */}
       

         

  <div className="min-h-screen dark:bg-[#131129] text-white p-6 flex flex-col md:flex-row gap-6">
      <SidebarProfile onSelect={setWallet} />
      <ChartPanel selectedWallet={wallet} />
    </div>
 


        </div>
      </div>
  
  );
};
export default Profile






