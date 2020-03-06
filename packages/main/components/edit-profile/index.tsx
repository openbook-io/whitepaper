import React, {useState, ChangeEvent} from 'react';
import style from './style';
import { 
  WithStyles, 
  withStyles,
  Container,
  Card,
  CardContent,
  CardActions,
  TextField,
  Grid,
  Button,
  CircularProgress,
  Snackbar
} from '@material-ui/core';
import { useUser } from '../../utils/userContext';
import { AssetsDialog, Avatar, omitEmpty, SimpleIcon, LinkAddModal, LinkAddUrlModal, errorFormatting } from '@whitepaper/ui';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER, ADD_USER_LINK, EDIT_USER_LINK, DELETE_USER_LINK, CURRENT_USER } from '@whitepaper/queries';
import PlusCircleIcon from 'mdi-react/PlusCircleIcon';

interface Props extends WithStyles<typeof style> {}

function EditProfile (props: Props) {
  const { classes } = props;
  const user = useUser();

  const [values, setValues] = useState({
    assetId: user && user.avatar && (user.avatar.id || null),
    firstName: user && (user.firstName || ''),
    lastName: user && (user.lastName || ''),
    website: user && (user.website || ''),
    bio: user && (user.bio || ''),
  })

  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [openLinkDialog, setOpenLinkDialog] = useState(false)
  const [openUrlLinkDialog, setUrlOpenLinkDialog] = useState({
    open: false,
    provider: {},
    url: {}
  })

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const [updateUser, {loading}] = useMutation(UPDATE_USER)

  const [addUserLink, addUserLinkInfo] = useMutation(ADD_USER_LINK)
  const [editUserLink, editUserLinkInfo] = useMutation(EDIT_USER_LINK)
  const [deleteUserLink, deleteUserLinkInfo] = useMutation(DELETE_USER_LINK)

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleAssetSelect = (asset) => {
    setValues({
      ...values,
      assetId: asset.id
    })

    setSelectedAsset(asset);
    setDialogOpen(false)
  }

  const onLinkDialogClose = () => {
    setOpenLinkDialog(false)
  }

  const onLinkDialogSave = async (provider, input) => {
    await addUserLink({
      variables: {
        data: {url: input, socialProviderId: provider.id}
      },
      refetchQueries: [{query: CURRENT_USER}],
      awaitRefetchQueries: true
    })

    setOpenLinkDialog(false)
  }

  const openUrlDialog = (link) => {
    setUrlOpenLinkDialog({
      ...openUrlLinkDialog,
      open: true,
      provider: link.socialProvider,
      url: link
    })
  }

  const onUrlLinkDialogClose = () => {
    setUrlOpenLinkDialog({
      ...openUrlLinkDialog,
      open: false
    })
  }

  const onUrlLinkDialogSave = async (url, link) => {
    await editUserLink({
      variables: {
        data: {url: url, id: link.id}
      },
      refetchQueries: [{query: CURRENT_USER}],
      awaitRefetchQueries: true
    })

    setUrlOpenLinkDialog({
      ...openUrlLinkDialog,
      open: false
    })
  }

  const onUrlLinkDelete = async (link) => {
    await deleteUserLink({
      variables: {
        id: link.id
      },
      refetchQueries: [{query: CURRENT_USER}],
      awaitRefetchQueries: true
    })

    setUrlOpenLinkDialog({
      ...openUrlLinkDialog,
      open: false
    })
  }

  const renderLinks = (links) => {
    return links.map((link) => {
      return (
        <Grid item key={link.id}>
          <div className={classes.simpleIcon} onClick={() => openUrlDialog(link)}>
            <SimpleIcon color="#25304c" name={link.socialProvider.name} />
          </div>
        </Grid>
      )
    })
  }

  const urlValidationErrors = errorFormatting(addUserLinkInfo.error);
  const editUrlValidationErrors = errorFormatting(editUserLinkInfo.error);

  return (
    <div>
      <Container>
        <div className={classes.main}>
          <form 
            method="post"
            onSubmit={async e => {
              e.preventDefault();

              await updateUser({
                variables: {
                  data: omitEmpty(values)
                }
              });

              setOpenSnackbar(true)
            }}>
            <Card>
              <CardContent>
                <Avatar className={classes.avatar} asset={selectedAsset || (user && user.avatar)} type="user" size={120} onClick={() => setDialogOpen(true)} />
                <Grid container spacing={2}>
                  <Grid item xs>
                    <TextField
                      className={classes.textField}
                      fullWidth
                      required
                      label="First name"
                      placeholder="John"
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChangeText}
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      className={classes.textField}
                      fullWidth
                      required
                      label="Last name"
                      placeholder="Doe"
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChangeText}
                    />
                  </Grid>
                </Grid>
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Website"
                  placeholder="https://example.com"
                  type="text"
                  name="website"
                  value={values.website}
                  onChange={handleChangeText}
                />
                <TextField
                  multiline
                  fullWidth
                  label="About"
                  placeholder="Tell something about yourself"
                  type="text"
                  name="about"
                  value={values.bio}
                  onChange={handleChangeText}
                  rows={3}
                  rowsMax={10}
                />
                { user && user.links.length > 0 && 
                  <Grid container className={classes.icons} spacing={1}>
                    { renderLinks(user.links) }
                  </Grid>
                }
                <Button variant="outlined" className={classes.addLinkButton} onClick={() => setOpenLinkDialog(true)}>
                  <PlusCircleIcon />&nbsp; Add Link
                </Button>
              </CardContent>
              <CardActions>
                <Grid container alignItems="center" justify="space-between">
                  <Grid item>
                    <Button type="submit" color="secondary" variant="contained" disabled={loading}>Update your Profile</Button>
                  </Grid>
                  {loading && 
                    <Grid item>
                      <CircularProgress size={30} />
                    </Grid>
                  }
                </Grid>
              </CardActions>
            </Card>
            <AssetsDialog type="UserAvatar" open={dialogOpen} onClose={() => setDialogOpen(false)} onSelect={handleAssetSelect} />
            <LinkAddUrlModal 
              open={openUrlLinkDialog.open} 
              onDelete={onUrlLinkDelete} 
              onClose={onUrlLinkDialogClose} 
              onSave={onUrlLinkDialogSave} 
              loading={editUserLinkInfo.loading || deleteUserLinkInfo.loading} 
              error={editUrlValidationErrors} 
              provider={openUrlLinkDialog.provider} 
              url={openUrlLinkDialog.url} />
            <LinkAddModal 
              open={openLinkDialog} 
              onClose={onLinkDialogClose} 
              onSave={onLinkDialogSave} 
              loading={addUserLinkInfo.loading} 
              error={urlValidationErrors} />
            <Snackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={() => setOpenSnackbar(false)}
              message="Saved User Profile"
            />
          </form>
        </div>
      </Container>
    </div>
  );
}

export default withStyles(style)(EditProfile)