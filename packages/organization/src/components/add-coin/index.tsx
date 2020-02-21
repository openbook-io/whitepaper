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

interface Props extends WithStyles<typeof style> {
  edit?: boolean,
  coin?: any,
  onSave: (values: any) => void,
  loading?: boolean
}

function AddCoin (props: Props) {
  const { classes, edit, coin, onSave, loading } = props;

  const [values, setValues] = useState(coin || {
    name: '',
    ticker: ''
  })

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeTicker = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      ticker: event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "")
    });
  };

  return (
    <Card>
      <CardContent>
        <TextField
          className={classes.textField}
          fullWidth
          label="Coin Name"
          placeholder="Bitcoin, Ethereum, Ripple etc.."
          type="text"
          name="name"
          value={values.name}
          onChange={handleChangeText}
        />
        <TextField
          fullWidth
          label="Ticker Name"
          placeholder="BTC, ETH, XRP etc.."
          type="text"
          name="ticker"
          value={values.ticker}
          onChange={handleChangeTicker}
        />
      </CardContent>
      <CardActions>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Button type="submit" color="secondary" variant="contained" disabled={loading} onClick={() => onSave(values)}>{edit ? 'Update Coin' : 'Save Coin'}</Button>
          </Grid>
          {loading && 
            <Grid item>
              <CircularProgress size={30} />
            </Grid>
          }
        </Grid>
      </CardActions>
    </Card>
  );
}

export default withStyles(style)(AddCoin);
