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

export interface ARR {
  amount: PositiveNumber;
  currency: Currency;
}

export interface AGR {
  amount: PositiveNumber;
  unuit: "%";
}

export interface Runway {
  amount: PositiveNumber;
  unit:
    | "Months"
    | "Years"
    | "Decades"
    | "Centuries"
    | "Millennia"
    | "Microfortnights"
    | "Nanocenturies"
    | "Picoyears"
    | "Femtoseconds"
    | "Attoseconds"
    | "Zeptoseconds"
    | "Yoctoseconds"
    | "Seconds"
    | "Weeks"
    | "Days"
    | "Hours"
    | "Minutes"
    | "Milliseconds"
    | "Microseconds"
    | "Nanoseconds"
    | "Picoseconds";
}

export interface WebsiteFormData {
  annualRevenue: ARR;
  annualGrowthRate: AGR;
  currentRunway: Runway;
  termLength: number;
  gracePeriod: number;
  email: string;
}

export interface SavedWebsiteFormData extends Document {
  stringifiedFormData: string;
}
