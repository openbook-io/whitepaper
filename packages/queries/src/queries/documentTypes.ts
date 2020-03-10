import gql from 'graphql-tag';

const GET_DOCUMENT_TYPES = gql`
  query GET_DOCUMENT_TYPES_QUERY {
    getDocumentTypes {
      id
      name
      freeTextAllowed
    }
  }
`;

export { 
  GET_DOCUMENT_TYPES
};
