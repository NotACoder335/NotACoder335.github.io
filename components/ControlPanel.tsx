import React, { useRef, useState } from 'react';
import { Search, ListFilter, Bell, RotateCw, Info, Link, Train, Command, Calendar as CalendarIcon } from 'lucide-react';
import { FilterOption } from '../types';

interface ControlPanelProps {
  activeFilter: string;
  setActiveFilter: (id: string) => void;
  sortOrder: 'newest' | 'oldest';
  setSortOrder: (order: 'newest' | 'oldest') => void;
}

const FILTERS: FilterOption[] = [
  { id: 'alerts', label: 'ALERTS', icon: <Bell size={18} /> },
  { id: 'updates', label: 'UPDATES', icon: <RotateCw size={18} /> },
  { id: 'general', label: 'GENERAL INFO', icon: <Info size={18} /> },
  { id: 'links', label: 'QUICK LINKS', icon: <Link size={18} /> },
  { id: 'railway', label: 'RAILWAY UPDATES', icon: <Train size={18} /> },
];

export const ControlPanel: React.FC<ControlPanelProps> = ({ activeFilter, setActiveFilter, sortOrder, setSortOrder }) => {
  const dateInputRef = useRef<HTMLInputElement>(null);
  
  // Initialize with today's date formatted as YYYY-MM-DD
  const [dateValue, setDateValue] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const handleCalendarOpen = () => {
    if (dateInputRef.current) {
        if ('showPicker' in HTMLInputElement.prototype) {
             try {
                dateInputRef.current.showPicker();
             } catch (e) {
                dateInputRef.current.focus();
             }
        } else {
            dateInputRef.current.focus();
        }
    }
  };

  return (
    <div className="sticky top-[70px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur pb-4 pt-2 -mx-4 px-4 md:-mx-6 md:px-6 border-b border-transparent transition-all duration-300">
      <style>{`
        /* Force hide the native calendar icon in WebKit browsers */
        input[type="date"]::-webkit-calendar-picker-indicator {
            display: none !important;
            -webkit-appearance: none;
        }
      `}</style>

      {/* Top Row: Search and Sort */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-4">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-2xl group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={20} className="text-primary group-focus-within:text-primary-dark transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-12 py-3 border-none rounded-lg leading-5 bg-white dark:bg-surface-dark text-text-main dark:text-gray-200 placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm sm:text-sm transition-shadow"
            placeholder="Search by train number, station code, or keyword..."
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <kbd className="hidden sm:inline-flex items-center gap-1 border border-gray-200 dark:border-gray-700 rounded px-2 py-0.5 text-xs font-medium text-gray-400">
               <Command size={10} /> K
            </kbd>
          </div>
        </div>

        {/* Right Actions: Date Picker & Sort */}
        <div className="flex items-center justify-end gap-3">
            
          {/* Date Picker */}
          <div 
            className="relative cursor-pointer group"
            onClick={handleCalendarOpen}
          >
            <div 
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10 text-primary group-hover:text-primary-dark transition-colors"
            >
                <CalendarIcon size={18} />
            </div>
            <input 
                ref={dateInputRef}
                type="date"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                className="appearance-none bg-white dark:bg-surface-dark border-none text-text-main dark:text-gray-200 py-3 pl-10 pr-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-medium cursor-pointer min-w-[140px] dark:[color-scheme:dark]"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
              className="appearance-none bg-white dark:bg-surface-dark border-none text-text-main dark:text-gray-200 py-3 pl-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-medium cursor-pointer min-w-[150px]"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary">
              <ListFilter size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium shrink-0 transition-all duration-200
                ${isActive 
                  ? 'bg-primary text-white shadow-md shadow-primary/20 hover:scale-105 active:scale-95 font-bold' 
                  : 'bg-white dark:bg-surface-dark text-text-main dark:text-gray-300 border border-gray-100 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700'
                }
              `}
            >
              {filter.icon}
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};