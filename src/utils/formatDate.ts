import { format } from 'date-fns';

export const formatDate = (date: string): string => {
   const correctDate = format(new Date(date), 'dd.MM.yyyy');
    return correctDate;
}