import React from 'react';
import { RouteComponentProps } from '@reach/router';
import NoDocumentsPlaceholder from '../../components/no-documents-placeholder';
import Documents from '../../components/documents';
import DialogCreateDocument from '../../components/dialog-create-document';
import { useQuery } from '@apollo/react-hooks';
import { GET_DOCUMENTS } from '@whitepaper/queries';
import PageLoader from '../../components/page-loader';

interface Props extends RouteComponentProps {}

function HomePage(props: Props) {
  const documents = useQuery(GET_DOCUMENTS);

  return (
    <React.Fragment>
      <DialogCreateDocument />
      {!documents.loading && documents.data.myDocuments.length > 0 && <Documents documents={documents.data.myDocuments} />}
      {!documents.loading && !documents.data.myDocuments && <NoDocumentsPlaceholder />}
      {documents.loading && <PageLoader />}
    </React.Fragment>
  )
}

export default HomePage;