import React, { useState } from 'react';
import { Alert } from '../types';
import { ChevronDown, Clock, GitMerge, XCircle, Info, CheckCircle, Newspaper, Star } from 'lucide-react';

interface AlertCardProps {
  alert: Alert;
  isDefaultOpen?: boolean;
}

const STATUS_CONFIG = {
  rescheduled: {
    icon: Clock,
    color: 'text-status-orange',
    bg: 'bg-status-orange/10',
    highlight: 'text-status-orange'
  },
  platform_change: {
    icon: GitMerge,
    color: 'text-status-teal',
    bg: 'bg-status-teal/10',
    highlight: 'text-text-main font-bold'
  },
  cancelled: {
    icon: XCircle,
    color: 'text-alert-red',
    bg: 'bg-alert-red/10',
    highlight: 'text-alert-red'
  },
  info: {
    icon: Info,
    color: 'text-status-grey',
    bg: 'bg-gray-100 dark:bg-gray-700',
    highlight: 'text-text-main'
  },
  restored: {
    icon: CheckCircle,
    color: 'text-status-green',
    bg: 'bg-status-green/10',
    highlight: 'text-status-green'
  },
  news: {
    icon: Newspaper,
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-900/30',
    highlight: 'text-blue-600'
  },
  special: {
    icon: Star,
    color: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-900/30',
    highlight: 'text-purple-600'
  }
};

export const AlertCard: React.FC<AlertCardProps> = ({ alert, isDefaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const config = STATUS_CONFIG[alert.type] || STATUS_CONFIG['info'];
  const Icon = config.icon;

  // Function to highlight dynamic parts of the text based on type (simple approximation for demo)
  const renderDetails = () => {
     // This is a simple mock implementation of highlighting. 
     // In a real app, the `alert.details` would likely contain markup or structured data.
     const parts = alert.details.split(/(02:30 hrs|Platform 5|fully cancelled|Special Trains)/g);
     return (
        <p className="text-text-main dark:text-gray-300 leading-relaxed max-w-3xl">
            {parts.map((part, i) => {
                if (part === '02:30 hrs') return <span key={i} className="font-bold text-status-orange">{part}</span>;
                if (part === 'Platform 5') return <span key={i} className="font-bold">{part}</span>;
                if (part === 'fully cancelled') return <span key={i} className="font-bold text-alert-red">{part}</span>;
                if (part === 'Special Trains') return <span key={i} className="font-bold text-purple-600">{part}</span>;
                return part;
            })}
        </p>
     );
  };

  return (
    <div className={`
      group bg-surface-light dark:bg-surface-dark rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] 
      border border-transparent hover:border-primary/20 transition-all duration-200
      ${isOpen ? 'ring-1 ring-primary/20' : ''}
    `}>
      <div 
        className="cursor-pointer p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start gap-4 flex-1">
          <div className={`hidden sm:flex size-10 shrink-0 items-center justify-center rounded-full ${config.bg} ${config.color}`}>
            <Icon size={24} />
          </div>
          
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="text-lg font-bold text-text-main dark:text-gray-100">{alert.title}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${config.bg} ${config.color}`}>
                {alert.tagLabel}
              </span>
            </div>
            <p className="text-sm text-text-muted dark:text-gray-400 font-medium">
              {alert.timestamp} {alert.subtitle ? `• ${alert.subtitle}` : ''}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          {!isOpen && (
            <p className="sm:hidden text-sm text-text-main font-medium line-clamp-1 opacity-70">
              Tap to view details...
            </p>
          )}
          <ChevronDown 
            size={20} 
            className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </div>
      </div>

      {/* Accordion Content */}
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-0 sm:pl-[72px]">
            <div className="h-px w-full bg-gray-100 dark:bg-gray-700 mb-4"></div>
            
            {renderDetails()}
            
            {alert.links && alert.links.length > 0 && (
              <div className="mt-4 flex gap-3">
                {alert.links.map((link, idx) => (
                  <React.Fragment key={idx}>
                    <button className="text-xs font-bold text-primary hover:underline">
                      {link.label}
                    </button>
                    {idx < (alert.links?.length || 0) - 1 && (
                      <span className="text-gray-300 dark:text-gray-600">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};