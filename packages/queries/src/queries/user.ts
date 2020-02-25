import gql from 'graphql-tag';

const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    avatar {
      id
      version
      publicId
      type
    }
    firstName
    lastName
    bio
    website
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

const UPDATE_USER = gql`
  mutation UPDATE_USER_MUTATION($data: UserInput!) {
    updateMe(data: $data) {
      ...UserFragment
    }
  }

  ${USER_FRAGMENT}
`

export { 
  CURRENT_USER,
  USER_FRAGMENT,
  UPDATE_USER
};
