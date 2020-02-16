import gql from 'graphql-tag';
import { USER_FRAGMENT } from './user';

const LOGIN = gql`
  mutation LOGIN_MUTATION($data: LoginInput!) {
    login(data: $data) {
      token
      user {
        ...UserFragment
      }
    }
  }

  ${USER_FRAGMENT}
`;

export { 
  LOGIN
};
