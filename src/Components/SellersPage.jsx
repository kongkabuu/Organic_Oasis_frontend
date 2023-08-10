import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SellersPage.css';
import { useAuth } from './AuthContext';

export default function SellersPage({ loggedInUserId }) {
  const { isLoggedIn } = useAuth(); // Use isLoggedIn from useAuth



  const [seller, setSeller] = useState({});
  const [newProductName, setNewProductName] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');

  useEffect(() => {

      axios.get(`http://127.0.0.1:3000/users`)
        .then(response => {
          setSeller(response.data);

        })
        .catch(error => {
          console.error('Error fetching seller:', error);
        });
    }
  , []);

  const handleAddProduct = () => {
    // ... your existing logic for adding a new product
  };

  return (
    <div className="sellers-page">
      <div className="seller-container">
        <div className="seller-profile">
          <div className="seller-info">
            <div className="seller-header">
              <div className="seller-avatar">
                <img src={seller.image && seller.image.url} alt={seller.name} />
              </div>
              <div className="user-details">
                <h1 className="user-name">{seller.name}</h1>
                <p className="user-contact">Contact: {seller.contacts}</p>
                {/* Add other seller information as needed */}
              </div>
            </div>
            <div className="seller-products">
              {/* Render seller's products */}
            </div>
          </div>
          <div className="seller-actions">
            <button className="add-product-btn" onClick={handleAddProduct}>
              Add New Product
            </button>
          </div>
        </div>
        <div className="product-form">
          <h3>Add New Product</h3>
          <form>
            {/* Add input fields for new product */}
            <button type="button" onClick={handleAddProduct}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
