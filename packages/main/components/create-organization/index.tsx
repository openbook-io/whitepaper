import React, { useState } from 'react';
import { 
  withStyles,
  WithStyles,
  Paper,
  Grid,
  CircularProgress,
  Container,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from '@material-ui/core';
import style from './style';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_ORGANIZATION, MY_ORGANIZATION } from '@whitepaper/queries';
import errorFormatting from '../../utils/errorFormatting'
import Router from 'next/router';

interface Props extends WithStyles<typeof style> {}

function CreateOrganization (props: Props) {
  const { classes } = props;
  const [ value, setValue ] = useState({
    name: '',
    slug: ''
  })

  const [createOrganization, createOrganizationInfo] = useMutation(CREATE_ORGANIZATION, {
    refetchQueries: [{query: MY_ORGANIZATION}],
    awaitRefetchQueries: true
  });

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

  const validationErrors = errorFormatting(createOrganizationInfo.error);

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

              Router.push('/my-organizations')

              setValue({ name: '', slug: '' });
          }}>
          <div className={classes.section}>
            <Typography className={classes.title} variant="h5">Set Up Organization</Typography>
            <Paper className={classes.paperPadding}>
              <Grid container direction="row" justify="space-between">
                <Grid item xs={6} className={classes.organizationGrid}>
                  <FormControl error={validationErrors.hasOwnProperty('name')} fullWidth>
                    <InputLabel>Fill Your Organization Name*</InputLabel>
                    <Input
                      placeholder="Example: Bitcoin"
                      required
                      name="name"
                      value={value.name}
                      onChange={onFieldChange}
                    />
                    {validationErrors.hasOwnProperty('name') && <FormHelperText>{validationErrors['name']}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={6} className={classes.organizationGrid}>
                  <FormControl error={validationErrors.hasOwnProperty('slug')} fullWidth>
                    <InputLabel>Your Organization Username*</InputLabel>
                    <Input
                      placeholder="Example: bitcoin"
                      required
                      name="slug"
                      value={value.slug}
                      onChange={onSlugChange}
                    />
                    {validationErrors.hasOwnProperty('slug') && <FormHelperText>{validationErrors['slug']}</FormHelperText>}
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </div>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Button variant="contained" color="primary" type="submit" disabled={createOrganizationInfo.loading}>
                Create Organization
              </Button>
            </Grid>
            <Grid item>
              {createOrganizationInfo.loading && <CircularProgress size={30} />}
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default withStyles(style)(CreateOrganization);
