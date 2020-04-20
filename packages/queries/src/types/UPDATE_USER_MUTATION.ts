/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UPDATE_USER_MUTATION
// ====================================================

export interface UPDATE_USER_MUTATION_updateMe_avatar {
  __typename: "Asset";
  id: string;
  version: number | null;
  publicId: string;
  type: string;
}

export interface UPDATE_USER_MUTATION_updateMe_defaultLanguage {
  __typename: "Language";
  id: string;
}

export interface UPDATE_USER_MUTATION_updateMe_links_socialProvider {
  __typename: "SocialProvider";
  id: string;
  name: string;
  iconName: string;
}

export interface UPDATE_USER_MUTATION_updateMe_links {
  __typename: "UserLink";
  id: string;
  url: string;
  socialProvider: UPDATE_USER_MUTATION_updateMe_links_socialProvider;
}

export interface UPDATE_USER_MUTATION_updateMe {
  __typename: "User";
  id: string;
  avatar: UPDATE_USER_MUTATION_updateMe_avatar | null;
  firstName: string;
  lastName: string;
  bio: string | null;
  website: string | null;
  defaultLanguage: UPDATE_USER_MUTATION_updateMe_defaultLanguage | null;
  links: UPDATE_USER_MUTATION_updateMe_links[];
}

export interface UPDATE_USER_MUTATION {
  updateMe: UPDATE_USER_MUTATION_updateMe;
}

export interface UPDATE_USER_MUTATIONVariables {
  data: UserInput;
}
