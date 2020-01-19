import React from 'react';
import style from './style';
import { 
  withStyles,
  WithStyles,
  AppBar, 
  Toolbar, 
  Grid,
  Button
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
        <div className={classes.links}>

        </div>
        <div>
          <Link href="/login">
            <Button color="primary" className={classes.button}>
              Log In
            </Button>
          </Link>
          <Link href="/register">
            <Button color="secondary" variant="contained">
              Register
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(style)(Header);