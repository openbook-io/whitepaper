import React, {useState, ChangeEvent} from 'react';
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
  Snackbar
} from '@material-ui/core';
import style from './style';
import { useOrganization } from '../../utils/organizationContext';
import { useMutation } from '@apollo/react-hooks';
import { MY_CURRENT_ORGANIZATION, EDIT_ORGANIZATION, EDIT_ORGANIZATION_LINK, ADD_ORGANIZATION_LINK, DELETE_ORGANIZATION_LINK } from '@whitepaper/queries';
import omitEmpty from '../../utils/omitEmpty';
import { AssetsDialog, Avatar, SimpleIcon, LinkAddModal, LinkAddUrlModal, errorFormatting } from '@whitepaper/ui';
import PlusCircleIcon from 'mdi-react/PlusCircleIcon';

interface Props extends WithStyles<typeof style> {
}

function EditProfile (props: Props) {
  const { classes } = props;
  const organization = useOrganization();

  const [values, setValues] = useState({
    assetId: organization && organization.picture && (organization.picture.id || null),
    name: organization && (organization.name || ''),
    website: organization && (organization.website || ''),
    about: organization && (organization.about || ''),
  })

  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [openLinkDialog, setOpenLinkDialog] = useState(false)
  const [openUrlLinkDialog, setUrlOpenLinkDialog] = useState({
    open: false,
    provider: {},
    url: {}
  })

  const [addOrganizationLink, addOrganizationLinkInfo] = useMutation(ADD_ORGANIZATION_LINK)
  const [editOrganizationLink, editOrganizationLinkInfo] = useMutation(EDIT_ORGANIZATION_LINK)
  const [deleteOrganizationLink, deleteOrganizationLinkInfo] = useMutation(DELETE_ORGANIZATION_LINK)

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const [editOrganization, {loading}] = useMutation(EDIT_ORGANIZATION)

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
    await addOrganizationLink({
      variables: {
        data: {url: input, socialProviderId: provider.id}
      },
      refetchQueries: [{query: MY_CURRENT_ORGANIZATION}],
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
    await editOrganizationLink({
      variables: {
        data: {url: url, id: link.id}
      },
      refetchQueries: [{query: MY_CURRENT_ORGANIZATION}],
      awaitRefetchQueries: true
    })

    setUrlOpenLinkDialog({
      ...openUrlLinkDialog,
      open: false
    })
  }

  const onUrlLinkDelete = async (link) => {
    await deleteOrganizationLink({
      variables: {
        id: link.id
      },
      refetchQueries: [{query: MY_CURRENT_ORGANIZATION}],
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

  const urlValidationErrors = errorFormatting(addOrganizationLinkInfo.error);
  const editUrlValidationErrors = errorFormatting(editOrganizationLinkInfo.error);

  return (
    <form 
      method="post"
      onSubmit={async e => {
        e.preventDefault();

        await editOrganization({
          variables: {
            data: omitEmpty(values)
          }
        });

        setOpenSnackbar(true)
    }}>
      <Card>
        <CardContent>
          <Avatar className={classes.avatar} asset={selectedAsset || organization.picture} type="organization" size={120} onClick={() => setDialogOpen(true)} />
          <TextField
            className={classes.textField}
            fullWidth
            required
            label="Organization Name"
            placeholder="Example LTD"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChangeText}
          />
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
            placeholder="Tell something about your organization"
            type="text"
            name="about"
            value={values.about}
            onChange={handleChangeText}
            rows={3}
            rowsMax={10}
          />
          { organization && organization.links.length > 0 && 
            <Grid container className={classes.icons} spacing={1}>
              { renderLinks(organization.links) }
            </Grid>
            }
          <Button variant="outlined" className={classes.addLinkButton} onClick={() => setOpenLinkDialog(true)}>
            <PlusCircleIcon />&nbsp; Add Link
          </Button>
        </CardContent>
        <CardActions>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Button type="submit" color="secondary" variant="contained" disabled={loading}>Update Organization</Button>
            </Grid>
            {loading && 
              <Grid item>
                <CircularProgress size={30} />
              </Grid>
            }
          </Grid>
        </CardActions>
      </Card>
      <AssetsDialog type="OrganizationAvatar" open={dialogOpen} onClose={() => setDialogOpen(false)} onSelect={handleAssetSelect} />
      <LinkAddUrlModal 
        open={openUrlLinkDialog.open} 
        onDelete={onUrlLinkDelete} 
        onClose={onUrlLinkDialogClose} 
        onSave={onUrlLinkDialogSave} 
        loading={editOrganizationLinkInfo.loading || deleteOrganizationLinkInfo.loading} 
        error={editUrlValidationErrors} 
        provider={openUrlLinkDialog.provider} 
        url={openUrlLinkDialog.url} />
      <LinkAddModal 
        open={openLinkDialog} 
        onClose={onLinkDialogClose} 
        onSave={onLinkDialogSave} 
        loading={addOrganizationLinkInfo.loading} 
        error={urlValidationErrors} />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Saved Organization Profile"
      />
    </form>
  );
}

export default withStyles(style)(EditProfile);
