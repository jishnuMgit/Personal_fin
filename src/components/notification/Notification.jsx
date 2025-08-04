import { useState, useRef, useEffect } from 'react';
import DarkModeToggle from '../theme/DarkModeToggle';
import { Bell } from 'lucide-react';
import ProfileDropdown from '../profile/ProfileDropdown';

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
const Dark=localStorage.getItem('theme')
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
    <div className="relative flex items-center md:space-x-1 md:order-2 md:ml-0 mr-10" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-white rounded-lg  dark:hover:bg-gray-700"
      >
        
       <Bell className={`${!isOpen ? "":"text-blue-600"} font-bold`} />
      </button>

      <div>
        <DarkModeToggle/>

      </div>
      <div>
         <ProfileDropdown/>
      </div>

      {isOpen && (
        <div className="fixed z-50  top-20 right-10 w-48  bg-white rounded-lg shadow-lg dark:bg-gray-700">
          <ul className="py-2 text-sm font-medium text-gray-700 dark:text-gray-400">
            {[
              { label: 'US', icon: '🇺🇸' },
              { label: 'Germany', icon: '🇩🇪' },
              { label: 'Italy', icon: '🇮🇹' },
              { label: 'China', icon: '🇨🇳' },
            ].map((item, idx) => (
              <li key={idx}>
                <button
                  className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span> {item.label} Notification
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
