import React, { useState } from 'react';
import style from './style';
import { 
  withStyles, 
  WithStyles,
  Dialog,
  DialogContent,
  Grid
} from '@material-ui/core';
import SimpleIcon from '../simple-icon'
import { useQuery } from '@apollo/react-hooks';
import { SOCIAL_PROVIDERS } from '@whitepaper/queries';
import LinkAddUrlModal from '../link-add-url-modal';
import DialogTitle from '../dialog-title';
import Transition from '../transition';

interface Props extends WithStyles<typeof style> {
  open: any,
  onClose: any,
  onSave: any,
  loading: boolean,
  error: any
}

function LinkAddModal(props: Props) {
  const { open, onClose, classes, loading, onSave, error } = props
  const defaultUrlState = {
    open: false,
    provider: {
      name: ''
    }
  };

  const [urlDialog, setUrlDialog] = useState(defaultUrlState);
  const getSocialProviders = useQuery(SOCIAL_PROVIDERS)

  const closeUrlDialog = () => {
    console.log('123 executed')
    setUrlDialog(defaultUrlState);
  }

  const openUrlDialog = (provider) => {
    setUrlDialog({
      ...urlDialog,
      open: true,
      provider: provider
    });
  }

  const saveUrl = async (url) => {
    await onSave(urlDialog.provider, url)
    closeUrlDialog();
    return true
  }

  console.log(urlDialog);

  const renderSocialProviders = (socialProviders) => {
    return socialProviders.map((socialProvider) => {
      return (<Grid key={socialProvider.id} item xs={2} onClick={() => openUrlDialog(socialProvider)}>
        <SimpleIcon name={socialProvider.iconName} />
        <div className={classes.socialProviderName}>{socialProvider.name}</div>
      </Grid>)
    })
  }

  return (
    <React.Fragment>
      <Dialog 
        fullWidth 
        maxWidth="sm" 
        open={open} 
        onClose={onClose} 
        TransitionComponent={Transition}>
        <DialogTitle onClose={onClose}>Choose provider</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={4}>
            { !getSocialProviders.loading && renderSocialProviders(getSocialProviders.data.getSocialProviders)}
          </Grid>
        </DialogContent>
      </Dialog>
      <LinkAddUrlModal open={urlDialog.open} onClose={closeUrlDialog} provider={urlDialog.provider} onSave={saveUrl} error={error} loading={loading} />
    </React.Fragment>
  );
}

export default withStyles(style)(LinkAddModal)