import React from 'react';

import {makeStyles} from '@material-ui/core';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//
const useStyles = makeStyles((theme) => ({
  embed : {
    fontSize: '1.2rem',
    lineHeight: '1.5rem',
    transition: 'all .33s',
    boxShadow: '2px 2px 4px #111',

    '&:hover' : {
      transform: 'scale(1.1)',
    },
  },

}));

export const BaseCss = () => {
  const classes = useStyles();
    const codeString = `
      .un-mot {
        color: red;
      }
    `;
    return (
      <SyntaxHighlighter language="css" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
    )
}

export const MargeCss = () => {
  const classes = useStyles();
    const codeString = `
      h1, h2, h3 {
        color: navy;
        font-size: 1.5rem;
      }
    `;

    return (
      <SyntaxHighlighter language="css" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
    )
}
