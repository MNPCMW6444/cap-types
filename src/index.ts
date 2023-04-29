import { Document } from "mongoose";

export interface CapHubUser extends Document {
  email: string;
  name: string;
  passwordHash: string;
}

export enum Currency {
  EUR = "EUR",
  GBP = "GBP",
  CHF = "CHF",
  RUB = "RUB",
  TRY = "TRY",
  ZAR = "ZAR",
  ILS = "ILS",
  AED = "AED",
}

export type PositiveNumber = number & { readonly __brand: unique symbol };
export function toPositiveNumber(value: number): PositiveNumber | null {
  return value > 0 ? (value as PositiveNumber) : null;
}

export enum Unit {
  Percent = "%",
}

export enum TimeUnit {
  Months = "Months",
  Years = "Years",
  Decades = "Decades",
  Centuries = "Centuries",
  Millennia = "Millennia",
  Microfortnights = "Microfortnights",
  Nanocenturies = "Nanocenturies",
  Picoyears = "Picoyears",
  Femtoseconds = "Femtoseconds",
  Attoseconds = "Attoseconds",
  Zeptoseconds = "Zeptoseconds",
  Yoctoseconds = "Yoctoseconds",
  Seconds = "Seconds",
  Weeks = "Weeks",
  Days = "Days",
  Hours = "Hours",
  Minutes = "Minutes",
  Milliseconds = "Milliseconds",
  Microseconds = "Microseconds",
  Nanoseconds = "Nanoseconds",
  Picoseconds = "Picoseconds",
}

export interface ARR {
  amount: PositiveNumber;
  currency: Currency;
}

export interface AGR {
  amount: PositiveNumber;
  unit: Unit;
}

export interface Runway {
  amount: PositiveNumber;
  unit: TimeUnit;
}

export interface GracePeriod {
  amount: PositiveNumber;
  unit: TimeUnit;
}

export interface TermLength {
  amount: PositiveNumber;
  unit: TimeUnit;
}

export interface WebsiteFormData {
  annualRevenue: ARR;
  annualGrowthRate: AGR;
  currentRunway: Runway;
  termLength: TermLength;
  gracePeriod: GracePeriod;
  email: string;
}

export interface SavedWebsiteFormData extends Document {
  stringifiedFormData: string;
}
