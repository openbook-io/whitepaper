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

export interface CURRENT_USER_QUERY_me_links_socialProvider {
  __typename: "SocialProvider";
  id: string;
  name: string;
  iconName: string;
}

export interface CURRENT_USER_QUERY_me_links {
  __typename: "UserLink";
  id: string;
  url: string;
  socialProvider: CURRENT_USER_QUERY_me_links_socialProvider;
}

export interface CURRENT_USER_QUERY_me {
  __typename: "User";
  id: string;
  avatar: CURRENT_USER_QUERY_me_avatar | null;
  firstName: string;
  lastName: string;
  bio: string | null;
  website: string | null;
  links: CURRENT_USER_QUERY_me_links[];
}

export interface CURRENT_USER_QUERY {
  me: CURRENT_USER_QUERY_me | null;
}
