import {
  BackingStatus,
  BusinessModel,
  Country,
  Currency,
  PositiveNumber,
  TimeUnit,
  Unit,
  Vertical,
} from "./types";

export interface Money {
  amount: PositiveNumber;
  currency: Currency;
}
export interface NumAndUnit {
  amount: PositiveNumber;
  unit: Unit;
}
export interface Runway {
  amount: PositiveNumber;
  unit: TimeUnit;
}
export interface Period {
  amount: PositiveNumber;
  unit: TimeUnit;
}

export interface WebsiteFormData {
  annualRevenue: Money;
  quote: Money;
  annualGrowthRate: NumAndUnit;
  currentRunway: Runway;
  termLength: Period;
  gracePeriod: Period;
  businessModel: BusinessModel;
  vertical: Vertical;
  grossMargin: NumAndUnit;
  headquarterCountry: Country;
  backingStatus: BackingStatus;
  email: string;
}
export interface SavedWebsiteFormData extends Document {
  stringifiedFormData: string;
}
