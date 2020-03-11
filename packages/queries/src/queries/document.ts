import gql from 'graphql-tag';

const DOCUMENT_FRAGMENT = gql`
  fragment DocumentFragment on Document {
    id
    type {
      id
      name
    }
    typeText
    createdAt
  }
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
