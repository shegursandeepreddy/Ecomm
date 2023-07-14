import './Home.css';
import './Cart.css'
function Cart({ cartItems, removeFromCart }) {
    return (
      <div className="cart">
       {cartItems.map((product, i) => (
        <div key={i} className="cart-card">
          <img src= {product.image} alt={product.title} /> {/* Replace "placeholder.jpg" with your image path */}
         <div className='cart-card-desc'>
          <div className="cart-card-content">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4><i>In Stock</i></h4>
            <p>Eligible for FREE Shipping</p>
            <p><b>Color:</b> Black</p>
          </div>
           <div className="cart-bottom-section">
              <h3>$ {product.price}</h3>
              <button onClick={()=> removeFromCart(product)}>Remove</button>
            </div>
            </div>
        </div>
      ))}
      </div>
    );
  }
  
  export default Cart;
  