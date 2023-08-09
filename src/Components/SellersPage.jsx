import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SellersPage.css';

const SellersPage = () => {
  const [sellers, setSellers] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/sellers') // Update the URL as needed
      .then(response => {
        setSellers(response.data);
      })
      .catch(error => {
        console.error('Error fetching sellers:', error);
      });
  }, []);

  const handleAddProduct = (sellerId) => {
    const newProduct = {
      name: newProductName,
      description: newProductDescription,
      price: parseFloat(newProductPrice),
      image: newProductImage,
      category: newProductCategory,
    };

    axios.post(`http://127.0.0.1:3000/sellers/${sellerId}/products`, newProduct)
      .then(response => {
        // Update the sellers state with the new product
        const updatedSellers = sellers.map(seller => {
          if (seller.id === sellerId) {
            return {
              ...seller,
              products: [...seller.products, response.data],
            };
          }
          return seller;
        });
        setSellers(updatedSellers);

        // Clear the form fields
        setNewProductName('');
        setNewProductDescription('');
        setNewProductPrice('');
        setNewProductImage('');
        setNewProductCategory('');
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div className="sellers-page">
      <div className="container">
        {sellers.map(seller => (
          <div key={seller.id} className="seller-profile">
            <div className="profile-info">
              <div className="profile-pic">
                <img src={seller.profile_pic} alt={seller.name} />
              </div>
              <h2 className="seller-name">{seller.name}</h2>
              <p className="contact-location">Contact: {seller.contacts}</p>
              <p className="contact-location">Location: {seller.location}</p>
              <button
                className="add-product-btn"
                onClick={() => handleAddProduct(seller.id)}
              >
                Add New Product
              </button>
            </div>
            {/* Product list and form go here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellersPage;
