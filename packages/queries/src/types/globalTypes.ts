/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AssetType {
  OrganizationAvatar = "OrganizationAvatar",
  UserAvatar = "UserAvatar",
}

export interface ChangePasswordInput {
  password: string;
  token: string;
}

export interface ForgotPasswordInput {
  email: string;
}

export interface IsUsernameValidInput {
  username: string;
}

export interface LoginInput {
  usernameOrEmail: string;
  password: string;
}

export interface OrganizationEditInput {
  name: string;
  website?: string | null;
  about?: string | null;
  assetId?: string | null;
}

export interface OrganizationInput {
  name: string;
  slug: string;
}

export interface RegisterInput {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  newsletter: boolean;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
