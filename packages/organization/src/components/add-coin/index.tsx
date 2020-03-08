import React, {useState, ChangeEvent} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { 
  withStyles, 
  WithStyles,
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  CircularProgress,
  Grid,
  FormControlLabel,
  Switch
} from '@material-ui/core';
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_CRYPTO_DATA_COIN } from '@whitepaper/queries';
import style from './style';

interface Props extends WithStyles<typeof style> {
  edit?: boolean,
  coin?: any,
  onSave: (values: any) => void,
  loading?: boolean
}

function AddCoin (props: Props) {
  const { classes, edit, coin, onSave, loading } = props;

  const [values, setValues] = useState({
    name: coin && (coin.name  || ''),
    ticker: coin && (coin.ticker  || ''),
    isOnExchange: coin && (coin.isOnExchange  || false),
    coinDataId: coin && coin.cryptoDataCoin && coin.cryptoDataCoin.id
  })

  const [searchCrypto, searchCryptoInfo] = useLazyQuery(SEARCH_CRYPTO_DATA_COIN)
  const [coinData, setCoinData] = useState(coin && coin.cryptoDataCoin);

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

  const handleSave = () => {
    const data = {
      ...values,
      ...(coin) && {id: coin.id}
    }

    onSave(data);
  }

  const handleChangeSwitch = event => {
    setCoinData(null);
    setValues({
      ...values,
      isOnExchange: event.target.checked,
      ...(!event.target.checked) && {coinDataId: null}
    });
  };

  const handleAutocompleteTextChange = event => {
    if(searchCryptoInfo.loading) return
    
    searchCrypto({variables: {search: event.target.value}});
  };

  const handleAutocompleteChange = (event, newValue) => {
    setCoinData(newValue);
    setValues({
      ...values,
      ticker: (newValue && newValue.symbol) || null,
      coinDataId: (newValue && newValue.id) || null
    });
  }

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
        <FormControlLabel
          className={classes.textField}
          control={
            <Switch
              checked={values.isOnExchange}
              onChange={handleChangeSwitch}
              value="checkedB"
              color="primary"
            />
          }
          label="Is this coin listed on an exchange?"
        />
        { !values.isOnExchange && 
          <TextField
            fullWidth
            label="Ticker Name"
            placeholder="BTC, ETH, XRP etc.."
            type="text"
            name="ticker"
            value={values.ticker}
            onChange={handleChangeTicker}
          />
        }
        { values.isOnExchange &&
          <Autocomplete
            options={(searchCryptoInfo.data && searchCryptoInfo.data.searchCryptoDataCoins) || []}
            getOptionLabel={option => option.symbol}
            filterOptions={x => x}
            autoComplete
            includeInputInList
            onChange={handleAutocompleteChange}
            loading={searchCryptoInfo.loading}
            value={coinData}
            disableOpenOnFocus
            renderInput={params => (
              <TextField
                {...params}
                label="Ticker Name"
                placeholder="BTC, ETH, XRP etc.."
                onChange={handleAutocompleteTextChange}
                fullWidth
              />
            )}
          />
        }
      </CardContent>
      <CardActions>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Button type="submit" color="secondary" variant="contained" disabled={loading} onClick={handleSave}>{edit ? 'Update Coin' : 'Save Coin'}</Button>
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
