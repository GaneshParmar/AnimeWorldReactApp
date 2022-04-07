import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Css/AnimeCard.css';
import { Link } from 'react-router-dom';


export default function AnimeCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt="anime_img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {
              (props.detail).slice(0,100)
            }...
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={"/animeinfo?animeid="+props.animeid}>
        <Button size="small">
          More Detail
        </Button>
      </Link>  
      </CardActions>
    </Card>
  );
}
