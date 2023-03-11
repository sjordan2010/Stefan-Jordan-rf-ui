import { useMemo } from 'react';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Adapter pattern
const parseDate = (date) => ({
  day: date.getDate(),
  monthIndex: date.getMonth(),
  monthName: MONTH_NAMES[date.getMonth()],
  suffix: getDaySuffix(date.getDate()),
});

const getFormattedDate = ({ day, monthName, suffix }) => `${monthName} ${day}${suffix}`;

export const useFormattedDate = (event) =>
  useMemo(() => getFormattedDate(parseDate(event.date)), [event.date]);

function getDaySuffix(day) {
  if (day === 11 || day === 12 || day === 13) {
    return 'th';
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
