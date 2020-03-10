import React from 'react';
import { RouteComponentProps } from '@reach/router';
import NoDocumentsPlaceholder from '../../components/no-documents-placeholder';
import DialogCreateDocument from '../../components/dialog-create-document';

interface Props extends RouteComponentProps {}

function HomePage(props: Props) {
  return (
    <React.Fragment>
      <NoDocumentsPlaceholder />
      <DialogCreateDocument />
    </React.Fragment>
  )
}

export default HomePage;