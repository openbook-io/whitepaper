import React from 'react';
import { 
  withStyles,
  WithStyles,
  Paper,
  Typography,
  Button
} from '@material-ui/core';
import style from './style';
import { Avatar } from '@whitepaper/ui';
import TruncateMarkup from 'react-truncate-markup';
import { OrganizationFragment } from '@whitepaper/queries';

interface Props extends WithStyles<typeof style> {
  organization: OrganizationFragment
}

function OrganizationCard(props: Props) {
  const { classes, organization } = props;

  return (
    <Paper className={classes.container}>
      <Avatar type="organization" asset={organization.picture} size={60} />
      <Typography className={classes.title} variant="h5">{organization.name}</Typography>
      <TruncateMarkup lines={3}>
        <p className={classes.about}>
          {organization.about}
        </p>
      </TruncateMarkup>
      <Button color="primary" className={classes.button}>Open Dashboard</Button>
    </Paper>
  )
}
export default withStyles(style)(OrganizationCard);
