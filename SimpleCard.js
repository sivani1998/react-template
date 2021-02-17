import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    padding:20,
    
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
      
        <Typography padding="20px" variant="p" component="p">
        My Name is Ravindra by profession am Software.in 2012,i am looking for investment opportunities for around 10 lakhs along with my office colleagues at that point of time explored lot of options.
        </Typography>
      
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Read More</Button>
      </CardActions>
    </Card>
  );
}
