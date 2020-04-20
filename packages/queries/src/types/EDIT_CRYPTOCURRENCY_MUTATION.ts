/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CryptocurrencyEditInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: EDIT_CRYPTOCURRENCY_MUTATION
// ====================================================

export interface EDIT_CRYPTOCURRENCY_MUTATION_editCryptocurrency_cryptoDataCoin {
  __typename: "CryptoDataCoins";
  name: string;
  symbol: string;
  id: string;
}

export interface EDIT_CRYPTOCURRENCY_MUTATION_editCryptocurrency {
  __typename: "Cryptocurrency";
  id: string;
  name: string;
  ticker: string;
  isOnExchange: boolean;
  cryptoDataCoin: EDIT_CRYPTOCURRENCY_MUTATION_editCryptocurrency_cryptoDataCoin | null;
}

export interface EDIT_CRYPTOCURRENCY_MUTATION {
  editCryptocurrency: EDIT_CRYPTOCURRENCY_MUTATION_editCryptocurrency;
}

export interface EDIT_CRYPTOCURRENCY_MUTATIONVariables {
  data: CryptocurrencyEditInput;
}
