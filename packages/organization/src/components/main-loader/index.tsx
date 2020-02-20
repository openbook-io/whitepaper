import React from 'react';
import { 
  withStyles, 
  WithStyles,
  CircularProgress
} from '@material-ui/core';
import style from './style';

interface Props extends WithStyles<typeof style> {}

function MainLoader (props: Props) {
  const { classes } = props;

  return (
    <div>
      <CircularProgress className={classes.loader} size={80} />
    </div>
  );
}

export default withStyles(style)(MainLoader);
