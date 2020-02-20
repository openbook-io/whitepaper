import React from 'react';
import { 
  withStyles, 
  WithStyles,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Tooltip
} from '@material-ui/core';
import style from './style';
import { Link } from '@reach/router';
import { Avatar } from '@whitepaper/ui';

interface Props extends WithStyles<typeof style> {}

function Header (props: Props) {
  const { classes } = props;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters={true} className={classes.toolbar}>
        <Grid container justify="center" alignItems="center" className={classes.profile}>
          <Grid item>
          <Link to="/edit-profile">
            <Tooltip title="Profile" placement="right" arrow>
              <div className={classes.avatarLeft}><Avatar type="organization" size={42} /></div>
            </Tooltip>
          </Link>
          </Grid>
        </Grid>
        <Typography variant="h5" color="inherit" className={classes.title}>
          Test
        </Typography>
        {/*<Avatar className={classes.avatarRight} user={me} /> */}
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(style)(Header);
