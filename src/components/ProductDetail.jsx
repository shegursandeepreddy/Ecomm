import React, { useEffect, useState } from 'react';
import "./ProductDetail.css"
import { useParams } from 'react-router-dom';
import products from './products'
const ProductDetail = ({ addToCart }) => {

const [items, setItems] = useState(products)
const [product, setProduct] = useState({})
//   const product =  {
//     id: 7,
//     name: 'Power Bank',
//     price: 70,
//     description: 'This is power bank. It is 10000 mAh.',
//     type: 'accessories',
// }

  const { id } = useParams();
  // console.log(items)

  useEffect(()=> {
    const filterProduct = items.find((prod) => prod.id === Number(id) )
    setProduct(filterProduct)
  },[products, id])

  const generateDescription = () => {
    let description = '';
    switch (product.type) {
      case 'shoe':
        description = `This is a pair of ${product.name}. It is priced at $${product.price} | Men's Running Shoes - Lightweight and Durable | 
        Athletic Shoes - Stylish and Supportive | All-Terrain Grip and Protection`;
        break;
      case 'phone':
        description = `This is a ${product.name}. It is priced at $${product.price} | Advanced Smartphone with High-Resolution Display |
        Sleek and Powerful Smartphone for Modern Connectivity | Cutting-Edge Camera and Video Capabilities`;
        break;
      case 'accessories':
        description = `This is ${product.name}. It is priced at $${product.price} |  True Wireless Freedom and Crystal Clear Sound | 
        Premium Protection with Card Slots | Secure and Convenient Phone Holder for the Road`;
        break;
      default:
        description = `This is ${product.name}. It is priced at $${product.price}.`;
    }
    return description;
  };
  return (
    <div className='product-card'>
      <h1>{product.name}</h1>
      <div className='product-container'>
        <img src={"../"+product.image} alt={product.name} />
        <div className='product-description'>
          <h3>{generateDescription()}</h3>
          <hr />
          <div>
            <p><b>Name: </b>{product.name}</p>
            <p><b>Description: </b>{product.description}</p>
            <p><b>Color:</b> Black</p>
            <p><b>Type:</b> {product.type}</p>
            <p><b>Warranty:</b> {product.warranty}</p>
            <p><b>Rating:</b> 4.2 Stars <i>(1.2k)</i></p>
          </div>
          <hr />
          <div className="product-details-bottom">
            <h3>Price: $ {product.price}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
