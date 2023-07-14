import React from 'react';
import './products.css';
import Filter from './Filter';
import { Link } from 'react-router-dom';

// import products  from './products.js'
function ProductList({products, addToCart, setFilter}) {
  // const products = Array(10).fill().map((_, i) => ({
  //   title: `Product ${i + 1}`,
  //   description: 'This is a placeholder product description.',
  //   price: '$100.00'
  // }));


  return (
    <div>
        <div className="hero">
        <Filter setFilter={setFilter} />
      </div>
    <div className="grid-container">
      {products.map((product, i) => (
        <div key={i} className="product">
          <img src= {product.image} alt={product.title} /> {/* Replace "placeholder.jpg" with your image path */}
          <div className="product-content">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <Link to={`/product-detail/${product.id}`} >
              View Product Details
            </Link>
            <div className="product-bottom-section">
              <h3>{product.price}</h3>
           
              <button onClick={()=> addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProductList;
