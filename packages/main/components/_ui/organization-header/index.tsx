import React from 'react';
import { 
  withStyles,
  WithStyles,
  Typography,
  Grid
} from '@material-ui/core';
import style from './style';
import { OrganizationFragment } from '@whitepaper/queries';
import { Avatar, SimpleIcon } from '@whitepaper/ui';

interface Props extends WithStyles<typeof style> {
  organization: OrganizationFragment
}

function OrganizationHeader(props: Props) {
  const { classes, organization } = props;

  const organizationLinks = organization.links.map((link, index) => {
    return (<Grid item key={index}>
      <div className={classes.socialIcon}>
        <a href={link.url} target="_blank">
          <SimpleIcon name={link.socialProvider.name} />
        </a>
      </div>
    </Grid>)
  })

  return (
    <div className={classes.container}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={'auto'}>
          <Avatar type="organization" asset={organization.picture} size={100} />
        </Grid>
        <Grid item xs={true}>
          <Typography variant="h4" component="h1">{organization.name}</Typography>
          <Typography variant="body1" className={classes.about}>{organization.about}</Typography>
          <Grid container spacing={1}>
            {organizationLinks}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
export default withStyles(style)(OrganizationHeader);
