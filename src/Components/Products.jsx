import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

const ProductContainer = styled.div`
   display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 15px;
  width: 343px;
  height: 298px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  height: 75%;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
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
  align-self: center;

`;



const hardCodedProducts = [
  {
    id: 1,
    name: "Fish",
    description: "Fresh fish for a delicious meal.",
    price: 10.99,
    image: "https://i.pinimg.com/564x/94/62/73/94627336cd9af9bb9a5b7a05033c6e77.jpg",
  },
  // ... Other products ...
  {
    id: 6,
    name: "Graham Beck",
    description: "A fine selection of Graham Beck wines.",
    price: 25.99,
    image: "https://i.pinimg.com/564x/aa/e9/7d/aae97d012303e32a26e1743a61eed61e.jpg",
  },
  {
    id: 7,
    name: "Lanson",
    description: "Exquisite Lanson champagne for special occasions.",
    price: 39.99,
    image: "https://i.pinimg.com/564x/fd/05/70/fd057014eebc02e401782578b0473f1c.jpg",
  },
  {
    id: 8,
    name: "Green Apple",
    description: "Crisp and juicy green apples for a healthy snack.",
    price: 1.49,
    image: "https://i.pinimg.com/564x/47/51/32/47513224f461c895d4dac148701f82c4.jpg",
  },
  {
    id: 9,
    name: "Pawpaw",
    description: "Delicious tropical pawpaw for a refreshing treat.",
    price: 2.99,
    image: "https://i.pinimg.com/564x/f7/32/2c/f7322cca82c1b67a36a53647e6139c17.jpg",
  },
  {
    id: 10,
    name: "Pine Apple",
    description: "Juicy and sweet pine apple for your fruit cravings.",
    price: 3.49,
    image: "https://i.pinimg.com/564x/65/99/9c/65999c55c5e3ff77a75086569c31901e.jpg",
  },
  {
    id: 11,
    name: "Tangerines",
    description: "Juicy tangerines for a burst of citrus flavor.",
    price: 2.25,
    image: "https://i.pinimg.com/236x/72/e5/27/72e5274f4722f6fd06de47612e90d5a8.jpg",
  },
  {
    id: 12,
    name: "Lemons",
    description: "Zesty lemons to brighten up your dishes.",
    price: 1.75,
    image: "https://i.pinimg.com/236x/51/41/09/5141097e9d453ec30c1926e05bd80e0a.jpg",
  },
  {
    id: 13,
    name: "Peas",
    description: "Sweet and tender peas for your recipes.",
    price: 1.99,
    image: "https://i.pinimg.com/236x/73/f7/15/73f7154d63cd7ba5c76a4846f07853e1.jpg",
  },
  {
    id: 14,
    name: "Salad",
    description: "Fresh salad greens for a healthy meal.",
    price: 4.49,
    image: "https://i.pinimg.com/236x/15/53/f5/1553f507ae736176e250efdc12c43b28.jpg",
  },
  {
    id: 15,
    name: "Paprika",
    description: "Rich and flavorful paprika for your dishes.",
    price: 1.99,
    image: "https://i.pinimg.com/564x/f3/f2/1b/f3f21b83d892682a9dcf83328c5588e4.jpg",
  },
  {
    id: 16,
    name: "Cinnamon",
    description: "Warm and aromatic cinnamon for your recipes.",
    price: 2.49,
    image: "https://i.pinimg.com/564x/e9/a5/a5/e9a5a55bcdd050f181a10a8b5ea4dd32.jpg",
  },
];

// ...
const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch(`https://organic-5ku0.onrender.com/products?category=${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [category]);
// ...
const mergedProducts = [...products, ...hardCodedProducts];


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
        {mergedProducts.map((product) => (
          <ProductCard key={product.id}>
            <Link to={`/product/${product.id}`}>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductImage src={product.image} alt={product.name} />
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



