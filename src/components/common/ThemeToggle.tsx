import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';
  return (
    <div>
      <Button
        aria-label='Toggle Dark Mode'
        size='sm'
        className='relative  flex items-center   rounded-lg w-12 h-5 dark:bg-orange-500   transition-colors duration-300 border-2 border-gray-400 '
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        <Sun
          className={`w-[8px] h-[8px]  absolute left-1 transition-opacity duration-300  ${isDark ? 'opacity-100 text-white ' : 'opacity-100'}`}
        />
        <Moon
          className={`w-[8px] h-[8px] absolute right-1 transition-opacity duration-300 ${isDark ? 'opacity-50 ' : 'opacity-100 text-white'}`}
        />

        <span
          className={`w-5 h-5 inline-block bg-white rounded-full transition-transform duration-800 ${isDark ? 'translate-x-3' : '-translate-x-3'}`}
        />
      </Button>
    </div>
  );
};

export default ThemeToggle;
