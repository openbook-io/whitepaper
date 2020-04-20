/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateDocumentVersionInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_DOCUMENT_VERSION_MUTATION
// ====================================================

export interface CREATE_DOCUMENT_VERSION_MUTATION_createDocumentVersion_language {
  __typename: "Language";
  id: string;
  name: string;
  isFallback: boolean;
}

export interface CREATE_DOCUMENT_VERSION_MUTATION_createDocumentVersion_pdf {
  __typename: "Pdf";
  id: string;
  documentId: string;
  documentUrl: string | null;
  documentCoverUrl: string | null;
}

export interface CREATE_DOCUMENT_VERSION_MUTATION_createDocumentVersion {
  __typename: "DocumentVersion";
  id: string;
  title: string;
  description: string | null;
  version: string;
  language: CREATE_DOCUMENT_VERSION_MUTATION_createDocumentVersion_language;
  pdf: CREATE_DOCUMENT_VERSION_MUTATION_createDocumentVersion_pdf | null;
}

export interface CREATE_DOCUMENT_VERSION_MUTATION {
  createDocumentVersion: CREATE_DOCUMENT_VERSION_MUTATION_createDocumentVersion;
}

export interface CREATE_DOCUMENT_VERSION_MUTATIONVariables {
  data: CreateDocumentVersionInput;
}
