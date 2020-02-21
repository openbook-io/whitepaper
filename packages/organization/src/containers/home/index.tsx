import React from 'react';
import { RouteComponentProps } from '@reach/router';
import NoDocumentsPlaceholder from '../../components/no-documents-placeholder';

interface Props extends RouteComponentProps {}

function HomePage(props: Props) {
  return (
    <NoDocumentsPlaceholder />
  )
}

export default HomePage;