import { useState } from 'react';
import style from './style';
import { WithStyles, withStyles, Button, Paper, CircularProgress, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import errorFormatting from '../../utils/errorFormatting'
import { setCookie } from 'nookies'
import { CURRENT_USER } from '../../queries/user';
import { LOGIN } from '../../queries/login';
import Router from 'next/router';

interface Props extends WithStyles<typeof style> {}

function Login (props: Props) {
  const { classes } = props;
  const [values, setValues] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const { usernameOrEmail, password } = values
  
  const [login, {error, loading}] = useMutation(
    LOGIN, {
      variables: {data: { usernameOrEmail, password }},
      update: async (store, {data}) => {
        setCookie({}, 'token', data.login.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/'
        })

        const currentUser:any = store.readQuery({ query: CURRENT_USER });
        currentUser.me = data.login.user
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
      <h1 className={classes.title}>Login</h1>
      <form
        method="post"
        onSubmit={async (e: any) => {
          e.preventDefault();

          await login();
          Router.push('/profile');
        }}>
        <Paper className={classes.card}>
          {validationErrors.hasOwnProperty('message') && <div className={classes.error}>{validationErrors['message']}</div>}
          <FormControl fullWidth error={validationErrors.hasOwnProperty('email')} className={classes.formControl}>
            <InputLabel>Email or Username*</InputLabel>
            <Input
              placeholder="Your email or username"
              required
              value={values.usernameOrEmail}
              onChange={handleChange('usernameOrEmail')}
            />
            {validationErrors.hasOwnProperty('usernameOrEmail') && <FormHelperText>{validationErrors['usernameOrEmail']}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth error={validationErrors.hasOwnProperty('password')} className={classes.formControl}>
            <InputLabel>Password*</InputLabel>
            <Input
              placeholder="Your password"
              required
              type="password"
              value={values.password}
              onChange={handleChange('password')}
            />
            {validationErrors.hasOwnProperty('password') && <FormHelperText>{validationErrors['password']}</FormHelperText>}
          </FormControl>
          {loading && <CircularProgress className={classes.loading} size={30} />}
          <Button className={classes.button} variant="contained" color="secondary" type="submit">Login</Button>
        </Paper>
      </form>
    </div>
  );
}

export default withStyles(style)(Login)