/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ORGANIZATION_BY_SLUG_QUERY
// ====================================================

export interface GET_ORGANIZATION_BY_SLUG_QUERY_getOrganizationBySlug_picture {
  __typename: "Asset";
  id: string;
  version: number | null;
  publicId: string;
  type: string;
}

export interface GET_ORGANIZATION_BY_SLUG_QUERY_getOrganizationBySlug_links_socialProvider {
  __typename: "SocialProvider";
  id: string;
  name: string;
  iconName: string;
}

export interface GET_ORGANIZATION_BY_SLUG_QUERY_getOrganizationBySlug_links {
  __typename: "OrganizationLink";
  id: string;
  url: string;
  socialProvider: GET_ORGANIZATION_BY_SLUG_QUERY_getOrganizationBySlug_links_socialProvider;
}

export interface GET_ORGANIZATION_BY_SLUG_QUERY_getOrganizationBySlug {
  __typename: "Organization";
  id: string;
  name: string;
  slug: string;
  about: string | null;
  website: string | null;
  picture: GET_ORGANIZATION_BY_SLUG_QUERY_getOrganizationBySlug_picture | null;
  links: GET_ORGANIZATION_BY_SLUG_QUERY_getOrganizationBySlug_links[];
}

export interface GET_ORGANIZATION_BY_SLUG_QUERY {
  getOrganizationBySlug: GET_ORGANIZATION_BY_SLUG_QUERY_getOrganizationBySlug;
}

export interface GET_ORGANIZATION_BY_SLUG_QUERYVariables {
  slug: string;
}
