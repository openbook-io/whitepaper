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
      isFallback
    }
    pdf {
      id
      documentId
      documentUrl
      documentCoverUrl
    }
  }
`

const DOCUMENT_VERSION_COMPLETE_FRAGMENT = gql`
  fragment DocumentVersionCompleteFragment on DocumentVersion {
    id
    title
    description
    version
    language {
      id
      name
      isFallback
    }
    pdf {
      id
      documentId
      documentUrl
      documentCoverUrl
      pages {
        id
        number
        width
        height
        key
      }
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
    getMyDocumentVersion(documentVersionId: $documentVersionId) {
      ...DocumentVersionFragment
    }
  }

  ${DOCUMENT_VERSION_FRAGMENT}
`;

const GET_DOCUMENT_VERSION_BY_ID = gql`
  query GET_DOCUMENT_VERSION_BY_ID_QUERY($id: ID!) {
    getDocumentVersionById(id: $id) {
      ...DocumentVersionCompleteFragment
    }
  }

  ${DOCUMENT_VERSION_COMPLETE_FRAGMENT}
`;

export { 
  CREATE_DOCUMENT_VERSION,
  DOCUMENT_VERSION_FRAGMENT,
  DOCUMENT_VERSION_COMPLETE_FRAGMENT,
  GET_DOCUMENT_VERSION,
  GET_DOCUMENT_VERSION_BY_ID
};
