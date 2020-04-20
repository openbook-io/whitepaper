/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_TRENDING_ORGANIZATIONS_QUERY
// ====================================================

export interface GET_TRENDING_ORGANIZATIONS_QUERY_getTrendingOrganizations_picture {
  __typename: "Asset";
  id: string;
  version: number | null;
  publicId: string;
  type: string;
}

export interface GET_TRENDING_ORGANIZATIONS_QUERY_getTrendingOrganizations_links_socialProvider {
  __typename: "SocialProvider";
  id: string;
  name: string;
  iconName: string;
}

export interface GET_TRENDING_ORGANIZATIONS_QUERY_getTrendingOrganizations_links {
  __typename: "OrganizationLink";
  id: string;
  url: string;
  socialProvider: GET_TRENDING_ORGANIZATIONS_QUERY_getTrendingOrganizations_links_socialProvider;
}

export interface GET_TRENDING_ORGANIZATIONS_QUERY_getTrendingOrganizations {
  __typename: "Organization";
  id: string;
  name: string;
  slug: string;
  about: string | null;
  website: string | null;
  picture: GET_TRENDING_ORGANIZATIONS_QUERY_getTrendingOrganizations_picture | null;
  links: GET_TRENDING_ORGANIZATIONS_QUERY_getTrendingOrganizations_links[];
}

export interface GET_TRENDING_ORGANIZATIONS_QUERY {
  getTrendingOrganizations: GET_TRENDING_ORGANIZATIONS_QUERY_getTrendingOrganizations[];
}
