import { MoonStar, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
//{Dark==="light"?<Sun />:<MoonStar />}
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      className="p-2 "
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <Sun size={30} className='text-yellow-300 font-bold' />: <Sun size={30} className='font-bold text-gray-500 ' /> }
    </button>
  );
};

export default DarkModeToggle;
