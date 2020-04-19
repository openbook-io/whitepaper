import React from 'react';
import { RouteComponentProps } from '@reach/router';
import DocumentVersion from '../../components/document-version';
import { 
  withStyles, 
  WithStyles
} from '@material-ui/core';
import style from './style';

interface Props extends RouteComponentProps, WithStyles<typeof style> {
  documentVersionId?: number;
}

function DocumentVersionPage(props: Props) {
  const { classes, documentVersionId } = props;

  return (
    <div>
      <DocumentVersion documentVersionId={documentVersionId} />
    </div>
  )
}

export default withStyles(style)(DocumentVersionPage);