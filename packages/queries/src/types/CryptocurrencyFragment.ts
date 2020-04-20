/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CryptocurrencyFragment
// ====================================================

export interface CryptocurrencyFragment_cryptoDataCoin {
  __typename: "CryptoDataCoins";
  name: string;
  symbol: string;
  id: string;
}

export interface CryptocurrencyFragment {
  __typename: "Cryptocurrency";
  id: string;
  name: string;
  ticker: string;
  isOnExchange: boolean;
  cryptoDataCoin: CryptocurrencyFragment_cryptoDataCoin | null;
}
