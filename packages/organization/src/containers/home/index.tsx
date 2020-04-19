import React from 'react';
import { RouteComponentProps } from '@reach/router';
import NoDocumentsPlaceholder from '../../components/no-documents-placeholder';
import Documents from '../../components/documents';
import DialogCreateDocument from '../../components/dialog-create-document';
import { useQuery } from '@apollo/react-hooks';
import { GET_DOCUMENTS } from '@whitepaper/queries';
import PageLoader from '../../components/page-loader';
import { 
  Container,
  withStyles, 
  WithStyles
} from '@material-ui/core';
import style from './style';

interface Props extends RouteComponentProps, WithStyles<typeof style> {}

function HomePage(props: Props) {
  const { classes } = props;
  const documents = useQuery(GET_DOCUMENTS);

  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.container}>
        <DialogCreateDocument />
        {!documents.loading && documents.data.myDocuments.length > 0 && <Documents documents={documents.data.myDocuments} />}
        {!documents.loading && !documents.data.myDocuments.length && <NoDocumentsPlaceholder />}
        {documents.loading && <PageLoader />}
      </Container>
    </React.Fragment>
  )
}

export default withStyles(style)(HomePage);