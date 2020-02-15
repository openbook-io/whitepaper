import gql from 'graphql-tag';
import { USER_FRAGMENT } from './user';

const SIGNUP_MUTATION_QUERY = gql`
  mutation SIGNUP_MUTATION($data: RegisterInput!) {
    register(data: $data) {
      token
      user {
        ...UserFragment
      }
    }
  }

  ${USER_FRAGMENT}
`;

export { 
  SIGNUP_MUTATION_QUERY
};
