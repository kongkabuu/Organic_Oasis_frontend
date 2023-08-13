import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './SellersPage.css';

const SellersPage = () => {
  const [sellers, setSellers] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');

  useEffect(() => {
    axios.get('https://organic-5ku0.onrender.com/sellers') // Update the URL as needed

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

    axios.post(`https://organic-5ku0.onrender.com/sellers/${sellerId}/products`, newProduct)

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
            <div className="product-form">
              <h3>Add New Product</h3>
              <form>
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  value={newProductName}
                  onChange={e => setNewProductName(e.target.value)}
                />

                <label htmlFor="productDescription">Product Description</label>
                <textarea
                  id="productDescription"
                  value={newProductDescription}
                  onChange={e => setNewProductDescription(e.target.value)}
                />

                <label htmlFor="productPrice">Product Price</label>
                <input
                  type="number"
                  id="productPrice"
                  value={newProductPrice}
                  onChange={e => setNewProductPrice(e.target.value)}
                />

                <label htmlFor="productImage">Product Image URL</label>
                <input
                  type="text"
                  id="productImage"
                  value={newProductImage}
                  onChange={e => setNewProductImage(e.target.value)}
                />

                <label htmlFor="productCategory">Product Category</label>
                <input
                  type="text"
                  id="productCategory"
                  value={newProductCategory}
                  onChange={e => setNewProductCategory(e.target.value)}
                />

                <button type="submit" onClick={() => handleAddProduct(seller.id)}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellersPage;
