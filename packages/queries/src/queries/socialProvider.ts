import gql from 'graphql-tag';

const SOCIAL_PROVIDERS = gql`
  query SOCIAL_PROVIDERS_QUERY {
    getSocialProviders {
      id
      name
      iconName
    }
  }
`

export { 
  SOCIAL_PROVIDERS
};
