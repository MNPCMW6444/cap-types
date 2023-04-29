import { Document } from "mongoose";

export interface CapHubUser extends Document {
  email: string;
  name: string;
  passwordHash: string;
}

export interface WebsiteFormData {
  annualRevenue: string;
  currency: string;
  annualGrowthRate: string;
  currentRunway: string;
  termLength: number;
  gracePeriod: string;
  email: string;
}

export interface SavedWebsiteFormData extends Document {
  stringifiedFormData: string;
}
