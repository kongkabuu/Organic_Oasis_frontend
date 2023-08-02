import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import rezeda from './Assets/rezeda.jpg';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

// Styled Component for the Card
const CardContainer = styled(Card)`
  max-width: 345px;
  margin: 10px;
  display: inline-block;
`;

export default function Home() {
  return (
    <>
      <CardContainer>
        <CardMedia component="img" alt="product" height="300" image={rezeda} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Milk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <ThumbUpAltOutlinedIcon />
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardContainer>

      {/* Repeat the CardContainer for other cards */}
      <CardContainer>
        {/* Card 2 content */}
      </CardContainer>
      <CardContainer>
        {/* Card 3 content */}
      </CardContainer>

      {/* New row */}
      <CardContainer>
        {/* Card 4 content */}
      </CardContainer>
      <CardContainer>
        {/* Card 5 content */}
      </CardContainer>
      <CardContainer>
        {/* Card 6 content */}
      </CardContainer>
    </>
  );
}
