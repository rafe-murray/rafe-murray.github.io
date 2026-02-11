export function dateToMonthYearString(date: Date): string {
  return date.toLocaleString('default', { year: 'numeric', month: 'long' });
}
