import React from 'react';
import { 
  withStyles, 
  WithStyles,
  Paper,
  Typography
} from '@material-ui/core';
import style from './style';
import { Link } from "@reach/router";

interface Props extends WithStyles<typeof style> {
  cryptocurrencies: any
}

function Cryptocurrencies (props: Props) {
  const { classes, cryptocurrencies } = props;

  return (
    <div className={classes.outer}>
      <h1>Cryptocurrencies</h1>
      {cryptocurrencies.map((cryptocurrency: any) => {
        return (<div>{cryptocurrency.name} <Link to={`/edit-coin/${cryptocurrency.id}`}>edit</Link></div>)
      })}
    </div>
  );
}

export default withStyles(style)(Cryptocurrencies);
