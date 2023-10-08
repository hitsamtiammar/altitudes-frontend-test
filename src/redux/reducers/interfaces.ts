import { ReceiveBy } from '@/pages/Profile/interfaces';

export interface Subscription {
  id: string;
  name: string;
  isSubcribe: boolean;
}

export const DUMMY_DATA: Subscription[] = [
  {
    id: '1',
    name: 'Netflix',
    isSubcribe: true,
  },
  {
    id: '2',
    name: 'Disney+',
    isSubcribe: true,
  },
  {
    id: '3',
    name: 'Video+',
    isSubcribe: false,
  },
  {
    id: '4',
    name: 'Youtube Premium',
    isSubcribe: false,
  },
];
