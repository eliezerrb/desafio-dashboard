import { useEffect, useMemo, useState } from 'react';
import './styles.css';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { FilterData, SalesBySummaryType } from '../../types';
import { formartPrice } from '../../utils/formatters';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  sum: 0
};

function SalesBySummary({ filterData }: Props) {
  const [totalSum, setSummary] = useState(initialSummary);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesBySummaryType>('sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.log('Error to fetch sales summary');
      });
  }, [params]);

  return (
    <div className="sales-by-date-data">
      <div className="sales-by-date-quantity-container">
        <h2 className="sales-by-date-quantity"> {formartPrice(totalSum.sum)}</h2>
        <span className="sales-by-date-quantity-label">Total de vendas</span>
      </div>
    </div>
  );
}

export default SalesBySummary;
