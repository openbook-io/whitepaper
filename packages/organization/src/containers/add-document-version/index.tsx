import React from 'react';
import { RouteComponentProps } from '@reach/router';
import AddDocumentVersion from '../../components/add-document-version';
import { 
  withStyles, 
  WithStyles
} from '@material-ui/core';
import style from './style';

interface Props extends RouteComponentProps, WithStyles<typeof style> {
  documentId?: number;
}

function AddDocumentVersionPage(props: Props) {
  const { classes, documentId } = props;

  return (
    <div className={classes.main}>
      <AddDocumentVersion documentId={documentId} />
    </div>
  )
}

export default withStyles(style)(AddDocumentVersionPage);