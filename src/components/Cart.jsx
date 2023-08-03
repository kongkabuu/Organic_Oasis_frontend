import React, { useState } from 'react';
import "./Cart.css"

const GroceryCart = () => {
  // State to keep track of selected products
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Sample grocery products
  const products = [
    { id: 1, name: 'Apples', price: 1.99 },
    { id: 2, name: 'Bananas', price: 0.99 },
    { id: 3, name: 'Oranges', price: 2.49 },
    // Add more products as needed
  ];

  // Function to add a product to the cart
  const addToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = selectedProducts.filter((product) => product.id !== productId);
    setSelectedProducts(updatedCart);
  };

  // Calculate the total price of selected products
  const getTotalPrice = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h1>Online Grocery Cart</h1>
      <div>
        <h2>Available Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price.toFixed(2)}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price.toFixed(2)}
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default GroceryCart;
