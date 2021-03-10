import React from 'react';
import {BaseCss, MargeCss} from './../components/embed/EmbedCss';
// Material ui
import {makeStyles, Paper, Typography} from '@material-ui/core';
// components
import Layout from './../components/layouts/Layout';
import data from './../routes/data.json';

const useStyles = makeStyles((theme) => ({
  spacing: 1,
  paper : {
    padding: `${theme.spacing(0.5)}rem`,
    '& > h4' : {
      //for title
      paddingBottom : `${theme.spacing(0.2)}rem`,
    }
  },
}));


const {css} = data;

const PartCss = data => {

  const classes = useStyles();

  return (
    <Layout data={css}>
      <Paper elevation={1} className={classes.paper}>
        <Typography variant="h4">Introduction</Typography>
        <Typography paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In suscipit harum cupiditate reprehenderit accusamus animi, esse maxime veritatis odit accusantium dolorum qui tempora perferendis quaerat voluptatem, sunt itaque vero ea! Dolore aperiam distinctio voluptas quae ad, unde repellat et illum tempore debitis, deserunt minima sequi. Dolorum reiciendis similique dolores ut unde, recusandae cupiditate ex odio nihil possimus, minima vero eligendi animi perferendis nulla eius dolore architecto! Molestiae facere vero voluptate aperiam ea in quod nulla molestias vel. Nam quos fugiat consequuntur, voluptatum placeat ab dolores minima quaerat soluta, alias, reiciendis qui! Magni quo doloremque veniam excepturi, laborum laboriosam, vero numquam.
        </Typography>
        <BaseCss/>
        <MargeCss/>

      </Paper>
    </Layout>
  )
}

export default PartCss;
