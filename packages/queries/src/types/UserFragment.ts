/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment_avatar {
  __typename: "Asset";
  id: string;
  version: number | null;
  publicId: string;
  type: string;
}

export interface UserFragment_links_socialProvider {
  __typename: "SocialProvider";
  id: string;
  name: string;
  iconName: string;
}

export interface UserFragment_links {
  __typename: "UserLink";
  id: string;
  url: string;
  socialProvider: UserFragment_links_socialProvider;
}

export interface UserFragment {
  __typename: "User";
  id: string;
  avatar: UserFragment_avatar | null;
  firstName: string;
  lastName: string;
  bio: string | null;
  website: string | null;
  links: UserFragment_links[];
}
