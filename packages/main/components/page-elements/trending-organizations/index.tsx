import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { useQuery } from '@apollo/react-hooks';
import { Avatar } from '@whitepaper/ui';
import { GET_TRENDING_ORGANIZATIONS } from '@whitepaper/queries';
import TruncateMarkup from 'react-truncate-markup';
import style from './style';

interface Props extends WithStyles<typeof style> {}

function TrendingOrganizations (props: Props) {
  const { classes } = props;
  const trendingOrganizations = useQuery(GET_TRENDING_ORGANIZATIONS);

  const renderOrganizations = (organizations) => {
    return organizations.map((organization) => {
      return (<Grid item xs={4}>
        <Paper className={classes.paper}>
          <Avatar type="organization" asset={organization.picture} size={60} />
          <Typography className={classes.title} variant="h5" component="h3">{organization.name}</Typography>
          <TruncateMarkup lines={2}>
            <p className={classes.about}>
              {organization.about}
            </p>
          </TruncateMarkup>
        </Paper>
      </Grid>)
    })
  }

  return (
    <div className={classes.outer}>
      <Container>
        <Typography variant="h4" component="h2">Hot and trending organizations</Typography>
        {trendingOrganizations.loading && <CircularProgress />}
        {!trendingOrganizations.loading && 
          <div className={classes.organizations}>
            <Grid container spacing={6}>
              {renderOrganizations(trendingOrganizations.data.getTrendingOrganizations)}
            </Grid>
          </div>
        }
        <Button variant="contained" color="secondary">More Whitepapers</Button>
      </Container>
    </div>
  );
}

export default withStyles(style)(TrendingOrganizations);
