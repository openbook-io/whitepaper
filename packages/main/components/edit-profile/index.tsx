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
  CircularProgress
} from '@material-ui/core';
import { useUser } from '../../utils/userContext';
import { AssetsDialog, Avatar, omitEmpty } from '@whitepaper/ui';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER } from '@whitepaper/queries';

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

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const [updateUser, {loading}] = useMutation(UPDATE_USER)

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
          </form>
        </div>
      </Container>
    </div>
  );
}

export default withStyles(style)(EditProfile)