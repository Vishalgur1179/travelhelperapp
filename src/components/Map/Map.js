import React from 'react';
import GoogleMapReact from 'google-map-react';
import {  Paper,Typography,useMediaQuery } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';

const Map = ({setCoordinates,setBounds,coordinates}) => {
  const classes=useStyles();
  const isMobile=useMediaQuery('(min-width:600px)');
  // const coordinates={lat:0,lng:0};
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
           bootstrapURLKeys={{key:'AIzaSyCSuZ-i5xvFS1v8unrqHJZFGO4B1SLz8Qo'}}
           defaultCenter={coordinates}
           center={coordinates}
           defaultZoom={14}
           margin={[50,50,50,50]}
           options={''}
           onChange={(e)=>{
            setCoordinates({lat:e.center.lat,lng:e.center.lng});
            setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
           }}
           onChildClick={''}
      >
        
      </GoogleMapReact>
    </div>
  );
}

export default Map