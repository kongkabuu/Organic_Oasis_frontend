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
// ...

const hardCodedProducts = [
  {
    id: 1,
    name: "Fish",
    description: "Fresh fish for a delicious meal.",
    price: 10.99,
    category: "1",
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
  {
    id: 17,
    name: "Ginger",
    description: "Zesty ginger for a spicy kick in your dishes.",
    price: 1.79,
    image: "https://docs.google.com/document/d/1saf7047WEAy5KrSna0K_tjahA8-kmYZHkI8D6626bkY/edit?usp=sharing",
  },
  {
    id: 18,
    name: "Spice",
    description: "A blend of aromatic spices for flavor enhancement.",
    price: 2.99,
    image: "https://i.pinimg.com/236x/94/19/0d/94190d67ed86f2fae20b83f64a21eba0.jpg",
  },
  {
    id: 19,
    name: "Grounded Black Pepper",
    description: "Finely grounded black pepper for seasoning.",
    price: 1.49,
    image: "https://i.pinimg.com/236x/5c/88/a1/5c88a1050a6fad2d373096e9a42800a9.jpg",
  },
  {
    id: 20,
    name: "Black Pepper",
    description: "Whole black peppercorns for a bold flavor.",
    price: 1.99,
    image: "https://i.pinimg.com/236x/83/44/5d/83445d44b196991b6239e6401df6dffd.jpg",
  },
  {
    id: 21,
    name: "Cloves",
    description: "Aromatic cloves for both sweet and savory dishes.",
    price: 2.25,
    image: "https://i.pinimg.com/236x/8b/b9/83/8bb98322e9447ea05c845adbcd77f232.jpg",
  },
  {
    id: 22,
    name: 'Mango',
    description: 'Ripe and juicy mango',
    price: 2.49,
    image: 'https://i.pinimg.com/564x/7b/73/63/7b7363777ae7e52aae545603b0b96b5b.jpg',
  },
  {
    id: 23,
    name: 'Banana',
    description: 'Fresh and ripe banana',
    price: 0.49,
    image: 'https://i.pinimg.com/564x/bb/e0/e3/bbe0e3e2e43f86c3564d4b7322cdc537.jpg',
  },
  {
    id: 24,
    name: 'Sukuma',
    description: 'Fresh sukuma',
    price: 1.29,
    image: 'https://i.pinimg.com/236x/dc/de/56/dcde560138c6560a62522d35100b1efe.jpg',
  },
  {
    id: 25,
    name: 'Sukuma Real Promax',
    description: 'Sukuma with added health benefits',
    price: 1.49,
    image: 'https://i.pinimg.com/564x/41/14/81/4114818e2225efaac57854683d50adaf.jpg',
  },
  {
    id: 26,
    name: 'Dania',
    description: 'Fresh dania (coriander)',
    price: 0.89,
    image: 'https://i.pinimg.com/236x/09/57/4e/09574e5106629fdab39641e05a7507a9.jpg',
  },
  {
    id: 27,
    name: 'Lemon',
    description: 'Zesty and refreshing lemon',
    price: 0.69,
    image: 'https://i.pinimg.com/236x/93/14/e0/9314e0afc70fa83e61c29e907f7ad739.jpg',
  },
  {
    id: 28,
    name: 'Cucumber',
    description: 'Cool and crisp cucumber',
    price: 0.79,
    image: 'https://i.pinimg.com/236x/ef/15/3a/ef153a2fabe63a2dd9f1e240e42c0b7e.jpg',
  },
  {
    id: 29,
    name: 'Avocado',
    description: 'Creamy and nutritious avocado',
    price: 1.99,
    image: 'https://i.pinimg.com/236x/c2/f9/9b/c2f99b24835f534d2f7c5c585f84bf4d.jpg',
  },
  {
    id: 30,
    name: 'Onions (White)',
    description: 'Fresh white onions',
    price: 0.49,
    image: 'https://i.pinimg.com/236x/b0/b4/5b/b0b45b68b3ceb80a04c6e40b05f9debe.jpg',
  },
  {
    id: 31,
    name: 'String Onions',
    description: 'Bunch of string onions',
    price: 1.29,
    image: 'https://i.pinimg.com/236x/a4/82/c4/a482c4130eee686a4c6206667076818e.jpg',
  },
  {
    id: 32,
    name: 'Hoho (Bell Pepper)',
    description: 'Colorful and crunchy bell pepper',
    price: 1.19,
    image: 'https://i.pinimg.com/236x/db/1e/38/db1e388746cddbd95eb33be91bcc247f.jpg',
  },
  {
    id: 33,
    name: 'Cauliflower',
    description: 'Fresh cauliflower head',
    price: 2.29,
    image: 'https://i.pinimg.com/564x/d1/04/1e/d1041e91027fdaebce9ac8c40645147b.jpg',
  },
  {
    id: 34,
    name: 'Berries Mix',
    description: 'Assorted fresh berries',
    price: 3.99,
    image: 'https://i.pinimg.com/236x/7b/fb/a6/7bfba68c0179099689eeb06ae49ec64c.jpg',
  },
  {
    id: 35,
    name: 'Carrots',
    description: 'Crunchy and healthy carrots',
    price: 1.29,
    image: 'https://i.pinimg.com/236x/e7/e9/9f/e7e99fd291b'
  },
];
return (
  <PageWrapper>
    <h1 style={{ color: '#19C048', textAlign: 'center' }}>{category} Products</h1>
    <ProductContainer>
      {hardCodedProducts.map((product) => (
        <ProductCard key={product.id}>
          <Link to={`/product/${product.id}`}>
            <ProductTitle>{product.name}</ProductTitle>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
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
//   );
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
