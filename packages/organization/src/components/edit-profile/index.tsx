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
  Grid
} from '@material-ui/core';
import style from './style';
import { useOrganization } from '../../utils/organizationContext';
import { useMutation } from '@apollo/react-hooks';
import { EDIT_ORGANIZATION } from '../../queries/organization';
//import omitEmpty from 'omit-empty';
import omitEmpty from '../../utils/omitEmpty';
import { AssetsDialog, Avatar } from '@whitepaper/ui';

interface Props extends WithStyles<typeof style> {
}

function EditProfile (props: Props) {
  const { classes } = props;
  const organization = useOrganization();

  const [values, setValues] = useState({
    name: organization && organization.name || '',
    website: organization && organization.website || '',
    about: organization && organization.about || '',
  })

  const [dialogOpen, setDialogOpen] = useState(false);

  const [editOrganization, {loading}] = useMutation(EDIT_ORGANIZATION)

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleAssetSelect = (asset) => {
    console.log(asset);
  }

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
    }}>
      <Card>
        <CardContent>
          <Avatar className={classes.avatar} type="organization" size={120} onClick={() => setDialogOpen(true)} />
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
    </form>
  );
}

export default withStyles(style)(EditProfile);
