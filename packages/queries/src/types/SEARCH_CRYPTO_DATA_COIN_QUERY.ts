/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SEARCH_CRYPTO_DATA_COIN_QUERY
// ====================================================

export interface SEARCH_CRYPTO_DATA_COIN_QUERY_searchCryptoDataCoins {
  __typename: "CryptoDataCoins";
  name: string;
  symbol: string;
  id: string;
}

export interface SEARCH_CRYPTO_DATA_COIN_QUERY {
  searchCryptoDataCoins: SEARCH_CRYPTO_DATA_COIN_QUERY_searchCryptoDataCoins[];
}

export interface SEARCH_CRYPTO_DATA_COIN_QUERYVariables {
  search: string;
}
