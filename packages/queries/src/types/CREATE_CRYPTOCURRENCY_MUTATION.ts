/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CryptocurrencyCreateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_CRYPTOCURRENCY_MUTATION
// ====================================================

export interface CREATE_CRYPTOCURRENCY_MUTATION_createCryptocurrency_cryptoDataCoin {
  __typename: "CryptoDataCoins";
  name: string;
  symbol: string;
  id: string;
}

export interface CREATE_CRYPTOCURRENCY_MUTATION_createCryptocurrency {
  __typename: "Cryptocurrency";
  id: string;
  name: string;
  ticker: string;
  isOnExchange: boolean;
  cryptoDataCoin: CREATE_CRYPTOCURRENCY_MUTATION_createCryptocurrency_cryptoDataCoin | null;
}

export interface CREATE_CRYPTOCURRENCY_MUTATION {
  createCryptocurrency: CREATE_CRYPTOCURRENCY_MUTATION_createCryptocurrency;
}

export interface CREATE_CRYPTOCURRENCY_MUTATIONVariables {
  data: CryptocurrencyCreateInput;
}
