import React, { ReactChild } from 'react';
import style from './style';
import { 
  WithStyles, 
  withStyles,
  Typography,
  IconButton
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from 'mdi-react/CloseIcon';

interface PropsTwo extends WithStyles<typeof style> {
  children: ReactChild;
  onClose?: () => void;
}

function DialogTitle (props: PropsTwo) {
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
};

export default withStyles(style)(DialogTitle)