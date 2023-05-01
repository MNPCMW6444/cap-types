export type PositiveNumber = number & { readonly __brand: unique symbol };
export const toPositiveNumber = (value: number): PositiveNumber | null =>
  value > 0 ? (value as PositiveNumber) : null;
