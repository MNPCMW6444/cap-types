import { Document } from "mongoose";

export interface CapHubUser extends Document {
  email: string;
  name: string;
  passwordHash: string;
}

export interface WebsiteFormData {
  annualRevenue: number;
  currency: "EUR" | "GBP" | "CHF" | "RUB" | "TRY" | "ZAR" | "ILS" | "AED";
  annualGrowthRate: number;
  currentRunway: number;
  termLength: number;
  gracePeriod: number;
  email: string;
}

export interface SavedWebsiteFormData extends Document {
  stringifiedFormData: string;
}
