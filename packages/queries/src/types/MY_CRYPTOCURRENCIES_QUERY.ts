/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MY_CRYPTOCURRENCIES_QUERY
// ====================================================

export interface MY_CRYPTOCURRENCIES_QUERY_myCryptocurrencies {
  __typename: "Cryptocurrency";
  id: string;
  name: string;
  ticker: string;
}

export interface MY_CRYPTOCURRENCIES_QUERY {
  myCryptocurrencies: MY_CRYPTOCURRENCIES_QUERY_myCryptocurrencies[];
}
