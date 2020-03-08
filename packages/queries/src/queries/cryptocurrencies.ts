import gql from 'graphql-tag';

const CRYPTOCURRENCY_FRAGMENT = gql`
  fragment CryptocurrencyFragment on Cryptocurrency {
    id
    name
    ticker
    isOnExchange
    cryptoDataCoin {
      name
      symbol
      id
    }
  }
`

const CREATE_CRYPTOCURRENCY = gql`
  mutation CREATE_CRYPTOCURRENCY_MUTATION($data: CryptocurrencyCreateInput!) {
    createCryptocurrency(data: $data) {
      ...CryptocurrencyFragment
    }
  }

  ${CRYPTOCURRENCY_FRAGMENT}
`;

const EDIT_CRYPTOCURRENCY = gql`
  mutation EDIT_CRYPTOCURRENCY_MUTATION($data: CryptocurrencyEditInput!) {
    editCryptocurrency(data: $data) {
      ...CryptocurrencyFragment
    }
  }

  ${CRYPTOCURRENCY_FRAGMENT}
`;

const MY_CRYPTOCURRENCIES = gql`
  query MY_CRYPTOCURRENCIES_QUERY {
    myCryptocurrencies {
      ...CryptocurrencyFragment
    }
  }

  ${CRYPTOCURRENCY_FRAGMENT}
`;

const MY_CRYPTOCURRENCY = gql`
  query MY_CRYPTOCURRENCY_QUERY($id: ID!) {
    myCryptocurrency(id: $id) {
      ...CryptocurrencyFragment
    }
  }

  ${CRYPTOCURRENCY_FRAGMENT}
`;

export { 
  CREATE_CRYPTOCURRENCY,
  MY_CRYPTOCURRENCIES,
  MY_CRYPTOCURRENCY,
  EDIT_CRYPTOCURRENCY
};
