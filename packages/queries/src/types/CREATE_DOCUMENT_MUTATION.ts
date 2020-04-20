/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateDocumentInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_DOCUMENT_MUTATION
// ====================================================

export interface CREATE_DOCUMENT_MUTATION_createDocument_type {
  __typename: "DocumentType";
  id: string;
  name: string;
}

export interface CREATE_DOCUMENT_MUTATION_createDocument_versions_language {
  __typename: "Language";
  id: string;
  name: string;
  isFallback: boolean;
}

export interface CREATE_DOCUMENT_MUTATION_createDocument_versions_pdf {
  __typename: "Pdf";
  id: string;
  documentId: string;
  documentUrl: string | null;
  documentCoverUrl: string | null;
}

export interface CREATE_DOCUMENT_MUTATION_createDocument_versions {
  __typename: "DocumentVersion";
  id: string;
  title: string;
  description: string | null;
  version: string;
  language: CREATE_DOCUMENT_MUTATION_createDocument_versions_language;
  pdf: CREATE_DOCUMENT_MUTATION_createDocument_versions_pdf | null;
}

export interface CREATE_DOCUMENT_MUTATION_createDocument {
  __typename: "Document";
  id: string;
  type: CREATE_DOCUMENT_MUTATION_createDocument_type;
  typeText: string | null;
  versions: CREATE_DOCUMENT_MUTATION_createDocument_versions[];
  createdAt: WhitepaperDateTime;
}

export interface CREATE_DOCUMENT_MUTATION {
  createDocument: CREATE_DOCUMENT_MUTATION_createDocument;
}

export interface CREATE_DOCUMENT_MUTATIONVariables {
  data: CreateDocumentInput;
}
