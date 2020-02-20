import React from 'react';
import { 
  withStyles, 
  WithStyles,
  Paper,
  Typography
} from '@material-ui/core';
import style from './style';

interface Props extends WithStyles<typeof style> {}

function MainError (props: Props) {
  const { classes } = props;

  return (
    <div className={classes.outer}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Oops, you shouldn't be here</Typography>
        <Typography variant="body1" className={classes.text}>You don't have access to this account</Typography>
        <a href="https://whitepaper.io">Go back to whitepaper.io</a>
      </Paper>
    </div>
  );
}

export default withStyles(style)(MainError);
