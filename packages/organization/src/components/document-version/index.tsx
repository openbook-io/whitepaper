import React from 'react';
import { 
  withStyles, 
  WithStyles,
  CircularProgress
} from '@material-ui/core';
import style from './style';
import { GET_DOCUMENT_VERSION } from '@whitepaper/queries';
import { useQuery } from '@apollo/react-hooks';
//import { Document } from 'react-pdf'
import {
  PdfLoader,
  PdfHighlighter
} from "react-pdf-highlighter";

interface Props extends WithStyles<typeof style> {
  documentVersionId: number
}

function DocumentVersion (props: Props) {
  const { classes, documentVersionId } = props;
  const documentVersion = useQuery(GET_DOCUMENT_VERSION, {variables: {documentVersionId}})

  return (
    <div className={classes.outer}>
      {!documentVersion.loading && documentVersion.data && <div className={classes.pdf}>
        <PdfLoader url={documentVersion.data.getDocumentVersion.pdf.documentUrl} beforeLoad={<CircularProgress />}>
          {pdfDocument => (
            <PdfHighlighter
            pdfDocument={pdfDocument}
            onSelectionFinished={() => {}}
            highlights={[]} />
          )}
        </PdfLoader>
      </div>}
    </div>
  );
}

export default withStyles(style)(DocumentVersion);
