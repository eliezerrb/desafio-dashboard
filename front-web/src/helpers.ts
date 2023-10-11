import { SalesByGender } from './types';

export const buildSalesByGenderChart = (sales: SalesByGender[]) => {
  const labels = sales.map((sales) => sales.gender);
  const series = sales.map((sales) => sales.sum);

  return {
    labels,
    series
  };
};
