import { useState } from 'react';
import style from './style';
import { WithStyles, withStyles, Button, Paper, CircularProgress, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import errorFormatting from '../../utils/errorFormatting'
import { CHANGE_PASSWORD } from '../../queries/login';
import Link from 'next/link';
import { useRouter } from 'next/router'

interface Props extends WithStyles<typeof style> {}

function ResetPassword (props: Props) {
  const { classes } = props;
  const [values, setValues] = useState({
    password: '',
    repeatPassword: ''
  });

  const router = useRouter()

  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { password, repeatPassword } = values
  
  const [changePassword, {error, loading}] = useMutation(
    CHANGE_PASSWORD, {
      variables: {
        data: { 
          password,
          token: router.query.token
        }
      }
    }
  )

  const handleChange = (name: string) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const validationErrors = errorFormatting(error);

  return (
    <div className={classes.outer}>
      <h1 className={classes.title}>Reset Password</h1>
      { !resetPasswordSuccess && 
      <form
        method="post"
        onSubmit={async (e: any) => {
          e.preventDefault();

          if(password === repeatPassword) {
            await changePassword();
            setResetPasswordSuccess(true);
          } else {
            setPasswordError(true)
          }
        }}>
        <Paper className={classes.card}>
          {passwordError && <div className={classes.error}>Your passwords are not the same</div>}
          <FormControl fullWidth error={validationErrors.hasOwnProperty('email')} className={classes.formControl}>
            <InputLabel>Password*</InputLabel>
            <Input
              placeholder="Your new password"
              required
              type="password"
              value={values.password}
              onChange={handleChange('password')}
            />
            {validationErrors.hasOwnProperty('password') && <FormHelperText>{validationErrors['password']}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth error={validationErrors.hasOwnProperty('email')} className={classes.formControl}>
            <InputLabel>Repeat Password*</InputLabel>
            <Input
              placeholder="Repeat your new password"
              required
              type="password"
              value={values.repeatPassword}
              onChange={handleChange('repeatPassword')}
            />
            {validationErrors.hasOwnProperty('repeatPassword') && <FormHelperText>{validationErrors['repeatPassword']}</FormHelperText>}
          </FormControl>
          {loading && <CircularProgress className={classes.loading} size={30} />}
          <Button className={classes.button} variant="contained" color="secondary" type="submit">Change password</Button>
        </Paper>
      </form>
      }
      { resetPasswordSuccess && 
        <Paper className={classes.card}>
          <p>Your password is succesfully change. Log in by using the link below</p>
          <Link href="/login">Sign in to your account</Link>
        </Paper>
      }
    </div>
  );
}

export default withStyles(style)(ResetPassword)