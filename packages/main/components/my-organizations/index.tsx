import React from 'react';
import { 
  withStyles, 
  WithStyles, 
  Container,
  Grid,
  Button,
  CircularProgress,
  Typography
} from '@material-ui/core';
import Link from 'next/link';
import style from './style';
import { useQuery } from '@apollo/react-hooks';
import { MY_ORGANIZATION } from '../../queries/organization';
import OrganizationCard from '../_ui/organization-card';

interface Props extends WithStyles<typeof style> {}

function MyOrganizations (props: Props) {
  const { classes } = props;
  const myOrganizations = useQuery(MY_ORGANIZATION);

  const renderOrganizations = (organizations) => {
    return organizations.myOrganizations.map((organization) => (
      <Grid item key={organization.slug} md={4}>
        <OrganizationCard organization={organization} />
      </Grid>
    ))
  }

  return (
    <div className={classes.outer}>
      <Container>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5">
              Your Organizations
            </Typography>
          </Grid>
          <Grid item>
            <Link href="/create-organization">
              <Button color="primary" variant="contained">Create Organization</Button>
            </Link>
          </Grid>
        </Grid>
        <div className={classes.content}>
          {myOrganizations.loading && <CircularProgress />}

          {!myOrganizations.loading && 
            <Grid container spacing={3}>
              {renderOrganizations(myOrganizations.data)}
            </Grid>
          }
        </div>
      </Container>
    </div>
  );
}

export default withStyles(style)(MyOrganizations);
