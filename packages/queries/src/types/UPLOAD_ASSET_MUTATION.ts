/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssetType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UPLOAD_ASSET_MUTATION
// ====================================================

export interface UPLOAD_ASSET_MUTATION_uploadAsset {
  __typename: "Asset";
  id: string;
  publicId: string;
  version: number | null;
  type: string;
}

export interface UPLOAD_ASSET_MUTATION {
  uploadAsset: UPLOAD_ASSET_MUTATION_uploadAsset;
}

export interface UPLOAD_ASSET_MUTATIONVariables {
  type: AssetType;
  file: WhitepaperUpload;
}
