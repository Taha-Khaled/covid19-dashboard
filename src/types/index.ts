import { MultiValue } from "react-select";

export interface StatisticsType {
  date: string;
  states: string;
  positive: string;
  negative: string;
  pending: string;
  hospitalizedCurrently: string;
  hospitalizedCumulative: string;
  inIcuCurrently: string;
  inIcuCumulative: string;
  onVentilatorCurrently: string;
  onVentilatorCumulative: string;
  dateChecked: string;
  death: string;
  hospitalized: string;
  totalTestResults: string;
  lastModified: string;
  recovered?: null;
  total: string;
  posNeg: string;
  deathIncrease: string;
  hospitalizedIncrease: string;
  negativeIncrease: string;
  positiveIncrease: string;
  totalTestResultsIncrease: string;
  hash: string;
}
export interface StatesType {
  state: string;
  notes: string;
  covid19Site: string;
  covid19SiteSecondary?: string;
  covid19SiteTertiary?: string;
  covid19SiteQuaternary?: string;
  covid19SiteQuinary?: string;
  twitter?: string;
  covid19SiteOld: string;
  covidTrackingProjectPreferredTotalTestUnits: string;
  covidTrackingProjectPreferredTotalTestField: string;
  totalTestResultsField: string;
  pui: string;
  pum: boolean;
  name: string;
  fips: string;
}

export type Options = MultiValue<{ label: string; value: string }>;
