/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CURRENT_USER_QUERY
// ====================================================

export interface CURRENT_USER_QUERY_me_avatar {
  __typename: "Asset";
  id: string;
  version: number | null;
  publicId: string;
  type: string;
}

export interface CURRENT_USER_QUERY_me {
  __typename: "User";
  id: string;
  avatar: CURRENT_USER_QUERY_me_avatar | null;
  firstName: string;
  lastName: string;
  bio: string | null;
  website: string | null;
}

export interface CURRENT_USER_QUERY {
  me: CURRENT_USER_QUERY_me | null;
}
