import React from 'react';
import { 
  WithStyles, 
  withStyles,
  Button,
  Typography
} from '@material-ui/core';
import style from './style'
import { Link } from '@reach/router';

interface Props extends WithStyles<typeof style> {}

function NoCoinsPlaceholder(props:  Props) {
  const { classes } = props;
  
  return (
    <div className={classes.container}>
      <img className={classes.placeholder} src="/placeholder-coin.svg" alt="No Coins Placeholder" />
      <Typography variant="h4" gutterBottom>
        Cryptocurrency
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.text}>
        Your organization doesn't seem to have a cryptocurrency added to your account. Click the button below to add your cryptocurrency to your organization
      </Typography>
      <Link to="/add-coin">
        <Button variant="contained" color="primary" className={classes.button}>
          Add Cryptocurrency
        </Button>
      </Link>
    </div>
  );
}

export default withStyles(style)(NoCoinsPlaceholder);
