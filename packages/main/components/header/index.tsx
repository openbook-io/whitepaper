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
  MenuItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList
} from '@material-ui/core';
import Link from 'next/link';
import LoggedIn from '../loggedIn';
import Router from 'next/router';
import { useApolloClient } from '@apollo/react-hooks';
import { destroyCookie } from 'nookies';
import { Avatar } from '@whitepaper/ui';
import { useUser } from '../../utils/userContext';

interface Props extends WithStyles<typeof style> {}

function Header (props: Props) {
  const { classes } = props;
  const client = useApolloClient();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const user = useUser();

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleLogout = () => {
    setOpen(false);
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
            <IconButton ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}>
              <Avatar className={classes.image} type="user" asset={user && user.avatar} size={38} />
            </IconButton>
          </LoggedIn>
          <Popper open={open} anchorEl={anchorRef.current} placement="bottom-end" role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: 'center top' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow">
                    <MenuItem onClick={(event) => {handleClose(event); Router.push('/edit-profile');}}>Edit Profile</MenuItem>
                    <MenuItem onClick={(event) => {handleClose(event); Router.push('/my-organizations');}}>My Organizations</MenuItem>
                    <MenuItem onClick={(event) => {handleClose(event); Router.push('/settings');}}>Settings</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
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