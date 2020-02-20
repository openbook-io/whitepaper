import React, { useState } from 'react';
import { 
  withStyles, 
  WithStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Tooltip
} from '@material-ui/core';
import style from './style';
import clsx from 'clsx';
import { Link } from '@reach/router';
import Coins from 'mdi-react/CoinsIcon';
import FileDocumentBoxMultipleOutline from 'mdi-react/FileDocumentBoxMultipleIcon';

interface Props extends WithStyles<typeof style> {}

function Sidebar (props: Props) {
  const { classes } = props;

  return (
    <Drawer variant="permanent" className={classes.drawer}
      classes={{
        paper: clsx(classes.paper),
      }}
      open={true}>
      <div className={classes.spacer}>
      </div>
      <List>
        <Link to="/">
          <a>
          <Tooltip title="My Documents" placement="right">
            <ListItem className={classes.listItem} button>
              <ListItemIcon className={classes.listItemIcon}><FileDocumentBoxMultipleOutline /></ListItemIcon>
            </ListItem>
          </Tooltip>
          </a>
        </Link>
        <Link to="/my-coins">
          <a>
          <Tooltip title="My Coins" placement="right">
            <ListItem className={classes.listItem} button>
              <ListItemIcon className={classes.listItemIcon}><Coins /></ListItemIcon>
            </ListItem>
          </Tooltip>
          </a>
        </Link>
      </List>
    </Drawer>
  );
}

export default withStyles(style)(Sidebar);
