/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrganizationLinkInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ADD_ORGANIZATION_LINK_MUTATION
// ====================================================

export interface ADD_ORGANIZATION_LINK_MUTATION_addOrganizationLink {
  __typename: "OrganizationLink";
  id: string;
  url: string;
}

export interface ADD_ORGANIZATION_LINK_MUTATION {
  addOrganizationLink: ADD_ORGANIZATION_LINK_MUTATION_addOrganizationLink;
}

export interface ADD_ORGANIZATION_LINK_MUTATIONVariables {
  data: OrganizationLinkInput;
}
