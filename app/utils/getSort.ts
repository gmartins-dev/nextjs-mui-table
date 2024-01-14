import { User } from '@/app/services/getUsers';

export const descendingComparator = (a: User, b: User, orderBy: keyof User) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = (order: 'asc' | 'desc', orderBy: keyof User) => {
  return order === 'desc'
    ? (a: User, b: User) => descendingComparator(a, b, orderBy)
    : (a: User, b: User) => -descendingComparator(a, b, orderBy);
};
