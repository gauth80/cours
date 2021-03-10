import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

// components features
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';

const useStyles = makeStyles((theme) => ({
  root : {
    paddingTop: `${theme.spacing(1)}rem`,
    justifyContent: 'center',
    [theme.breakpoints.between('xs','md')] : {
      transform: 'translate(-100px)',
    }


  },
  content: {
    margin: `0 ${theme.spacing(0.15)}rem`,
    backgroundColor: 'whitesmoke',
  },
  sidebar : {
    backgroundColor: '#111',
  },

}));



const Layout = ({children, data}) => {

  const classes = useStyles();

  return (
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={5} md={4} lg={3} className={classes.sidebar}>
          <Sidebar data = {data || ""} />
        </Grid>

        <Grid item xs={12} sm={6} className={classes.content}>
          <Main>
            {children}
          </Main>
        </Grid>
      </Grid>
  )
}

export default Layout;
