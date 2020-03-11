import React, { useState } from 'react';
import { 
  withStyles, 
  WithStyles,
  Grid,
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  IconButton,
} from '@material-ui/core';
import style from './style';
import { Link } from "@reach/router";
import PencilIcon from 'mdi-react/PencilIcon';
import CloudUploadIcon from 'mdi-react/CloudUploadIcon';
import { useGlobalState } from '../../state';

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
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Type
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((document: any, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{document.id}</TableCell>
                  <TableCell>{document.type.name}</TableCell>
                  <TableCell align="right">
                    <Link to={`/add-document-version/${document.id}`}>
                      <IconButton>
                        <CloudUploadIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default withStyles(style)(Documents);
