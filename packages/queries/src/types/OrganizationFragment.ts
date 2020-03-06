/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: OrganizationFragment
// ====================================================

export interface OrganizationFragment_picture {
  __typename: "Asset";
  id: string;
  version: number | null;
  publicId: string;
  type: string;
}

export interface OrganizationFragment_links_socialProvider {
  __typename: "SocialProvider";
  id: string;
  name: string;
  iconName: string;
}

export interface OrganizationFragment_links {
  __typename: "OrganizationLink";
  id: string;
  url: string;
  socialProvider: OrganizationFragment_links_socialProvider;
}

export interface OrganizationFragment {
  __typename: "Organization";
  id: string;
  name: string;
  slug: string;
  about: string | null;
  website: string | null;
  picture: OrganizationFragment_picture | null;
  links: OrganizationFragment_links[];
}
