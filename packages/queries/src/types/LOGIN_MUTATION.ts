/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: LOGIN_MUTATION
// ====================================================

export interface LOGIN_MUTATION_login_user_avatar {
  __typename: "Asset";
  id: string;
  version: number | null;
  publicId: string;
  type: string;
}

export interface LOGIN_MUTATION_login_user_links_socialProvider {
  __typename: "SocialProvider";
  id: string;
  name: string;
  iconName: string;
}

export interface LOGIN_MUTATION_login_user_links {
  __typename: "UserLink";
  id: string;
  url: string;
  socialProvider: LOGIN_MUTATION_login_user_links_socialProvider;
}

export interface LOGIN_MUTATION_login_user {
  __typename: "User";
  id: string;
  avatar: LOGIN_MUTATION_login_user_avatar | null;
  firstName: string;
  lastName: string;
  bio: string | null;
  website: string | null;
  links: LOGIN_MUTATION_login_user_links[];
}

export interface LOGIN_MUTATION_login {
  __typename: "Token";
  token: string;
  user: LOGIN_MUTATION_login_user;
}

export interface LOGIN_MUTATION {
  login: LOGIN_MUTATION_login | null;
}

export interface LOGIN_MUTATIONVariables {
  data: LoginInput;
}
