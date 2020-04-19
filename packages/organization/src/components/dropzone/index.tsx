import React, { useState } from 'react';
import { 
  withStyles, 
  WithStyles,
  Paper,
  Grid,
  Typography,
  Button,
  CircularProgress
} from '@material-ui/core';
import style from './style';
import Dropzone from 'react-dropzone'
import clsx from 'clsx';
import CloudUploadIcon from 'mdi-react/CloudUploadIcon';
import { useMutation } from '@apollo/react-hooks';
import { UPLOAD_PDF } from '@whitepaper/queries';

interface Props extends WithStyles<typeof style> {
  onPdfFinished: (data) => void;
}

function DropzoneArea (props: Props) {
  const { classes, onPdfFinished } = props;

  const [values, setValues] = useState({
    loading: false,
    uploadProgress: 0,
    uploadProgressActive: false,
    uploadProcesssActive: false,
    currentFile: null
  })

  const [uploadPdf, {loading}] = useMutation(UPLOAD_PDF)

  const onDrop =  async (files) => {

    setValues({
      ...values,
      loading: true,
      uploadProgressActive: true,
      uploadProgress: 0,
      uploadProcesssActive: false
    });

    const {data} = await uploadPdf({
      variables: { file: files[0] },
      context: {
        fetchOptions: {
          onUploadProgress: (progress => {
            if (progress.lengthComputable) {
              var percentComplete = Math.round((progress.loaded / progress.total) * 100);
              //Do something with upload progress
              setValues({
                ...values,
                loading: true,
                uploadProgressActive: true,
                uploadProgress: percentComplete
              });

              if(percentComplete === 100) {
                setValues({
                  ...values,
                  loading: true,
                  uploadProgressActive: false,
                  uploadProcesssActive: true
                });
              }
            }
          })
        }
      }
    })

    onPdfFinished(data)

    setValues({
      ...values,
      loading: false,
      uploadProgress: 0,
      uploadProcesssActive: false,
      currentFile: data
    });
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
        {values.currentFile &&
          <Grid container direction="row" justify="center" alignItems="center" className={classes.progress}>
            <Grid item>
              <Typography variant="body1" className={classes.dropText}>{values.currentFile.uploadPdf.name}</Typography>
            </Grid>
          </Grid>
        }
        {values.loading &&
          <Grid container direction="column" justify="center" alignItems="center" className={classes.progress}>
            <Grid item>
              {values.uploadProcesssActive &&
                <React.Fragment>
                  <Typography variant="body1" className={classes.dropText}>Processing PDF File</Typography>
                  <CircularProgress  />
                </React.Fragment>
              }
              {values.uploadProgressActive &&
                <React.Fragment>
                  <Typography variant="body1" className={classes.dropText}>{values.uploadProgress}% Uploading</Typography>
                  <CircularProgress
                    variant="determinate"
                    value={values.uploadProgress}
                  />
                </React.Fragment>
              }
            </Grid>
          </Grid>
        }
      </div>
    </div>
  );
}

export default withStyles(style)(DropzoneArea);
