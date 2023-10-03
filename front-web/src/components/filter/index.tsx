import './styles.css';

function Filter() {
  return (
    <div className="filter-container base-card">
      <select className="filter-input">
        <option value="">Selecione uma Cidade</option>
        <option value="MALE">Araguari</option>
        <option value="FEMALE">Americana</option>
        <option value="OTHER">Jundiai</option>
      </select>
    </div>
  );
}

export default Filter;
