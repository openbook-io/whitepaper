/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SOCIAL_PROVIDERS_QUERY
// ====================================================

export interface SOCIAL_PROVIDERS_QUERY_getSocialProviders {
  __typename: "SocialProvider";
  id: string;
  name: string;
  iconName: string;
}

export interface SOCIAL_PROVIDERS_QUERY {
  getSocialProviders: SOCIAL_PROVIDERS_QUERY_getSocialProviders[];
}
