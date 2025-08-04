import { useState, useRef, useEffect } from 'react';
import { User, Wallet, Settings, LogOut } from 'lucide-react';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
      >
        <User className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-56 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Hafsa Humaira</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">hello@email.com</p>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <User className="mr-2 h-4 w-4" /> Profile
              </button>
            </li>
            <li>
              <button
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <Wallet className="mr-2 h-4 w-4" /> Wallets
              </button>
            </li>
            <li>
              <button
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="mr-2 h-4 w-4" /> Settings
              </button>
            </li>
            <li>
              <button
                className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
