/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MY_CRYPTOCURRENCY_QUERY
// ====================================================

export interface MY_CRYPTOCURRENCY_QUERY_myCryptocurrency {
  __typename: "Cryptocurrency";
  id: string;
  name: string;
  ticker: string;
}

export interface MY_CRYPTOCURRENCY_QUERY {
  myCryptocurrency: MY_CRYPTOCURRENCY_QUERY_myCryptocurrency;
}

export interface MY_CRYPTOCURRENCY_QUERYVariables {
  id: string;
}
