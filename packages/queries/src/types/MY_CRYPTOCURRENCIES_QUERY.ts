/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MY_CRYPTOCURRENCIES_QUERY
// ====================================================

export interface MY_CRYPTOCURRENCIES_QUERY_myCryptocurrencies_cryptoDataCoin {
  __typename: "CryptoDataCoins";
  name: string;
  symbol: string;
  id: string;
}

export interface MY_CRYPTOCURRENCIES_QUERY_myCryptocurrencies {
  __typename: "Cryptocurrency";
  id: string;
  name: string;
  ticker: string;
  isOnExchange: boolean;
  cryptoDataCoin: MY_CRYPTOCURRENCIES_QUERY_myCryptocurrencies_cryptoDataCoin | null;
}

export interface MY_CRYPTOCURRENCIES_QUERY {
  myCryptocurrencies: MY_CRYPTOCURRENCIES_QUERY_myCryptocurrencies[];
}
