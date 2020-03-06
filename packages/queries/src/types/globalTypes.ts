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

export interface CryptocurrencyCreateInput {
  name: string;
  ticker: string;
}

export interface CryptocurrencyEditInput {
  name: string;
  ticker: string;
  id: string;
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

export interface OrganizationEditLinkInput {
  url: string;
  id: string;
}

export interface OrganizationInput {
  name: string;
  slug: string;
}

export interface OrganizationLinkInput {
  url: string;
  socialProviderId: string;
}

export interface RegisterInput {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  newsletter: boolean;
}

export interface UserInput {
  firstName: string;
  lastName: string;
  bio?: string | null;
  website?: string | null;
  assetId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
