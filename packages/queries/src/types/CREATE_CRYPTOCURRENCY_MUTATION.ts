/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_CRYPTOCURRENCY_MUTATION
// ====================================================

export interface CREATE_CRYPTOCURRENCY_MUTATION_createCryptocurrency {
  __typename: "Cryptocurrency";
  id: string;
  name: string;
  ticker: string;
}

export interface CREATE_CRYPTOCURRENCY_MUTATION {
  createCryptocurrency: CREATE_CRYPTOCURRENCY_MUTATION_createCryptocurrency;
}

export interface CREATE_CRYPTOCURRENCY_MUTATIONVariables {
  ticker: string;
  name: string;
}
