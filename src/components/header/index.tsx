import React from 'react';
import style from './style';
import { 
  withStyles,
  WithStyles,
  AppBar, 
  Toolbar, 
  Grid,
  Button,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import Link from 'next/link';
import LoggedIn from '../loggedIn';
import Router from 'next/router';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { destroyCookie } from 'nookies';
import MyAvatar from '../my-avatar'

interface Props extends WithStyles<typeof style> {}

function Header (props: Props) {
  const { classes } = props;
  const client = useApolloClient();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    destroyCookie({}, 'token');
    client.resetStore();
    Router.push('/');
  }

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
          <LoggedIn>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MyAvatar className={classes.image} size="80" />
            </IconButton>
          </LoggedIn>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => {handleClose(); Router.push('/profile');}}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
          <LoggedIn dontShow>
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
          </LoggedIn>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(style)(Header);