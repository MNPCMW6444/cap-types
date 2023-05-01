import { Document } from "mongoose";
import { PositiveNumber } from "./positiveNumber";
import { Currency } from "./currency";

export interface CapHubUser extends Document {
  email: string;
  name: string;
  passwordHash: string;
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
