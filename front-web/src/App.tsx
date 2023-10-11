import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import { FilterData, PieChartConfig, SalesByGender } from './types';
import { buildFilterParams, makeRequest } from './utils/request';
import { buildSalesByGenderChart } from './helpers';
import SalesBySummary from './components/sales-by-summary';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.log('Error to fetch sales by gender');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
    console.log({ filter });
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <div className="sales-overview-container base-card">
          <SalesBySummary filterData={filterData} />
          <PieChartCard name="" labels={salesByGender?.labels} series={salesByGender?.series} />
        </div>
      </div>
    </>
  );
}

export default App;
