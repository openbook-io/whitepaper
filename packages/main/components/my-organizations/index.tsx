import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import style from './style';

interface Props extends WithStyles<typeof style> {}

function MyOrganizations (props: Props) {
  const { classes } = props;

  return (
    <div className={classes.outer}>
      <Container>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <h1>Your Organizations</h1>
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained">Create Organization</Button>
          </Grid>
        </Grid>
        
      </Container>
    </div>
  );
}

export default withStyles(style)(MyOrganizations);
