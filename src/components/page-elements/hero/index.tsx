import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import style from './style';

interface Props extends WithStyles<typeof style> {}

function Hero (props: Props) {
  const { classes } = props;

  return (
    <Grid container className={classes.background} direction="row" justify="center" alignItems="center">
      <Grid item className={classes.text}>
        <Typography className={classes.title} variant="h2" component="h1">Better investments with whitepaper.io</Typography>
        <Typography className={classes.subtitle} variant="h4" component="h2">Analyse whitepapers with other experts</Typography>
        <Link href='/register'>
          <Button size="large" variant="contained" color="secondary">Register Now</Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default withStyles(style)(Hero);
