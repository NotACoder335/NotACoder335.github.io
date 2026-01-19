import React from 'react';
import { QuickLink } from '../types';
import { Search, Ticket, Calendar, MapPin, Utensils, MessageCircle, FileText, Hotel } from 'lucide-react';

interface QuickLinksProps {
  links: QuickLink[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  search: Search,
  ticket: Ticket,
  calendar: Calendar,
  map: MapPin,
  food: Utensils,
  chat: MessageCircle,
  file: FileText,
  hotel: Hotel
};

export const QuickLinks: React.FC<QuickLinksProps> = ({ links }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-slideDown">
      {links.map((link) => {
        const Icon = ICON_MAP[link.icon] || Search;
        
        return (
          <a 
            key={link.id} 
            href={link.url}
            className="group flex flex-col items-center justify-center p-6 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-transparent hover:border-primary/20 hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className={`mb-3 size-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${link.colorClass}`}>
              <Icon size={24} />
            </div>
            <h3 className="text-base font-bold text-text-main dark:text-gray-100 mb-1 text-center group-hover:text-primary transition-colors">
              {link.title}
            </h3>
            <p className="text-xs text-text-muted dark:text-gray-400 text-center font-medium">
              {link.description}
            </p>
          </a>
        );
      })}
    </div>
  );
};