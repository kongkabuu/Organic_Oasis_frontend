import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import rezeda from './Assets/rezeda.jpg';
import Sellers from './Sellers';

const HomeContainer = styled.div`
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
  height: 75%; /* Change the height to 75% of the card height */
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

export default function Home() {
  // Sample data for 8 cards (replace with your actual data)
  const featuredProducts = [
    { id: 1, name: 'Product 1', image: rezeda, likes: 95 },
    { id: 2, name: 'Product 2', image: rezeda, likes: 85 },
    { id: 3, name: 'Product 3', image: rezeda, likes: 90 },
    { id: 4, name: 'Product 4', image: rezeda, likes: 92 },
    { id: 5, name: 'Product 5', image: rezeda, likes: 89 },
    { id: 6, name: 'Product 6', image: rezeda, likes: 88 },
    { id: 7, name: 'Product 7', image: rezeda, likes: 93 },
    { id: 8, name: 'Product 8', image: rezeda, likes: 86 },
  ];

  return (
    <HomeContainer>
      <FeaturedProductsText>Featured Products</FeaturedProductsText>
      <div>
        {featuredProducts.map((product) => (
          <CardContainer key={product.id}>
            <CardImage component="img" alt={product.name} image={product.image} />
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
  <IconContainer>
    <ThumbUpAltOutlinedIcon />
    <PercentageText>{product.likes}%</PercentageText>
  </IconContainer>
  <Button size="small">➕</Button>
</CardActions>

          </CardContainer>
        ))}
      </div>
    </HomeContainer>
  );
}
