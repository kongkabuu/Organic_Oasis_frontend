import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
// import Footer from './Components/Footer';
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 20px;
  text-align: center;
  background-color: #333;
  color: white;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  justify-items: center;
  align-items: start;
`;
const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 280px;
  text-align: center;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
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

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/products?category=${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [category]);

  const handleAddToCart = (productId) => {
    fetch('http://127.0.0.1:3000/order_items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: productId,
        quantity: 1, // You can adjust the quantity as needed
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added to cart:', data);
        window.location.href = '/cart'; // Navigate to the cart page
      })
      .catch((error) => console.error('Error adding to cart:', error));
  };

  return (
    <PageWrapper>
      <h1 style={{ color: '#19C048', textAlign: 'center' }}>{category} Products</h1>
      <ProductContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
             <Link to={`/product/${product.id}`}>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>Price: ${product.price}</ProductPrice>
            </Link>
            <AddToCartButton onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </AddToCartButton>
          </ProductCard>
        ))}
      </ProductContainer>
    </PageWrapper>
  );
};

export default Products;


//   return (
//     <div>
//       <h1 style={{ color: , textAlign: 'center' }}>{category} Products</h1>
//       <ProductContainer>
//         {products.map((product) => (

//             <ProductCard key={product.id}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <button>Add to Cart</button>
//           </ProductCard>
//         ))}
//       </ProductContainer>
//     </div>
//   );
// }
