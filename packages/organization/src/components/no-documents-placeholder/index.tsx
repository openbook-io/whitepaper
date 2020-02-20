import React from 'react';
import { 
  WithStyles,
  withStyles,
  Typography,
  Button
} from '@material-ui/core';
import style from './style'

interface Props extends WithStyles<typeof style> {}

function NoDocumentsPlaceholder(props: Props) {
  const { classes } = props

  return (
    <div className={classes.container}>
      <img className={classes.placeholder} src="/placeholder-document.svg" />
      <Typography variant="h4" gutterBottom>
        Whitepaper
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.text}>
        Publish your whitepapers with versioning and analytics
      </Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        Upload Whitepaper
      </Button>
    </div>
  );
}

export default withStyles(style)(NoDocumentsPlaceholder);
