import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ProductsList from './components/ProductsList';
import products  from './components/products.js'


function App() {
  const [items, setItems] = useState(products);
  const [filteredItems, setFilteredItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState({ type: "", price: "highest" });
  const [searchQuery, setSearchQuery] = useState('')

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // Fetch items from API and setItems
    // For simplicity we'll use static data
    // const fetchedItems = [
    //   { id: 1, name: 'Product 1', price: 200, type: 'Television' },
    //   { id: 2, name: 'Product 2', price: 100, type: 'Television' },
    //   { id: 3, name: 'Product 3', price: 300, type: 'Television' },
    //   { id: 4, name: 'Product 4', price: 400, type: 'Mobile' },
    //   { id: 5, name: 'Product 5', price: 500, type: 'Mobile' },
    //   { id: 6, name: 'Product 6', price: 600, type: 'Mobile' },
    //   { id: 7, name: 'Product 7', price: 700, type: 'Tablet' },
    //   { id: 8, name: 'Product 8', price: 800, type: 'Tablet' },
    //   { id: 9, name: 'Product 9', price: 900, type: 'Tablet' },
    //   // more items...
    // ];
    setItems(products);
    setFilteredItems(products);
  }, [products]);

  const handleSearch = (event) => {
    const searchQuery1 = event.target.value.toLowerCase();
    setSearchQuery(searchQuery1)
     if(searchQuery1 === ''){
      setFilteredItems(products);
    }
    const items1 = [...items]
    const newFilteredItems = items1.filter(item => item.name.toLowerCase().includes(searchQuery));
    setFilteredItems(newFilteredItems);
  };


  useEffect(() => {
    // Apply filters whenever items or filter state changes
    let newItems = [...items];

    if (filter.type) {
      newItems = newItems.filter(item => item.type === filter.type);
    }

    if (filter.price === 'highest') {
      newItems = newItems.sort((a, b) => b.price - a.price);
    } else {
      newItems = newItems.sort((a, b) => a.price - b.price);
    }

    setFilteredItems(newItems);
  }, [filter]);

  // Adds an item to the cart

  const addToCart = (item) => {
    setCartItems(prevCartItems => [...prevCartItems, item]);
  };

  const removeFromCart = (item) => {
    const removeItems = cartItems.filter((prod)=> prod.name !== item.name )
    setCartItems(removeItems)
  }
  return (
    <Router>
    <Navbar cartItems = {cartItems} handleSearch = {handleSearch}/>
    <Routes>
    <Route path="/" exact element={<Home products= {filteredItems} addToCart = {addToCart}/>} />
    <Route path="/items" element={<ProductsList products= {filteredItems} addToCart = {addToCart} setFilter= {setFilter}/>} />
    <Route path="/cart" element={<Cart cartItems = {cartItems} removeFromCart={removeFromCart} />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/product-detail/:id" element={<ProductDetail addToCart={addToCart} />} />
    </Routes>
  </Router>
  );
}

export default App;
