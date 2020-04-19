import gql from 'graphql-tag';

const LANGUAGE_FRAGMENT = gql`
  fragment LanguageFragment on Language {
    id
    name
    nativeName
  }
`

const GET_LANGUAGES = gql`
  query GET_LANGUAGES_QUERY {
    getLanguages {
      ...LanguageFragment
    }
  }

  ${LANGUAGE_FRAGMENT}
`;

export { 
  GET_LANGUAGES
};