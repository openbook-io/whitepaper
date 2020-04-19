import gql from 'graphql-tag';

const DOCUMENT_VERSION_FRAGMENT = gql`
  fragment DocumentVersionFragment on DocumentVersion {
    id
    title
    description
    version
    language {
      id
      name
    }
    pdf {
      id
      documentId
      documentUrl
      documentCoverUrl
    }
  }
`
const CREATE_DOCUMENT_VERSION = gql`
  mutation CREATE_DOCUMENT_VERSION_MUTATION($data: CreateDocumentVersionInput!) {
    createDocumentVersion(data: $data) {
      ...DocumentVersionFragment
    }
  }

  ${DOCUMENT_VERSION_FRAGMENT}
`;

const GET_DOCUMENT_VERSION = gql`
  query GET_DOCUMENT_VERSION_QUERY($documentVersionId: ID!) {
    getDocumentVersion(documentVersionId: $documentVersionId) {
      ...DocumentVersionFragment
    }
  }

  ${DOCUMENT_VERSION_FRAGMENT}
`;

export { 
  CREATE_DOCUMENT_VERSION,
  DOCUMENT_VERSION_FRAGMENT,
  GET_DOCUMENT_VERSION
};
