/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_DOCUMENT_TYPES_QUERY
// ====================================================

export interface GET_DOCUMENT_TYPES_QUERY_getDocumentTypes {
  __typename: "DocumentType";
  id: string;
  name: string;
  freeTextAllowed: boolean;
}

export interface GET_DOCUMENT_TYPES_QUERY {
  getDocumentTypes: GET_DOCUMENT_TYPES_QUERY_getDocumentTypes[];
}
