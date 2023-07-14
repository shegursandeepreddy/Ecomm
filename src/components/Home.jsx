import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home({ products, addToCart }) {


  return (
    <div>
      <div className="hero">
        <div>***Buy the best products at the best prices.***</div>
      </div>
      <div className="grid-container">
        {products.map((product, i) => (
          <div key={i} className="card">
            <img src={product.image} alt={product.title} />
            <div className="card-content">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <Link to={`/product-detail/${product.id}`}>View Product Details</Link>
              <div className="bottom-section">
                <h3>{product.price}</h3>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
