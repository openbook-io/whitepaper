/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrganizationEditInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: EDIT_ORGANIZATION_MUTATION
// ====================================================

export interface EDIT_ORGANIZATION_MUTATION_editOrganization_picture {
  __typename: "Asset";
  id: string;
  version: number | null;
  publicId: string;
  type: string;
}

export interface EDIT_ORGANIZATION_MUTATION_editOrganization {
  __typename: "Organization";
  id: string;
  name: string;
  slug: string;
  about: string | null;
  website: string | null;
  picture: EDIT_ORGANIZATION_MUTATION_editOrganization_picture | null;
}

export interface EDIT_ORGANIZATION_MUTATION {
  editOrganization: EDIT_ORGANIZATION_MUTATION_editOrganization;
}

export interface EDIT_ORGANIZATION_MUTATIONVariables {
  data: OrganizationEditInput;
}
