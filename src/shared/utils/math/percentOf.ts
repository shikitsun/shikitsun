export function percentOf(value: number, min: number, max: number) {
  if (max === min) return 0;
  return Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);
}
