import { useState } from 'react';
import style from './style';
import { WithStyles, withStyles, Button, Paper, CircularProgress, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import errorFormatting from '../../utils/errorFormatting'
import { FORGOT_PASSWORD } from '@whitepaper/queries';
import Link from 'next/link';

interface Props extends WithStyles<typeof style> {}

function Login (props: Props) {
  const { classes } = props;
  const [values, setValues] = useState({
    email: ''
  });

  const [sendRecoveryEmail, setSendRecoveryEmail] = useState(false);

  const { email } = values
  
  const [forgotPassword, {error, loading}] = useMutation(
    FORGOT_PASSWORD, {
      variables: {data: { email }}
    }
  )

  const handleChange = (name: string) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const validationErrors = errorFormatting(error);

  return (
    <div className={classes.outer}>
      <h1 className={classes.title}>Forgot Password</h1>
      { !sendRecoveryEmail && 
      <form
        method="post"
        onSubmit={async (e: any) => {
          e.preventDefault();

          await forgotPassword();
          setSendRecoveryEmail(true);
        }}>
        <Paper className={classes.card}>
          {validationErrors.hasOwnProperty('message') && <div className={classes.error}>{validationErrors['message']}</div>}
          <FormControl fullWidth error={validationErrors.hasOwnProperty('email')} className={classes.formControl}>
            <InputLabel>Email*</InputLabel>
            <Input
              placeholder="Your email"
              required
              value={values.email}
              onChange={handleChange('email')}
            />
            {validationErrors.hasOwnProperty('email') && <FormHelperText>{validationErrors['email']}</FormHelperText>}
          </FormControl>
          {loading && <CircularProgress className={classes.loading} size={30} />}
          <Button className={classes.button} variant="contained" color="secondary" type="submit">Send recovery email</Button>
        </Paper>
      </form>
      }
      { sendRecoveryEmail && 
        <Paper className={classes.card}>
          <p>Follow the instructions in your email on how to recovery your password</p>
          <Link href="/">Go back to the homepage</Link>
        </Paper>
      }
    </div>
  );
}

export default withStyles(style)(Login)