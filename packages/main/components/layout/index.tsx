import React from 'react';
import style from './style';
import { withStyles, WithStyles } from '@material-ui/core';
import Header from '../header';

interface Props extends WithStyles<typeof style> {
  children: React.ReactNode
}

function Layout ({classes, children}: Props) {
  return (
    <React.Fragment>
      <div>
        <Header />
        <div className={classes.toolbar} />
        {children}
      </div>
    </React.Fragment>
  )
}

export default withStyles(style)(Layout);