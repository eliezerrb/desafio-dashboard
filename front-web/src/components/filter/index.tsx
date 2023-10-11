import { useState } from 'react';
import { City, FilterData } from '../../types';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [city, setCity] = useState<City>();

  const onChangeCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value as City;
    setCity(selectedCity);
    // usar selectedCity para ter a garantia que terá o valor atualizado, pois toda a mudança de estado é operação assincrona, se não tivesse o selectedGender teria que fazer useEfect passando a dependencia
    onFilterChange({ city: selectedCity });
  };

  return (
    <div className="filter-container base-card">
      <select className="filter-input" value={city} onChange={onChangeCity}>
        <option value="">Selecione uma Cidade</option>
        <option value="1">Uberaba</option>
        <option value="2">Uberlândia</option>
        <option value="3">Araguari</option>
        <option value="4">Ituiutaba</option>
      </select>
    </div>
  );
}

export default Filter;
