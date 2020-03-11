import React, {useState, ChangeEvent} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { 
  withStyles, 
  WithStyles,
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  CircularProgress,
  Grid,
  FormControlLabel,
  Switch,
  Snackbar
} from '@material-ui/core';
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_CRYPTO_DATA_COIN } from '@whitepaper/queries';
import style from './style';
import Dropzone from '../dropzone';

interface Props extends WithStyles<typeof style> {}

function AddDocumentVersion (props: Props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Dropzone />
      <Card>
        <CardContent>
          <h1>Test</h1>
        </CardContent>
        <CardActions>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Button type="submit" color="secondary" variant="contained">Save Document</Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default withStyles(style)(AddDocumentVersion);
