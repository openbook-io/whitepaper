import gql from 'graphql-tag';
import { USER_FRAGMENT } from './user';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP($data: RegisterInput!) {
    register(data: $data) {
      token
      user {
        ...UserFragment
      }
    }
  }

  ${USER_FRAGMENT}
`;

const IS_USERNAME_VALID_QUERY = gql`
  query IS_USERNAME_VALID($data: IsUsernameValidInput!) {
    isUsernameValid(data: $data)
  }
`;

export { 
  SIGNUP_MUTATION,
  IS_USERNAME_VALID_QUERY
};
