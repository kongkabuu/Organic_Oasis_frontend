import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProductTitle = styled.h2`
  font-size: 20px;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #19C048;
  margin: 10px 0;
`;

const AddToCartButton = styled.button`
  font-size: 14px;
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
    fetch(`https://organic-5ku0.onrender.com/products?category=${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [category]);

  const handleAddToCart = (productId) => {
    fetch('https://organic-5ku0.onrender.com/order_items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: productId,
        quantity: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added to cart:', data);
        window.location.href = '/cart';
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
              <ProductImage src={product.image} alt={product.name} />
              <ProductDetails>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>Price: ${product.price}</ProductPrice>
                <AddToCartButton onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </AddToCartButton>
              </ProductDetails>
            </Link>
          </ProductCard>
        ))}
      </ProductContainer>
    </PageWrapper>
  );
};


export default Products;

//   return (
//     <PageWrapper>
//       <h1 style={{ color: '#19C048', textAlign: 'center' }}>{category} Products</h1>
//       <ProductContainer>
//         {products.map((product) => (
//           <ProductCard key={product.id}>
//              <Link to={`/product/${product.id}`}>
//             <ProductTitle>{product.name}</ProductTitle>
//             <ProductDescription>{product.description}</ProductDescription>
//             <ProductPrice>Price: ${product.price}</ProductPrice>
//             </Link>
//             <AddToCartButton onClick={() => handleAddToCart(product.id)}>
//               Add to Cart
//             </AddToCartButton>
//           </ProductCard>
//         ))}
//       </ProductContainer>
//     </PageWrapper>
//   );<ChamaImage src={img} alt={chama.name} />
// };




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
