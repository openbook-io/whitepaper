/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrganizationEditLinkInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: EDIT_ORGANIZATION_LINK_MUTATION
// ====================================================

export interface EDIT_ORGANIZATION_LINK_MUTATION_editOrganizationLink {
  __typename: "OrganizationLink";
  id: string;
  url: string;
}

export interface EDIT_ORGANIZATION_LINK_MUTATION {
  editOrganizationLink: EDIT_ORGANIZATION_LINK_MUTATION_editOrganizationLink;
}

export interface EDIT_ORGANIZATION_LINK_MUTATIONVariables {
  data: OrganizationEditLinkInput;
}
