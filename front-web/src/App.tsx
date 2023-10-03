import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <div className="sales-overview-container base-card">
          <SalesByDate />
          <PieChartCard name="" labels={['Feminino', 'Masculino', 'Outro']} series={[40, 30, 30]} />
        </div>
      </div>
    </>
  );
}

export default App;
