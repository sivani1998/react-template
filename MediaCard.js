import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../assets/rhyd5.jpeg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Typography size="large" color="primary">
           <RepeatOneIcon/>
         </Typography>
      <CardActionArea>
     
        <CardMedia
          className={classes.media}
         image="../../assets/rhyd5.jpeg"
          
        
         
        />
        <CardContent>
        
          <Typography variant="body2" color="text-body" component="h4">
           WiKIHYD develops the actual science for doing the investments into Real Estate in scientific way
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button size="small" color="primary" align-items="flex-end">
       <ArrowForwardIcon/>
       </Button>
      </CardActions>
    </Card>
  );
}
