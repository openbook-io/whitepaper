/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_DOCUMENT_VERSION_QUERY
// ====================================================

export interface GET_DOCUMENT_VERSION_QUERY_getMyDocumentVersion_language {
  __typename: "Language";
  id: string;
  name: string;
  isFallback: boolean;
}

export interface GET_DOCUMENT_VERSION_QUERY_getMyDocumentVersion_pdf {
  __typename: "Pdf";
  id: string;
  documentId: string;
  documentUrl: string | null;
  documentCoverUrl: string | null;
}

export interface GET_DOCUMENT_VERSION_QUERY_getMyDocumentVersion {
  __typename: "DocumentVersion";
  id: string;
  title: string;
  description: string | null;
  version: string;
  language: GET_DOCUMENT_VERSION_QUERY_getMyDocumentVersion_language;
  pdf: GET_DOCUMENT_VERSION_QUERY_getMyDocumentVersion_pdf | null;
}

export interface GET_DOCUMENT_VERSION_QUERY {
  getMyDocumentVersion: GET_DOCUMENT_VERSION_QUERY_getMyDocumentVersion;
}

export interface GET_DOCUMENT_VERSION_QUERYVariables {
  documentVersionId: string;
}
