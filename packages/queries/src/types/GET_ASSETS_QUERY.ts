/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssetType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GET_ASSETS_QUERY
// ====================================================

export interface GET_ASSETS_QUERY_getAssets {
  __typename: "Asset";
  id: string;
  publicId: string;
  version: number | null;
  type: string;
}

export interface GET_ASSETS_QUERY {
  getAssets: GET_ASSETS_QUERY_getAssets[];
}

export interface GET_ASSETS_QUERYVariables {
  type?: AssetType | null;
}
