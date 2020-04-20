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
    defaultLanguage {
      id
    }
    links {
      id
      url
      socialProvider {
        id
        name
        iconName
      }
    }
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

const ADD_USER_LINK = gql`
  mutation ADD_USER_LINK_MUTATION($data: UserLinkInput!) {
    addUserLink(data: $data) {
      id
      url
    }
  }
`;

const EDIT_USER_LINK = gql`
  mutation EDIT_USER_LINK_MUTATION($data: UserEditLinkInput!) {
    editUserLink(data: $data) {
      id
      url
    }
  }
`;

const DELETE_USER_LINK = gql`
  mutation DELETE_USER_LINK_MUTATION($id: ID!) {
    deleteUserLink(id: $id)
  }
`;

export { 
  CURRENT_USER,
  USER_FRAGMENT,
  UPDATE_USER,
  ADD_USER_LINK,
  EDIT_USER_LINK,
  DELETE_USER_LINK
};
