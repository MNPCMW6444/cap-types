import { Document } from "mongoose";
export interface CapHubUser extends Document {
  email: string;
  name: string;
  passwordHash: string;
}
enum Currency {
  EUR = "EUR",
  GBP = "GBP",
  CHF = "CHF",
  RUB = "RUB",
  TRY = "TRY",
  ZAR = "ZAR",
  ILS = "ILS",
  AED = "AED",
}

export interface WebsiteFormData {
  annualRevenue: number;
  currency: Currency;
  annualGrowthRate: number;
  currentRunway: number;
  termLength: number;
  gracePeriod: number;
  email: string;
}
export interface SavedWebsiteFormData extends Document {
  stringifiedFormData: string;
}
