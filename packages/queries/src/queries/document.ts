import gql from 'graphql-tag';
import { DOCUMENT_VERSION_FRAGMENT } from './documentVersion';

const DOCUMENT_FRAGMENT = gql`
  fragment DocumentFragment on Document {
    id
    type {
      id
      name
    }
    typeText
    versions {
      ...DocumentVersionFragment
    }
    createdAt
  }

  ${DOCUMENT_VERSION_FRAGMENT}
`

const GET_DOCUMENTS = gql`
  query GET_DOCUMENTS_QUERY {
    myDocuments {
      ...DocumentFragment
    }
  }

  ${DOCUMENT_FRAGMENT}
`;

const CREATE_DOCUMENT = gql`
  mutation CREATE_DOCUMENT_MUTATION($data: CreateDocumentInput!) {
    createDocument(data: $data) {
      ...DocumentFragment
    }
  }

  ${DOCUMENT_FRAGMENT}
`;

export { 
  GET_DOCUMENTS,
  CREATE_DOCUMENT
};
