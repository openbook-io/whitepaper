import React, { useState } from 'react';
import { 
  withStyles, 
  WithStyles,
  Paper,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import style from './style';
import Dropzone from 'react-dropzone'
import clsx from 'clsx';
import CloudUploadIcon from 'mdi-react/CloudUploadIcon';

interface Props extends WithStyles<typeof style> {}

function DropzoneArea (props: Props) {
  const { classes } = props;

  const onDrop =  async (files) => {
    console.log(files);
  }

  return (
    <div className={classes.outer}>
      <div className={classes.dropzoneFrame}>
        <Dropzone accept={'.pdf'} onDrop={acceptedFiles => onDrop(acceptedFiles)} multiple={false}>
          {({getRootProps, getInputProps, isDragActive}) => (
            <Paper className={classes.container}>
              <div {...getRootProps()} className={clsx(classes.dropzoneOuter)}>
                <input {...getInputProps()} />
                <Grid container direction="column" justify="center" alignItems="center" className={clsx(classes.dropzoneInner, {
                  [classes.dropzoneInnerActive] : isDragActive
                })}>
                  <Grid item>
                    {
                      isDragActive ?
                        <Typography variant="body1" className={classes.dropText}>Drop file here ...</Typography> :
                        <Typography variant="body1" className={classes.dropText}>Drag and drop PDF here, or click to select file</Typography>
                    }
                    <Button variant="contained" color="primary" className={classes.dropButton}><CloudUploadIcon className={classes.dropButtonIcon} /> Upload</Button>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          )}
        </Dropzone>
      </div>
    </div>
  );
}

export default withStyles(style)(DropzoneArea);
