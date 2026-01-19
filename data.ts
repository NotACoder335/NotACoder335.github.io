import { Alert, QuickLink } from './types';

export const CONTENT_DATA: Alert[] = [
  // --- ALERTS ---
  {
    id: '1',
    category: 'alerts',
    type: 'rescheduled',
    title: '12951 - Rajdhani Express',
    tagLabel: 'Rescheduled',
    timestamp: 'Today, 10:45 AM',
    subtitle: 'Source: Vadodara Jn',
    details: 'Train has been rescheduled by 02:30 hrs due to technical snag at Vadodara Jn. The train is now expected to depart at 19:30 instead of 17:00. Inconvenience caused is deeply regretted. Catering services will be provided at the station.',
    links: [
      { label: 'Track Live Status', url: '#' },
      { label: 'View Refund Rules', url: '#' }
    ]
  },
  {
    id: '2',
    category: 'alerts',
    type: 'platform_change',
    title: 'New Delhi (NDLS)',
    tagLabel: 'Platform Change',
    timestamp: 'Today, 09:15 AM',
    details: 'Platform 14 is currently under unscheduled maintenance. All trains scheduled for Platform 14, including the 12004 Shatabdi Express, have been diverted to Platform 5 until 18:00 hrs. Please check display boards for real-time updates.',
    links: [
      { label: 'Station Map', url: '#' }
    ]
  },
  {
    id: '3',
    category: 'alerts',
    type: 'cancelled',
    title: '12002 - Bhopal Shatabdi',
    tagLabel: 'Cancelled',
    timestamp: 'Yesterday, 11:30 PM',
    subtitle: 'Fog Impact',
    details: 'Train fully cancelled due to dense fog conditions persisting in the Northern Region. Passengers are entitled to a full refund. Automatic refund process has been initiated for online tickets. Counter ticket holders please visit nearest PRS counter.'
  },
  {
    id: 'a4',
    category: 'alerts',
    type: 'info',
    title: 'Secunderabad Jn (SC)',
    tagLabel: 'Crowd Alert',
    timestamp: 'Yesterday, 04:00 PM',
    details: 'Heavy crowd expected at Secunderabad Junction due to festival rush. Passengers are advised to reach the station at least 60 minutes before scheduled departure. Extra counters have been opened near the main entrance.'
  },
  {
    id: 'a5',
    category: 'alerts',
    type: 'rescheduled',
    title: '22691 - Rajdhani Express',
    tagLabel: 'Rescheduled',
    timestamp: 'Oct 15, 2024',
    subtitle: 'Late Arrival',
    details: 'Train rescheduled due to late arrival of pairing rake. Expected departure delay of 4 hours from Nizamuddin. Please check NTES app for live tracking.'
  },

  // --- UPDATES (Operational) ---
  {
    id: '4',
    category: 'updates',
    type: 'special',
    title: 'Festival Special Trains 2024',
    tagLabel: 'Special Services',
    timestamp: 'Oct 12, 2024',
    subtitle: 'Diwali & Chhath Puja',
    details: 'To clear the extra rush of passengers during the upcoming festive season, Indian Railways will run 26 trips of Special Trains between Mumbai Central and Banaras. Booking opens on 15th October.',
    links: [
      { label: 'View Schedule', url: '#' },
      { label: 'Book Now', url: '#' }
    ]
  },
  {
    id: '5',
    category: 'updates',
    type: 'info',
    title: 'Traffic Block: Western Railway',
    tagLabel: 'Maintenance',
    timestamp: 'Today, 08:00 AM',
    details: 'A major traffic block of 04:30 hrs will be undertaken for maintenance of track, signaling and overhead equipment on Up & Down fast lines between Borivali and Goregaon stations on Sunday.'
  },
  {
    id: '6',
    category: 'updates',
    type: 'restored',
    title: 'Restoration of Services',
    tagLabel: 'Service Update',
    timestamp: 'Yesterday, 06:30 PM',
    details: 'Train No. 19037/19038 Bandra Terminus - Gorakhpur Avadh Express which was earlier cancelled due to non-interlocking work at Surat yard has been restored and will run as per proper schedule.'
  },
  {
    id: 'u7',
    category: 'updates',
    type: 'info',
    title: 'Konkan Railway Monsoon Timetable',
    tagLabel: 'Schedule End',
    timestamp: 'Oct 01, 2024',
    details: 'The Monsoon timetable on Konkan Railway route will end on 31st Oct. Trains will revert to non-monsoon schedule starting Nov 1st. Passengers are requested to check revised timings.'
  },

  // --- RAILWAY UPDATES (News) ---
  {
    id: '7',
    category: 'railway',
    type: 'news',
    title: 'New Vande Bharat Express Routes',
    tagLabel: 'Press Release',
    timestamp: 'Oct 10, 2024',
    details: 'Hon\'ble PM to flag off 9 new Vande Bharat Express trains connecting religious and tourist destinations across 11 states. These trains will provide world-class amenities and reduce travel time by up to 15%.',
    links: [{ label: 'Read Press Release', url: '#' }]
  },
  {
    id: '8',
    category: 'railway',
    type: 'news',
    title: 'Amrit Bharat Station Scheme',
    tagLabel: 'Infrastructure',
    timestamp: 'Oct 05, 2024',
    details: 'Redevelopment work has commenced at 508 railway stations across the country. The revamped stations will feature modern passenger amenities, roof plazas, and improved inter-modal connectivity.',
  },
  {
    id: 'r9',
    category: 'railway',
    type: 'news',
    title: 'Safety Drive Initiated',
    tagLabel: 'Safety',
    timestamp: 'Sep 28, 2024',
    details: 'A month-long intense safety drive has been launched across all zones to prevent fire incidents. Special focus on pantry cars and charging points within coaches.'
  },

  // --- GENERAL INFO ---
  {
    id: '9',
    category: 'general',
    type: 'info',
    title: 'System Maintenance',
    tagLabel: 'Downtime Alert',
    timestamp: 'Oct 15, 2024',
    details: 'Ticketing services will be unavailable from 00:00 to 00:45 for scheduled server upgrades. PNR enquiry and Train Status services will continue to function normally.'
  },
  {
    id: '10',
    category: 'general',
    type: 'info',
    title: 'Revised Catering Charges',
    tagLabel: 'Policy Update',
    timestamp: 'Sep 01, 2024',
    details: 'The Ministry of Railways has revised the menu and tariff of catering services on Rajdhani, Shatabdi, and Duronto trains. Passengers can now opt for regional cuisines and diabetic-friendly meals.',
    links: [{ label: 'View Menu & Rates', url: '#' }]
  },
  {
    id: 'g11',
    category: 'general',
    type: 'info',
    title: 'Senior Citizen Concession',
    tagLabel: 'FAQ',
    timestamp: 'Aug 15, 2024',
    details: 'The parliamentary standing committee has recommended resuming senior citizen concessions for sleeper and 3AC classes. No official notification has been issued by the Ministry yet.'
  }
];

export const QUICK_LINKS_DATA: QuickLink[] = [
  {
    id: 'l1',
    title: 'PNR Status',
    description: 'Check reservation status',
    icon: 'search',
    url: '#',
    colorClass: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
  },
  {
    id: 'l2',
    title: 'Book Ticket',
    description: 'Plan your journey',
    icon: 'ticket',
    url: '#',
    colorClass: 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400'
  },
  {
    id: 'l3',
    title: 'Train Schedule',
    description: 'Find train timings',
    icon: 'calendar',
    url: '#',
    colorClass: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400'
  },
  {
    id: 'l4',
    title: 'Track Train',
    description: 'Live running status',
    icon: 'map',
    url: '#',
    colorClass: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
  },
  {
    id: 'l5',
    title: 'E-Catering',
    description: 'Order food on train',
    icon: 'food',
    url: '#',
    colorClass: 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
  },
  {
    id: 'l6',
    title: 'Ask Disha',
    description: '24x7 Virtual Help',
    icon: 'chat',
    url: '#',
    colorClass: 'bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400'
  },
  {
    id: 'l7',
    title: 'File TDR',
    description: 'Claim refund',
    icon: 'file',
    url: '#',
    colorClass: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
  },
  {
    id: 'l8',
    title: 'Retiring Room',
    description: 'Book station stay',
    icon: 'hotel',
    url: '#',
    colorClass: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400'
  }
];