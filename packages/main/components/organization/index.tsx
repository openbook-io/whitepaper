import React from 'react';
import { 
  withStyles, 
  WithStyles, 
  Container,
  CircularProgress
} from '@material-ui/core';
import style from './style';
import { useQuery } from '@apollo/react-hooks';
import { GET_ORGANIZATION_BY_SLUG } from '@whitepaper/queries';
import OrganizationHeader from '../_ui/organization-header';

interface Props extends WithStyles<typeof style> {
  organizationSlug: string;
}

function Organization (props: Props) {
  const { classes, organizationSlug } = props;
  const organization = useQuery(GET_ORGANIZATION_BY_SLUG, {variables: {slug: organizationSlug}});

  return (
    <div className={classes.outer}>
      <Container>
        {organization.loading && <CircularProgress />}
        {!organization.loading && 
          <React.Fragment>
            <OrganizationHeader organization={organization.data.getOrganizationBySlug} />
          </React.Fragment>
        }
      </Container>
    </div>
  );
}

export default withStyles(style)(Organization);
