import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

import juice from "./Assets/juice.jpg";
import bread from "./Assets/bread.jpg";
import r from "./Assets/r.jpg";
import vegetables from "./Assets/vegetables.jpg";
import spices from "./Assets/spices.jpg";
import milk from "./Assets/milk.jpg";

const HomeContainer = styled.div`
  text-align: center;
`;

const FeaturedProductsText = styled.h1`
  color: #19c048;
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
  background-color: #19c048;
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

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px;
`;

export default function Home() {
  // Sample data for 6 cards (replace with your actual data)
  const featuredProducts = [
    { id: 1, name: "Juice Lava Price:$4.99", image: juice, likes: 95 },
    { id: 2, name: "Baked Wonders Price:$3.99", image: bread, likes: 85 },
    { id: 3, name: "SteakHouse Price:$5.99", image: r, likes: 90 },
    { id: 4, name: "Organic Mart Price:$3.99", image: vegetables, likes: 92 },
    { id: 5, name: "Spice Delight Price:$1.99", image: spices, likes: 89 },
    { id: 6, name: "Creamy Creations Price:$7.0", image: milk, likes: 88 },
  ];

  return (
    <HomeContainer>
      <FeaturedProductsText>Featured Products</FeaturedProductsText>
      <div>
        {[0, 1].map((rowIndex) => (
          <CardRow key={rowIndex}>
            {[0, 1, 2].map((colIndex) => (
              <CardColumn key={colIndex}>
                <CardContainer>
                  <CardImage
                    component="img"
                    alt={featuredProducts[rowIndex * 3 + colIndex].name}
                    image={featuredProducts[rowIndex * 3 + colIndex].image}
                  />
                  <CardContent>
                    <CardName gutterBottom variant="h5" component="div">
                      {featuredProducts[rowIndex * 3 + colIndex].name}
                    </CardName>
                    <IconContainer>
                      <ThumbUpAltOutlinedIcon />
                      <PercentageText>
                        {featuredProducts[rowIndex * 3 + colIndex].likes}%
                      </PercentageText>
                    </IconContainer>
                  </CardContent>
                  <CardActions>
                    <ActionButton>
                      <ThumbUpAltOutlinedIcon />
                    </ActionButton>
                    <Button size="small">➕</Button>
                  </CardActions>
                </CardContainer>
              </CardColumn>
            ))}
          </CardRow>
        ))}
      </div>
    </HomeContainer>
  );
}
