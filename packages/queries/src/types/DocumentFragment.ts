/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DocumentFragment
// ====================================================

export interface DocumentFragment_type {
  __typename: "DocumentType";
  id: string;
  name: string;
}

export interface DocumentFragment_versions_language {
  __typename: "Language";
  id: string;
  name: string;
  isFallback: boolean;
}

export interface DocumentFragment_versions_pdf {
  __typename: "Pdf";
  id: string;
  documentId: string;
  documentUrl: string | null;
  documentCoverUrl: string | null;
}

export interface DocumentFragment_versions {
  __typename: "DocumentVersion";
  id: string;
  title: string;
  description: string | null;
  version: string;
  language: DocumentFragment_versions_language;
  pdf: DocumentFragment_versions_pdf | null;
}

export interface DocumentFragment {
  __typename: "Document";
  id: string;
  type: DocumentFragment_type;
  typeText: string | null;
  versions: DocumentFragment_versions[];
  createdAt: WhitepaperDateTime;
}
