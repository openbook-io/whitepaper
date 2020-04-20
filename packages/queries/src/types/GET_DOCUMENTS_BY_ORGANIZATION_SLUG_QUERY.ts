/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY
// ====================================================

export interface GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY_getDocumentsByOrganizationSlug_type {
  __typename: "DocumentType";
  id: string;
  name: string;
}

export interface GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY_getDocumentsByOrganizationSlug_versions_language {
  __typename: "Language";
  id: string;
  name: string;
  isFallback: boolean;
}

export interface GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY_getDocumentsByOrganizationSlug_versions_pdf {
  __typename: "Pdf";
  id: string;
  documentId: string;
  documentUrl: string | null;
  documentCoverUrl: string | null;
}

export interface GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY_getDocumentsByOrganizationSlug_versions {
  __typename: "DocumentVersion";
  id: string;
  title: string;
  description: string | null;
  version: string;
  language: GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY_getDocumentsByOrganizationSlug_versions_language;
  pdf: GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY_getDocumentsByOrganizationSlug_versions_pdf | null;
}

export interface GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY_getDocumentsByOrganizationSlug {
  __typename: "Document";
  id: string;
  type: GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY_getDocumentsByOrganizationSlug_type;
  typeText: string | null;
  versions: GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY_getDocumentsByOrganizationSlug_versions[];
  createdAt: WhitepaperDateTime;
}

export interface GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY {
  getDocumentsByOrganizationSlug: GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERY_getDocumentsByOrganizationSlug[];
}

export interface GET_DOCUMENTS_BY_ORGANIZATION_SLUG_QUERYVariables {
  slug: string;
}
