import React, { ReactChild, useRef, ChangeEvent } from 'react';
import style from './style';
import { 
  WithStyles, 
  withStyles,
  Dialog,
  DialogContent,
  Typography,
  IconButton,
  Slide,
  Grid
} from '@material-ui/core';
import CloseIcon from 'mdi-react/CloseIcon';
import CloudUploadIcon from 'mdi-react/CloudUploadIcon';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { TransitionProps } from '@material-ui/core/transitions';

interface Props extends WithStyles<typeof style> {
  open: boolean;
  onClose?: () => void;
}

interface PropsTwo extends WithStyles<typeof style> {
  children: ReactChild;
  onClose?: () => void;
}

const DialogTitle = withStyles(style)((props: PropsTwo) => {
  const { children, classes, onClose } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.dialogTitle}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const Transition = React.forwardRef(function Transition(props: TransitionProps, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AssetsDialog (props: Props) {
  const { classes, open, onClose } = props;
  const uploadRef = useRef<HTMLInputElement>(null);

  const onChangeFile = (event: ChangeEvent) => {
    console.log(event);
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
        <Grid container spacing={4}>
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
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(style)(AssetsDialog)