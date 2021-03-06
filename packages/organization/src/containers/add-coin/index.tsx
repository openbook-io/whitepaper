import React from 'react';
import { RouteComponentProps } from '@reach/router';
import AddCoin from '../../components/add-coin';
import { 
  withStyles, 
  WithStyles
} from '@material-ui/core';
import style from './style';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_CRYPTOCURRENCY, MY_CRYPTOCURRENCIES } from '@whitepaper/queries';

interface Props extends RouteComponentProps, WithStyles<typeof style> {}

function AddCoinPage(props: Props) {
  const { classes, navigate } = props;
  const [saveCoin, {loading}] = useMutation(CREATE_CRYPTOCURRENCY)

  const handleSave = async (coin: any) => {
    await saveCoin({
      variables: {data: coin},
      refetchQueries: [{query: MY_CRYPTOCURRENCIES}],
      awaitRefetchQueries: true
    })

    navigate!('/my-coins')
  }

  return (
    <div className={classes.main}>
      <AddCoin onSave={handleSave} loading={loading} />
    </div>
  )
}

export default withStyles(style)(AddCoinPage);