import gql from 'graphql-tag';

const LOGIN = gql`
  mutation LOGIN_MUTATION($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;

export { 
  LOGIN
};
