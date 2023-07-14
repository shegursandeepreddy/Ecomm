function Filter({ setFilter }) {
    return (
      <div>
        <select onChange={e => setFilter(prevFilter => ({ ...prevFilter, type: e.target.value }))}>
          <option value="">All</option>
          <option value="phone">Phone</option>
          <option value="shoe">Shoe</option>
          <option value="accessories">Accessories</option>
        </select>
  
        <select onChange={e => setFilter(prevFilter => ({ ...prevFilter, price: e.target.value }))}>
          <option value="highest">Highest to Lowest</option>
          <option value="lowest">Lowest to Highest</option>
        </select>
      </div>
    );
  }
  
  export default Filter;
  