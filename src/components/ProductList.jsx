import Filter from "./Filter";
function ProductList({ items, addToCart, setFilter }) {
    return (
      <div>
        <Filter setFilter={setFilter} />
        {items.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductList;
  