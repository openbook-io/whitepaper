import React from 'react';
import { 
  withStyles, 
  WithStyles, 
  Container,
  CircularProgress
} from '@material-ui/core';
import style from './style';
import { useQuery } from '@apollo/react-hooks';
import { GET_ORGANIZATION_BY_SLUG, GET_DOCUMENTS_BY_ORGANIZATION_SLUG } from '@whitepaper/queries';
import OrganizationHeader from '../_ui/organization-header';
import Documents from '../documents';

interface Props extends WithStyles<typeof style> {
  organizationSlug: string;
}

function Organization (props: Props) {
  const { classes, organizationSlug } = props;
  const organization = useQuery(GET_ORGANIZATION_BY_SLUG, {variables: {slug: organizationSlug}});
  const documents = useQuery(GET_DOCUMENTS_BY_ORGANIZATION_SLUG, {variables: {slug: organizationSlug}});

  return (
    <div className={classes.outer}>
      <Container>
        {organization.loading && <CircularProgress />}
        {!organization.loading && 
          <React.Fragment>
            <OrganizationHeader organization={organization.data.getOrganizationBySlug} />
          </React.Fragment>
        }
        {!documents.loading && 
          <React.Fragment>
            <Documents documents={documents.data.getDocumentsByOrganizationSlug} />
          </React.Fragment>
        }
      </Container>
    </div>
  );
}

export default withStyles(style)(Organization);
