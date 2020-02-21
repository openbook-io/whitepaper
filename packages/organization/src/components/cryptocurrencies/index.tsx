import React from 'react';
import { 
  withStyles, 
  WithStyles,
  Paper,
  Typography
} from '@material-ui/core';
import style from './style';

interface Props extends WithStyles<typeof style> {
  cryptocurrencies: any
}

function Cryptocurrencies (props: Props) {
  const { classes, cryptocurrencies } = props;

  return (
    <div className={classes.outer}>
      <h1>Cryptocurrencies</h1>
      {cryptocurrencies.map((cryptocurrency: any) => {
        return (<div>{cryptocurrency.name}</div>)
      })}
    </div>
  );
}

export default withStyles(style)(Cryptocurrencies);
