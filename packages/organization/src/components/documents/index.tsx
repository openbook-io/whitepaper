import React, { useState } from 'react';
import { 
  withStyles, 
  WithStyles,
  Grid,
  Button
} from '@material-ui/core';
import style from './style';
import { useGlobalState } from '../../state';
import Document from '../document';

interface Props extends WithStyles<typeof style> {
  documents: any
}

function Documents (props: Props) {
  const { classes, documents } = props;

  const [dialogCreateDocument, setDialogCreateDocument] = useGlobalState('dialogCreateDocument');

  const createDocument = () => {
    setDialogCreateDocument(true);
  }

  return (
    <div className={classes.outer}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <h1 className={classes.title}>Documents</h1>
        </Grid>
        <Grid item>
          <Button onClick={createDocument} variant="contained" color="secondary">Create Document</Button>
        </Grid>
      </Grid>
      { documents.map((document, index) => <Document document={document} key={index} />)}
    </div>
  );
}

export default withStyles(style)(Documents);
