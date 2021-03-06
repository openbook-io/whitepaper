/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MY_CURRENT_ORGANIZATION_QUERY
// ====================================================

export interface MY_CURRENT_ORGANIZATION_QUERY_whatIsMyCurrentOrganization_picture {
  __typename: "Asset";
  id: string;
  version: number | null;
  publicId: string;
  type: string;
}

export interface MY_CURRENT_ORGANIZATION_QUERY_whatIsMyCurrentOrganization_links_socialProvider {
  __typename: "SocialProvider";
  id: string;
  name: string;
  iconName: string;
}

export interface MY_CURRENT_ORGANIZATION_QUERY_whatIsMyCurrentOrganization_links {
  __typename: "OrganizationLink";
  id: string;
  url: string;
  socialProvider: MY_CURRENT_ORGANIZATION_QUERY_whatIsMyCurrentOrganization_links_socialProvider;
}

export interface MY_CURRENT_ORGANIZATION_QUERY_whatIsMyCurrentOrganization {
  __typename: "Organization";
  id: string;
  name: string;
  slug: string;
  about: string | null;
  website: string | null;
  picture: MY_CURRENT_ORGANIZATION_QUERY_whatIsMyCurrentOrganization_picture | null;
  links: MY_CURRENT_ORGANIZATION_QUERY_whatIsMyCurrentOrganization_links[];
}

export interface MY_CURRENT_ORGANIZATION_QUERY {
  whatIsMyCurrentOrganization: MY_CURRENT_ORGANIZATION_QUERY_whatIsMyCurrentOrganization;
}
