import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
// materia ui
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  makeStyles  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  spacing: 5,
  root: {
    margin: `${theme.spacing(1)}rem auto`,
    backgroundColor: 'whitesmoke',
  },
  cardContent: {
    padding: theme.spacing(1),
  },
  btnLink : {
    fontSize: `${theme.spacing(0.15)}rem`,
    color: '#f50057',
  },
  body : {
    backrgoundColor: 'red',
  }
}));


const Home = () => {

  const classes = useStyles();

  return (

      <Grid component={Card} className={classes.root} item sm={8} md={7} lg={6}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="image de skill"
            src={process.env.PUBLIC_URL+ '/media/images/home_00.jpg'}
            >
          </CardMedia>
          <CardContent className={classes.CardContent}>
            <Typography component="h2" variant="h4">Hello</Typography>
            <Typography component="p" variant="body1">
              changer les polices <br/>
            avancer le json<br/>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            className={classes.btnLink}
            component={RouterLink}
            to="/part-css"
            >Voir ?
          </Button>
        </CardActions>
      </Grid>
  )
}

export default Home;
