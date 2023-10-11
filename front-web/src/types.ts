export type City = 'Uberaba' | 'Uberlândia' | 'Araguari' | 'Ituiutaba';

export type FilterData = {
  city?: City;
};

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type SalesBySummaryType = {
  sum: number;
};
