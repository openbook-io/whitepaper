import gql from 'graphql-tag';

const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
  }
`

const CURRENT_USER = gql`
  query CURRENT_USER_QUERY {
    me {
      ...UserFragment
    }
  }

  ${USER_FRAGMENT}
`;

export { 
  CURRENT_USER,
  USER_FRAGMENT
};
