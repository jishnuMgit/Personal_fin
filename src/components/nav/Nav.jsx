import React from 'react';
import NotificationDropdown from '../notification/Notification';
import ProfileDropdown from '../profile/ProfileDropdown';
import { Codesandbox, Search } from 'lucide-react'; // ✅ Lucide icon

const Nav = () => {
  return (
    <nav className="bg-white fixed top-0 md:-right-16 w-full z-50 border-b border-gray-200 dark:bg-[#131129] dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-row items-center justify-between gap-4 ">
        
        {/* Right section: Search */}
        <div className="relative w-[250px] sm:w-[300px] md:w-[400px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
        <div className='flex items-center'>
            {/* <Codesandbox size={28}/> */}
          <input
            type="text"
            id="search-navbar"
            className="block w-full border border-gray-400 p-2 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#110f25] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search..."
          />
        </div>
        </div>

        {/* Left section: Notification + Profile */}
        <div className="flex items-center space-x-4">
          <NotificationDropdown />
      
        </div>
      </div>
    </nav>
  );
};

export default Nav;
