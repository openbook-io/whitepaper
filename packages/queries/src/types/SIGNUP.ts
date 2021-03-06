/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RegisterInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SIGNUP
// ====================================================

export interface SIGNUP_register_user_avatar {
  __typename: "Asset";
  id: string;
  version: number | null;
  publicId: string;
  type: string;
}

export interface SIGNUP_register_user_defaultLanguage {
  __typename: "Language";
  id: string;
}

export interface SIGNUP_register_user_links_socialProvider {
  __typename: "SocialProvider";
  id: string;
  name: string;
  iconName: string;
}

export interface SIGNUP_register_user_links {
  __typename: "UserLink";
  id: string;
  url: string;
  socialProvider: SIGNUP_register_user_links_socialProvider;
}

export interface SIGNUP_register_user {
  __typename: "User";
  id: string;
  avatar: SIGNUP_register_user_avatar | null;
  firstName: string;
  lastName: string;
  bio: string | null;
  website: string | null;
  defaultLanguage: SIGNUP_register_user_defaultLanguage | null;
  links: SIGNUP_register_user_links[];
}

export interface SIGNUP_register {
  __typename: "Token";
  token: string;
  user: SIGNUP_register_user;
}

export interface SIGNUP {
  register: SIGNUP_register;
}

export interface SIGNUPVariables {
  data: RegisterInput;
}
