/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPLOAD_PDF_MUTATION
// ====================================================

export interface UPLOAD_PDF_MUTATION_uploadPdf {
  __typename: "Pdf";
  id: string;
  documentId: string;
  name: string;
}

export interface UPLOAD_PDF_MUTATION {
  uploadPdf: UPLOAD_PDF_MUTATION_uploadPdf;
}

export interface UPLOAD_PDF_MUTATIONVariables {
  file: WhitepaperUpload;
}
