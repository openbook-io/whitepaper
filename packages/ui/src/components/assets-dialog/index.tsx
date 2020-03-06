import React, { useRef } from 'react';
import style from './style';
import { 
  WithStyles, 
  withStyles,
  Dialog,
  DialogContent,
  Typography,
  Grid,
  CircularProgress
} from '@material-ui/core';
import DialogTitle from '../dialog-title';
import CloudUploadIcon from 'mdi-react/CloudUploadIcon';
import Transition from '../transition';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { UPLOAD_ASSET, GET_ASSETS } from '@whitepaper/queries';
import { Image, Transformation } from 'cloudinary-react';

interface Props extends WithStyles<typeof style> {
  open: boolean;
  onClose?: () => void;
  type?: string;
  onSelect: (asset) => void;
}

function AssetsDialog (props: Props) {
  const { classes, open, onClose, type, onSelect } = props;
  const uploadRef = useRef<HTMLInputElement>(null);

  const assets = useQuery(GET_ASSETS, {
    variables: {
      type
    }
  })

  const [upload, uploadAssetInfo] = useMutation(
    UPLOAD_ASSET
  )

  const onChangeFile = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    if(event.target.files.length) {
      const file = event.target.files[0];
 
      await upload({
        variables: {file: file, type: type},
        refetchQueries: [{query: GET_ASSETS, variables: {type}}],
        awaitRefetchQueries: true
      });
    }
  }

  const openFileSelector = () => {
    if(uploadRef && uploadRef.current)
      uploadRef.current.click();
  }

  return (
    <Dialog
      className={classes.dialog}
      PaperProps={{className:classes.paper}}
      onClose={onClose}
      open={open}
      fullWidth={true}
      maxWidth="sm"
      TransitionComponent={Transition}
    >
      <DialogTitle onClose={onClose}>
        Choose Your Image
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Grid container spacing={2}>
          <Grid item xs={4} className={classes.gridItem}>
            <input className={classes.fileInput} ref={uploadRef} type="file" onChange={onChangeFile} accept="image/x-png,image/jpeg" />
            <div className={classes.item} onClick={openFileSelector}>
              <Grid container direction="column" justify="center" alignItems="center" className={classes.itemContent}>
                <Grid item>
                  <CloudUploadIcon />
                  <Typography variant="body1" gutterBottom>
                    Upload Photo
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {
            !assets.loading && assets.data.getAssets.map((asset) => {
              return (
                <Grid key={asset.id} item xs={4} className={classes.gridItem}>
                  <Image className={classes.gridImage} publicId={asset.publicId} onClick={() => onSelect(asset)}>
                    <Transformation height="300" width="300" crop="fill" />
                  </Image>
                </Grid>
              )
            })
          }
        </Grid>
      </DialogContent>
      {uploadAssetInfo.loading &&
        <Grid container direction="column" justify="center" alignItems="center" className={classes.progress}>
          <Grid item>
            <CircularProgress  />
          </Grid>
        </Grid>
      }
    </Dialog>
  );
}

export default withStyles(style)(AssetsDialog)