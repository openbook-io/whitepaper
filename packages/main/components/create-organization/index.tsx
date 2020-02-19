import React, { useState } from 'react';
import { 
  withStyles,
  WithStyles,
  Paper,
  Grid,
  TextField,
  Container,
  Typography,
  Button
} from '@material-ui/core';
import style from './style';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_ORGANIZATION } from '../../queries/organization';

interface Props extends WithStyles<typeof style> {}

function CreateOrganization (props: Props) {
  const { classes } = props;
  const [ value, setValue ] = useState({
    name: '',
    slug: ''
  })

  const [createOrganization, createOrganizationInfo] = useMutation(CREATE_ORGANIZATION);

  const onFieldChange = (event) => {
    setValue({ 
      ...value,
      [event.target.name]: event.target.value 
    })
  }

  const onSlugChange = e => {
    const onlyNums = e.target.value.replace(/[^0-9a-z]/g, '');
    setValue({ 
      ...value,
      slug: onlyNums 
    });
  };

  return (
    <div className={classes.outer}>
      <Container>
        <form className={classes.form}
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              
              await createOrganization({
                variables: {
                  data: value
                }
              });

              setValue({ name: '', slug: '' });
          }}>
          <div className={classes.section}>
            <Typography className={classes.title} variant="h5">Set Up Organization</Typography>
            <Paper className={classes.paperPadding}>
              <Grid container direction="row" justify="space-between">
                <Grid item xs={6} className={classes.organizationGrid}>
                  <TextField
                    fullWidth
                    required
                    placeholder="Example: Bitcoin"
                    helperText="Fill Your Organization Name"
                    type="text"
                    name="name"
                    value={value.name}
                    onChange={onFieldChange}
                  />
                </Grid>
                <Grid item xs={6} className={classes.organizationGrid}>
                  <TextField
                    fullWidth
                    required
                    placeholder="Example: bitcoin"
                    helperText="Your Organization Username"
                    type="text"
                    name="slug"
                    value={value.slug}
                    onChange={onSlugChange}
                  />
                </Grid>
              </Grid>
            </Paper>
          </div>
          <Button variant="contained" color="primary" type="submit">
            Create Organization
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default withStyles(style)(CreateOrganization);
