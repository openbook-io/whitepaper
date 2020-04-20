import React from 'react';
import { 
  withStyles, 
  WithStyles,
  Grid,
  CircularProgress
} from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { GET_DOCUMENT_VERSION_BY_ID } from '@whitepaper/queries';
import Pdf from '../_ui/pdf';
import style from './style';

interface Props extends WithStyles<typeof style> {
  documentId: any;
}

function DocumentVersion (props: Props) {
  const { classes, documentId } = props;

  const documentVersion = useQuery(GET_DOCUMENT_VERSION_BY_ID, {variables: {id: documentId}})

  return (
    <div className={classes.outer}>
      <div className={classes.headerSpacing} />
      {documentVersion.loading && <CircularProgress />}
      {!documentVersion.loading &&
        <Grid container className={classes.container}>
          <Grid item className={classes.sidebarOuter}>
            <div className={classes.sidebar}>Test</div>
          </Grid>
          <Grid item xs={true} className={classes.pdfContainer}>
            <Pdf pdf={documentVersion.data.getDocumentVersionById.pdf} />
          </Grid>
        </Grid>
      }
    </div>
  );
}

export default withStyles(style)(DocumentVersion);
