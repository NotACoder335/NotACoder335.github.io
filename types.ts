export type AlertType = 'rescheduled' | 'platform_change' | 'cancelled' | 'info' | 'restored' | 'news' | 'special';
export type Category = 'alerts' | 'updates' | 'general' | 'links' | 'railway';

export interface Alert {
  id: string;
  category: Category;
  type: AlertType;
  title: string;
  tagLabel: string;
  timestamp: string;
  details: string;
  subtitle?: string; // e.g., "Source: Vadodara Jn" or "Fog Impact"
  links?: { label: string; url: string }[];
}

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  icon: 'search' | 'ticket' | 'calendar' | 'map' | 'food' | 'chat' | 'file' | 'hotel';
  url: string;
  colorClass: string; // e.g. "bg-blue-50 text-blue-600"
}

export interface FilterOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}