import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { AlertTicker } from './components/AlertTicker';
import { ControlPanel } from './components/ControlPanel';
import { AlertCard } from './components/AlertCard';
import { QuickLinks } from './components/QuickLinks';
import { CONTENT_DATA, QUICK_LINKS_DATA } from './data';
import { RefreshCw, Inbox } from 'lucide-react';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('alerts');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize Theme
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  // Helper to parse diverse timestamp strings into comparative values
  const parseTimestamp = (timestampStr: string): number => {
    const now = new Date();
    const str = timestampStr.toLowerCase();

    // Handle "Today"
    if (str.includes('today')) {
      // Try to extract time "10:45 AM"
      const timeMatch = str.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
      if (timeMatch) {
        const [_, hours, minutes, period] = timeMatch;
        let h = parseInt(hours);
        if (period.toLowerCase() === 'pm' && h !== 12) h += 12;
        if (period.toLowerCase() === 'am' && h === 12) h = 0;
        const d = new Date(now);
        d.setHours(h, parseInt(minutes), 0, 0);
        return d.getTime();
      }
      return now.getTime(); // Default to now if no time found
    }

    // Handle "Yesterday"
    if (str.includes('yesterday')) {
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      
      const timeMatch = str.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
      if (timeMatch) {
        const [_, hours, minutes, period] = timeMatch;
        let h = parseInt(hours);
        if (period.toLowerCase() === 'pm' && h !== 12) h += 12;
        if (period.toLowerCase() === 'am' && h === 12) h = 0;
        yesterday.setHours(h, parseInt(minutes), 0, 0);
        return yesterday.getTime();
      }
      return yesterday.getTime();
    }

    // Handle Standard Dates like "Oct 12, 2024" or "Sep 2024"
    const cleanStr = timestampStr
      .replace(/^scheduled:\s*/i, '')
      .replace(/(\d+)(st|nd|rd|th)/, '$1');

    const parsed = Date.parse(cleanStr);
    if (!isNaN(parsed)) {
      return parsed;
    }

    return 0;
  };

  // Filter and Sort Content
  const displayedContent = useMemo(() => {
    const filtered = CONTENT_DATA.filter(item => item.category === activeFilter);
    
    return filtered.sort((a, b) => {
      const timeA = parseTimestamp(a.timestamp);
      const timeB = parseTimestamp(b.timestamp);
      
      return sortOrder === 'newest' 
        ? timeB - timeA 
        : timeA - timeB;
    });
  }, [activeFilter, sortOrder]);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-display transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <AlertTicker />
      
      <main className="flex-1 w-full max-w-[960px] mx-auto px-4 md:px-6 py-8">
        <ControlPanel 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <div className="mt-6 min-h-[400px]">
          {/* Quick Links View */}
          {activeFilter === 'links' ? (
            <QuickLinks links={QUICK_LINKS_DATA} />
          ) : (
            /* Alerts/Updates/News View */
            <div className="space-y-4 animate-slideDown">
              {displayedContent.length > 0 ? (
                displayedContent.map((alert, index) => (
                  <AlertCard 
                    key={alert.id} 
                    alert={alert} 
                    isDefaultOpen={index === 0} 
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-4">
                    <Inbox size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-text-main dark:text-gray-200">No updates available</h3>
                  <p className="text-text-muted dark:text-gray-500 max-w-xs mt-1">
                    There are currently no active alerts for this category. Check back later.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Load More Button */}
        {activeFilter !== 'links' && displayedContent.length > 0 && (
          <div className="mt-8 flex justify-center pb-12">
            <button 
              onClick={handleLoadMore}
              disabled={loading}
              className="bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-text-main dark:text-gray-200 font-semibold py-3 px-12 rounded-lg shadow-sm w-full max-w-xs transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <RefreshCw size={20} className={`text-primary ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;