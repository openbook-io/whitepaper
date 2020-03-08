import gql from 'graphql-tag';

const SEARCH_CRYPTO_DATA_COIN = gql`
  query SEARCH_CRYPTO_DATA_COIN_QUERY($search: String!) {
    searchCryptoDataCoins(search: $search) {
      name
      symbol
      id
    }
  }
`

export { 
  SEARCH_CRYPTO_DATA_COIN
};
