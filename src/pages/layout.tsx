import React from 'react';
import style from './layout-styles';
import { withStyles, WithStyles } from '@material-ui/core';
import Header from '../components/header';

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