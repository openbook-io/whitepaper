import React from 'react';
import { 
  withStyles, 
  WithStyles,
  CircularProgress
} from '@material-ui/core';
import style from './style';

interface Props extends WithStyles<typeof style> {}

function PageLoader (props: Props) {
  const { classes } = props;

  return (
    <div className={classes.pageLoader}>
      <CircularProgress className={classes.loader} size={50} />
    </div>
  );
}

export default withStyles(style)(PageLoader);
