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

export interface CreateDocumentInput {
  documentTypeText?: string | null;
  documentTypeId: string;
}

export interface CreateDocumentVersionInput {
  version: string;
  title: string;
  description?: string | null;
  pdfId: string;
  documentId: string;
  languageId: string;
}

export interface CryptocurrencyCreateInput {
  name: string;
  ticker: string;
  isOnExchange: boolean;
  coinDataId?: string | null;
}

export interface CryptocurrencyEditInput {
  name: string;
  ticker: string;
  isOnExchange: boolean;
  coinDataId?: string | null;
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

export interface UserEditLinkInput {
  url: string;
  id: string;
}

export interface UserInput {
  firstName: string;
  lastName: string;
  bio?: string | null;
  website?: string | null;
  assetId?: string | null;
}

export interface UserLinkInput {
  url: string;
  socialProviderId: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
