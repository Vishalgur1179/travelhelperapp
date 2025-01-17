import React from 'react';
import { Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';
import { Phone } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';
const PlaceDetails = ({place}) => {
  return (
    <Card elevation={6}>
      <CardMedia
        style={{height:350}}
        image={place.photo?place.photo.image.large.url:'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name} </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>

        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
          
        </Box>
      </CardContent>
    </Card>
  );
}

export default PlaceDetails