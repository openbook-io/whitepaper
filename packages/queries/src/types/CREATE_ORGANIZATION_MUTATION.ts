/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrganizationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_ORGANIZATION_MUTATION
// ====================================================

export interface CREATE_ORGANIZATION_MUTATION_createOrganization_picture {
  __typename: "Asset";
  id: string;
  version: number | null;
  publicId: string;
  type: string;
}

export interface CREATE_ORGANIZATION_MUTATION_createOrganization_links_socialProvider {
  __typename: "SocialProvider";
  id: string;
  name: string;
  iconName: string;
}

export interface CREATE_ORGANIZATION_MUTATION_createOrganization_links {
  __typename: "OrganizationLink";
  id: string;
  url: string;
  socialProvider: CREATE_ORGANIZATION_MUTATION_createOrganization_links_socialProvider;
}

export interface CREATE_ORGANIZATION_MUTATION_createOrganization {
  __typename: "Organization";
  id: string;
  name: string;
  slug: string;
  about: string | null;
  website: string | null;
  picture: CREATE_ORGANIZATION_MUTATION_createOrganization_picture | null;
  links: CREATE_ORGANIZATION_MUTATION_createOrganization_links[];
}

export interface CREATE_ORGANIZATION_MUTATION {
  createOrganization: CREATE_ORGANIZATION_MUTATION_createOrganization;
}

export interface CREATE_ORGANIZATION_MUTATIONVariables {
  data: OrganizationInput;
}
