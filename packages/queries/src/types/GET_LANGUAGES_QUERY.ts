/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_LANGUAGES_QUERY
// ====================================================

export interface GET_LANGUAGES_QUERY_getLanguages {
  __typename: "Language";
  id: string;
  name: string;
  nativeName: string;
}

export interface GET_LANGUAGES_QUERY {
  getLanguages: GET_LANGUAGES_QUERY_getLanguages[];
}
