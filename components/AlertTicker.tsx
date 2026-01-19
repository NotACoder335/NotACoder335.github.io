import React from 'react';
import { TriangleAlert } from 'lucide-react';

export const AlertTicker: React.FC = () => {
  return (
    <div className="bg-alert-red text-white overflow-hidden relative h-10 flex items-center">
      <div className="flex whitespace-nowrap animate-ticker w-max">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className="mx-4 font-bold tracking-wide flex items-center gap-2">
            <TriangleAlert size={16} className="fill-current" />
            URGENT: Heavy fog reported in Northern Region. Multiple diversions expected. Check status before travel.
          </span>
        ))}
      </div>
      
      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-alert-red to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-alert-red to-transparent z-10"></div>
    </div>
  );
};