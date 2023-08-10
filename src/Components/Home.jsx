
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

const HomeContainer = styled.div`
  display: block;
  text-align: center;
`;
const FeaturedProductsText = styled.h1`
  color: #19C048;
  font-weight: bold;
`;
const CardContainer = styled(Card)`
  width: 343px;
  height: 298px;
  margin: 10px;
  display: inline-block;
  border-radius: 15px;
`;
const CardImage = styled(CardMedia)`
  height: 75%;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const CardName = styled(Typography)`
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  transform: translateY(-0.3cm);
`;
const ActionButton = styled(Button)`
  background-color: #19C048;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PercentageText = styled.span`
  margin-left: 5px;
`;
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  margin-bottom: 20px;
`;
const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
`;


export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:3000/products')
      .then((response) => response.json())
      .then((data) => setFeaturedProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <HomeContainer>
      <FeaturedProductsText>Featured Products</FeaturedProductsText>
      <CardGrid>
        {Array.isArray(featuredProducts) ? (
          featuredProducts.map((product) => (
            <CardColumn key={product.id}>
              <CardContainer>
                <CardImage component="img" alt={product.name} image={`http://localhost:3000${product.image.url}`} />
                <CardContent>
                  <CardName gutterBottom variant="h5" component="div">
                    {product.name}
                  </CardName>
                  <IconContainer>
                    <ThumbUpAltOutlinedIcon />
                    <PercentageText>{product.likes}%</PercentageText>
                  </IconContainer>
                </CardContent>
                <CardActions>
                  <ActionButton>
                    <ThumbUpAltOutlinedIcon />
                  </ActionButton>
                  <Button size="small">:heavy_plus_sign:</Button>
                </CardActions>
              </CardContainer>
            </CardColumn>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </CardGrid>
    </HomeContainer>
  );
}
