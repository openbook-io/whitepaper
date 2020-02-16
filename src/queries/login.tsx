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

const FORGOT_PASSWORD = gql`
  mutation FORGOT_PASSWORD_MUTATION($data: ForgotPasswordInput!) {
    sendRecoveryEmail(data: $data)
  }
`;

export { 
  LOGIN,
  FORGOT_PASSWORD
};
