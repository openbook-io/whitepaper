/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserEditLinkInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: EDIT_USER_LINK_MUTATION
// ====================================================

export interface EDIT_USER_LINK_MUTATION_editUserLink {
  __typename: "UserLink";
  id: string;
  url: string;
}

export interface EDIT_USER_LINK_MUTATION {
  editUserLink: EDIT_USER_LINK_MUTATION_editUserLink;
}

export interface EDIT_USER_LINK_MUTATIONVariables {
  data: UserEditLinkInput;
}
