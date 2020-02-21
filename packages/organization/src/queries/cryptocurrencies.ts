import gql from 'graphql-tag';

const CRYPTOCURRENCY_FRAGMENT = gql`
  fragment CryptocurrencyFragment on Cryptocurrency {
    id
    name
    ticker
  }
`

const CREATE_CRYPTOCURRENCY = gql`
  mutation CREATE_CRYPTOCURRENCY_MUTATION($ticker: String! $name: String!) {
    createCryptocurrency(ticker: $ticker name: $name) {
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

export { 
  CREATE_CRYPTOCURRENCY,
  MY_CRYPTOCURRENCIES
};
