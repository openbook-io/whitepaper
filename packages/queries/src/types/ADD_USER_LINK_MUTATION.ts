/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserLinkInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ADD_USER_LINK_MUTATION
// ====================================================

export interface ADD_USER_LINK_MUTATION_addUserLink {
  __typename: "UserLink";
  id: string;
  url: string;
}

export interface ADD_USER_LINK_MUTATION {
  addUserLink: ADD_USER_LINK_MUTATION_addUserLink;
}

export interface ADD_USER_LINK_MUTATIONVariables {
  data: UserLinkInput;
}
