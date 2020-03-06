import React, { useState, useEffect } from 'react';
import style from './style';
import { 
  withStyles, 
  WithStyles,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  CircularProgress,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from '@material-ui/core';
import DialogTitle from '../dialog-title';

interface Props extends WithStyles<typeof style> {
  open: any,
  onClose: any,
  onSave: any,
  onDelete?:any,
  loading: boolean,
  error: any,
  provider: any,
  url?: any
}

function LinkAddModal(props: Props) {
  const { open, onClose, classes, loading, onSave, error, provider, url, onDelete } = props

  const [input, setInput] = useState('');

  useEffect(() => {
    if(url)
      setInput(url.url)
  }, [url]);

  const handleUrlChange = (event) => {
    setInput(event.target.value)
  }

  const handleSave = async () => {
    await onSave(input, url)
    setInput('')
  }

  return (
      <Dialog fullWidth maxWidth="xs" open={open}>
      <DialogTitle onClose={onClose}>{url ? `Edit ${provider.name} Link` : `Add ${provider.name} Link`}</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <FormControl error={error.hasOwnProperty('url')} fullWidth>
          <InputLabel>{`Enter ${provider.name} URL`}</InputLabel>
          <Input
            autoFocus
            value={input}
            onChange={handleUrlChange}
          />
          {error.hasOwnProperty('url') && <FormHelperText>{error['url']}</FormHelperText>}
        </FormControl>
      </DialogContent>
      <DialogActions>
        {url &&
          <Button onClick={() => onDelete(url)} color="primary">
            Delete
          </Button> 
        }
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
      { loading &&
        <Grid className={classes.urlDialogLoading} container alignItems="center" justify="center">
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      }
    </Dialog>  
  );
}

export default withStyles(style)(LinkAddModal)