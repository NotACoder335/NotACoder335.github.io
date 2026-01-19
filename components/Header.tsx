import React from 'react';
import { TrainFront, Menu, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="px-4 md:px-10 py-3 max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 text-text-main dark:text-white">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <TrainFront size={20} />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight text-primary dark:text-gray-100">
            IRCTC <span className="text-text-main dark:text-gray-400 font-normal">Alerts</span>
          </h2>
        </div>

        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm font-semibold hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Trains</a>
            <a href="#" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Help</a>
          </nav>
          
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-main dark:text-gray-200"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-sm">
              Login
            </button>
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-gray-100 dark:ring-gray-700 cursor-pointer" 
              style={{ backgroundImage: 'url("https://picsum.photos/100/100")' }}
              role="img"
              aria-label="User Avatar"
            />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-main dark:text-white"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-text-main dark:text-white p-1">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};