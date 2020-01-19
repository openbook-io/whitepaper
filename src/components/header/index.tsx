import React from 'react';
import style from './style';
import { 
  withStyles,
  WithStyles,
  AppBar, 
  Toolbar, 
  Grid
} from '@material-ui/core';
import Link from 'next/link';

interface Props extends WithStyles<typeof style> {}

function Header (props: Props) {
  const { classes } = props;

  return (
    <AppBar position="fixed">
      <Toolbar disableGutters={false} className={classes.toolbar}>
        <Link href="/">
          <a className={classes.logoLink}>
            <Grid container direction="row" justify="center" alignItems="center">
              <Grid item><img className={classes.logoImg} src="/logo_white.svg" /></Grid>
              <Grid item className={classes.logoText}>whitepaper</Grid>
            </Grid>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(style)(Header);