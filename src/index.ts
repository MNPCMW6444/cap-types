import { Document } from "mongoose";

export type PositiveNumber = number & { readonly __brand: unique symbol };
export const toPositiveNumber = (value: number): PositiveNumber | null =>
  value > 0 ? (value as PositiveNumber) : null;
export enum Unit {
  Percent = "%",
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
  USD = "USD",
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
export enum BusinessModel {
  ECommerce = "E - Commerce",
  Marketplace = "Marketplace",
  MonthlySubscription = "Monthly Subscription ",
  AnnualSubscription = "Annual Subscription ",
  NonRecurring = "Non Recurring ",
  Usage = "Usage",
  P2P = "P2P",
  B2B = "B2B",
  B2C = "B2C",
  B2E = "B2E",
  D2C = "D2C",
  B2B2C = "B2B2C",
  MultupleCustomerType = "Multuple Customer Type",
}
export enum Vertical {
  THREEDPrinting = "3D Printing",
  AdTech = "AdTech",
  AdvancedManufacturing = "Advanced Manufacturing",
  AgTech = "AgTech",
  ArtificialInteligenceANDMachineLearning = "Artificial Inteligence & Machine Learning",
  AudioTech = "Audio Tech",
  AugmentedReality = "Augmented Reality",
  AutonomousCars = "Autonomous Cars",
  B2BPayments = "B2B Payments ",
  BeautyTech = "Beauty Tech",
  BigData = "Big Data",
  Cannabis = "Cannabis ",
  CarSharing = "Car Sharing",
  CleanTech = "Clean Tech ",
  ClimateTech = "Climate Tech",
  CloudTechANDDevops = "CloudTech & Devops",
  ConstructionTech = "Construction Tech",
  CryptoCurrencyORBlockchain = "CryptoCurrency / Blockchain",
  CyberSecurity = "Cyber Security ",
  DigitalHealth = "Digital Health ",
  ECommerce = "E-Commerce ",
  EdTech = "EdTech",
  EphemeralContect = "Ephemeral Contect ",
  Esports = "Esports ",
  FemTech = "FemTech",
  FinTech = "FinTech",
  FoodTech = "FoodTech",
  Gaming = "Gaming",
  HealthTech = "HealthTech",
  HRTech = "HR Tech",
  ImpactInvesting = "Impact Investing ",
  Industrials = "Industrials ",
  Infrastracutre = "Infrastracutre ",
  InsurTech = "InsurTech",
  InternetofThings = "Internet of Things ",
  LegalTech = "LegalTech",
  LifeSciences = "Life Sciences",
  LOHASANDWellness = "LOHAS & Wellness",
  Manufacturing = "Manufacturing ",
  MarketingTech = "Marketing Tech",
  MicroMobility = "Micro-Mobility ",
  Mobile = "Mobile ",
  MobileCommerce = "Mobile Commerce",
  MobilityTech = "Mobility Tech",
  MortagageTech = "Mortagage Tech",
  OilANDGas = "Oil & Gas ",
  Oncology = "Oncology ",
  PetTechnology = "Pet Technology ",
  RealEstateTechnology = "Real Estate Technology ",
  RestaurantTechnology = "Restaurant Technology ",
  Ridesharing = "Ridesharing ",
  RoboticsandDrones = "Robotics and Drones ",
  SaaS = "SaaS",
  SpaceTechnology = "Space Technology ",
  SupplyChainTech = "Supply Chain Tech",
  TMT = "TMT ",
  VirtualReality = "Virtual Reality ",
  WearavlesANDQuantifiedSelf = "Wearavles & Quantified Self ",
}
export enum Country {
  Afghanistan = "AF",
  Albania = "AL",
  Algeria = "DZ",
  Argentina = "AR",
  Armenia = "AM",
  Australia = "AU",
  Austria = "AT",
  Azerbaijan = "AZ",
  Bangladesh = "BD",
  Belarus = "BY",
  Belgium = "BE",
  Bolivia = "BO",
  BosniaAndHerzegovina = "BA",
  Brazil = "BR",
  Bulgaria = "BG",
  Cambodia = "KH",
  Cameroon = "CM",
  Canada = "CA",
  Chile = "CL",
  China = "CN",
  Colombia = "CO",
  CostaRica = "CR",
  Croatia = "HR",
  Cuba = "CU",
  Cyprus = "CY",
  CzechRepublic = "CZ",
  Denmark = "DK",
  DominicanRepublic = "DO",
  Ecuador = "EC",
  Egypt = "EG",
  Estonia = "EE",
  Ethiopia = "ET",
  Finland = "FI",
  France = "FR",
  Georgia = "GE",
  Germany = "DE",
  Ghana = "GH",
  Greece = "GR",
  Guatemala = "GT",
  Haiti = "HT",
  Honduras = "HN",
  Hungary = "HU",
  Iceland = "IS",
  India = "IN",
  Indonesia = "ID",
  Iran = "IR",
  Iraq = "IQ",
  Ireland = "IE",
  Israel = "IL",
  Italy = "IT",
  Jamaica = "JM",
  Japan = "JP",
  Jordan = "JO",
  Kazakhstan = "KZ",
  Kenya = "KE",
  Kuwait = "KW",
  Kyrgyzstan = "KG",
  Latvia = "LV",
  Lebanon = "LB",
  Libya = "LY",
  Lithuania = "LT",
  Luxembourg = "LU",
  Malaysia = "MY",
  Mexico = "MX",
  Moldova = "MD",
  Mongolia = "MN",
  Montenegro = "ME",
  Morocco = "MA",
  Mozambique = "MZ",
  Nepal = "NP",
  Netherlands = "NL",
  NewZealand = "NZ",
  Nicaragua = "NI",
  Nigeria = "NG",
  NorthKorea = "KP",
  NorthMacedonia = "MK",
  Norway = "NO",
  Oman = "OM",
  Pakistan = "PK",
  Panama = "PA",
  Paraguay = "PY",
  Peru = "PE",
  Philippines = "PH",
  Poland = "PL",
  Portugal = "PT",
  Qatar = "QA",
  Romania = "RO",
  Russia = "RU",
  SaudiArabia = "SA",
  Senegal = "SN",
  Serbia = "RS",
  Singapore = "SG",
  Slovakia = "SK",
  Slovenia = "SI",
  SouthAfrica = "ZA",
  SouthKorea = "KR",
  Spain = "ES",
  SriLanka = "LK",
  Sudan = "SD",
  Sweden = "SE",
  Switzerland = "CH",
  Syria = "SY",
  Taiwan = "TW",
  Tajikistan = "TJ",
  Tanzania = "TZ",
  Thailand = "TH",
  Tunisia = "TN",
  Turkey = "TR",
  Turkmenistan = "TM",
  Uganda = "UG",
  Ukraine = "UA",
  UnitedArabEmirates = "AE",
  UnitedKingdom = "GB",
  UnitedStates = "US",
  Uruguay = "UY",
  Uzbekistan = "UZ",
  Venezuela = "VE",
  Vietnam = "VN",
  Yemen = "YE",
  Zambia = "ZM",
  Zimbabwe = "ZW",
}
export enum BackingStatus {
  PrivateEquityBacked = "Private Equity Backed",
  VentureCapitalBacked = "Venture Capital Backed",
  AcceleratorORIncubatorBacked = "Accelerator / Incubator Backed",
  AngelBacked = "Angel Backed",
  PrivateDebtFinanced = "Private Debt Financed",
  CorporateBacked = "Corporate Backed",
  FamilyOfficeBacked = "Family Office Backed",
}

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

export interface CaphubUser extends Document {
  email: string;
  name: string;
  passwordHash: string;
  twoFactorSecret: string;
  isTwoFactorEnabled: boolean;
}
