import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
// import { useCart } from './CartContext';

const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ProductImage = styled.img`
  max-width: 300px;
  margin-bottom: 20px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductSeller = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;
const AddToCartButton = styled.button`
  font-size: 16px;
  background-color: #19C048;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // const { addToCart, cartItems } = useCart();

  // const handleAddToCart = (productId) => {
  //   const selectedProduct = {
  //     ...product,
  //     id: productId
  //   };
  //   setCartItems(prevCartItems => [...prevCartItems, selectedProduct]);
  // };


  useEffect(() => {
    fetch(`https://organic-5ku0.onrender.com/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Use the addToCart function from the context
    }
  };
  if (!product) return <div>Loading...</div>;

  return (
    <ProductDetailsWrapper>
      <ProductImage src={`https://organic-5ku0.onrender.com${product.image.url}`} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.desc}</ProductDescription>
      <ProductPrice>Price: ${product.price}</ProductPrice>
      <ProductSeller>Seller: {product.user_id}</ProductSeller>
      <AddToCartButton onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </AddToCartButton>
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
