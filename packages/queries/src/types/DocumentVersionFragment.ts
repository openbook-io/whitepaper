/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DocumentVersionFragment
// ====================================================

export interface DocumentVersionFragment_language {
  __typename: "Language";
  id: string;
  name: string;
  isFallback: boolean;
}

export interface DocumentVersionFragment_pdf {
  __typename: "Pdf";
  id: string;
  documentId: string;
  documentUrl: string | null;
  documentCoverUrl: string | null;
}

export interface DocumentVersionFragment {
  __typename: "DocumentVersion";
  id: string;
  title: string;
  description: string | null;
  version: string;
  language: DocumentVersionFragment_language;
  pdf: DocumentVersionFragment_pdf | null;
}
