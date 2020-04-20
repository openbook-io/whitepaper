import React from 'react';
import { 
  withStyles, 
  WithStyles, 
  Container
} from '@material-ui/core';
import style from './style';
import Document from '../_ui/document';

interface Props extends WithStyles<typeof style> {
  documents: any;
}

function Documents (props: Props) {
  const { classes, documents } = props;

  const renderDocuments = documents.map((document) => (
    <div key={document.id}>
      <Document document={document} />
    </div>
  ))

  return (
    <div className={classes.outer}>
      <h1>Documents</h1>
      {renderDocuments}
    </div>
  );
}

export default withStyles(style)(Documents);
