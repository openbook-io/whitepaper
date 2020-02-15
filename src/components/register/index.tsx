import { useState } from 'react';
import style from './style';
import { WithStyles, withStyles, Button, Paper, Grid, CircularProgress, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
//import { SIGNUP_MUTATION, SIGNUP_MUTATIONVariables } from '../../queries/types/SIGNUP_MUTATION'
import errorFormatting from '../../utils/errorFormatting'
import { setCookie } from 'nookies'
import { SIGNUP_MUTATION_QUERY } from '../../queries/register';
import { CURRENT_USER } from '../../queries/user';

import Router from 'next/router';

interface Props extends WithStyles<typeof style> {}

function Register (props: Props) {
  const {classes} = props;
  const [values, setValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  const { email, firstName, lastName, password } = values

  const [register, {error, loading}] = useMutation(
    SIGNUP_MUTATION_QUERY, {
      variables: {data: { email, firstName, lastName, password }},
      update: async (store, {data}) => {
        setCookie({}, 'token', data.register.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/'
        })

        const currentUser:any = store.readQuery({ query: CURRENT_USER });
        currentUser.me = data.register.user
        store.writeQuery({ query: CURRENT_USER, data: currentUser });
      }
    }
  )

  const handleChange = (name: string) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const validationErrors = errorFormatting(error);

  return (
    <div className={classes.outer}>
      <h1 className={classes.title}>Register</h1>
      <form
        method="post"
        onSubmit={async (e: any) => {
          e.preventDefault();

          await register();
          Router.push('/first-time');
        }}>
        <Paper className={classes.card}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormControl error={validationErrors.hasOwnProperty('firstName')} className={classes.formControl}>
                <InputLabel>First Name*</InputLabel>
                <Input
                  placeholder="John"
                  required
                  value={values.firstName}
                  onChange={handleChange('firstName')}
                />
                {validationErrors.hasOwnProperty('firstName') && <FormHelperText>{validationErrors['firstName']}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl error={validationErrors.hasOwnProperty('lastName')} className={classes.formControl}>
                <InputLabel>Last Name*</InputLabel>
                <Input
                  placeholder="Doe"
                  required
                  value={values.lastName}
                  onChange={handleChange('lastName')}
                />
                {validationErrors.hasOwnProperty('lastName') && <FormHelperText>{validationErrors['lastName']}</FormHelperText>}
              </FormControl>
            </Grid>
          </Grid>
          <FormControl fullWidth error={validationErrors.hasOwnProperty('email')} className={classes.formControl}>
            <InputLabel>Email*</InputLabel>
            <Input
              placeholder="john@doe.com"
              required
              value={values.email}
              onChange={handleChange('email')}
            />
            {validationErrors.hasOwnProperty('email') && <FormHelperText>{validationErrors['email']}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth error={validationErrors.hasOwnProperty('password')} className={classes.formControl}>
            <InputLabel>Password*</InputLabel>
            <Input
              placeholder="password"
              required
              type="password"
              value={values.password}
              onChange={handleChange('password')}
            />
            {validationErrors.hasOwnProperty('password') && <FormHelperText>{validationErrors['password']}</FormHelperText>}
          </FormControl>
          {loading && <CircularProgress className={classes.loading} size={30} />}
          <Button className={classes.button} variant="contained" color="primary" type="submit">Register</Button>
        </Paper>
      </form>
    </div>
  );
}

export default withStyles(style)(Register)