export function dateToMonthYearString(date: Date): string {
  return date.toLocaleString('default', { year: 'numeric', month: 'long' });
}

export function arrayIntersection<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter(el => arr2.includes(el));
}
