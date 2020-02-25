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

export interface SIGNUP_register_user {
  __typename: "User";
  id: string;
  avatar: SIGNUP_register_user_avatar | null;
  firstName: string;
  lastName: string;
  bio: string | null;
  website: string | null;
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
