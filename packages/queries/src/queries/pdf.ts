import gql from 'graphql-tag';

const PDF_FRAGMENT = gql`
  fragment PdfFragment on Pdf {
    id
    documentId
  	name
  }
`

const UPLOAD_PDF = gql`
  mutation UPLOAD_PDF_MUTATION($file: Upload!) {
    uploadPdf(file: $file) {
      ...PdfFragment
    }
  }

  ${PDF_FRAGMENT}
`;

export { 
  UPLOAD_PDF
};
