import { useState } from 'react';
import style from './style';
import { 
  WithStyles, 
  withStyles, 
  Button, 
  Paper, 
  Grid, 
  CircularProgress, 
  FormControl, 
  FormControlLabel,
  Checkbox,
  FormHelperText, 
  Input, 
  InputLabel 
} from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import errorFormatting from '../../utils/errorFormatting'
import { setCookie } from 'nookies'
import { SIGNUP_MUTATION } from '../../queries/register';
import { CURRENT_USER } from '../../queries/user';
import Link from 'next/link';

import Router from 'next/router';

interface Props extends WithStyles<typeof style> {}

function Register (props: Props) {
  const {classes} = props;
  const [values, setValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    newsletter: false
  });

  const { email, firstName, lastName, username, password, newsletter } = values

  const [register, {error, loading}] = useMutation(
    SIGNUP_MUTATION, {
      variables: {data: { email, firstName, lastName, username, password, newsletter }},
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

  const saveCheckbox = (e) => {
    setValues({ 
      ...values,
      newsletter: e.target.checked 
    });
  }

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
          <FormControl fullWidth error={validationErrors.hasOwnProperty('username')} className={classes.formControl}>
            <InputLabel>Username*</InputLabel>
            <Input
              placeholder="johndoe"
              required
              value={values.username}
              onChange={handleChange('username')}
            />
            {validationErrors.hasOwnProperty('username') && <FormHelperText>{validationErrors['username']}</FormHelperText>}
          </FormControl>
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
          <FormControl fullWidth className={classes.formControl}>
            <FormControlLabel control={<Checkbox name="newsletter" onChange={saveCheckbox} color="primary" />} label="Sign me up for the newsletter"/>
          </FormControl>
          {loading && <CircularProgress className={classes.loading} size={30} />}
          <Button className={classes.button} variant="contained" color="secondary" type="submit">Register</Button>
        </Paper>
        <div className={classes.switchToLink}>
          Already a member? <Link href="/login">Sign In</Link>
        </div>
      </form>
    </div>
  );
}

export default withStyles(style)(Register)