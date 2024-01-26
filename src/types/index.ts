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
