import React from 'react';
import { RouteComponentProps } from '@reach/router';
import AddCoin from '../../components/add-coin';
import { 
  withStyles, 
  WithStyles
} from '@material-ui/core';
import style from './style';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MY_CRYPTOCURRENCY, EDIT_CRYPTOCURRENCY } from '@whitepaper/queries';
import PageLoader from '../../components/page-loader';

interface Props extends RouteComponentProps, WithStyles<typeof style> {
  coinId?: number;
}

function EditCoinPage(props: Props) {
  const { classes, coinId } = props;

  const myCrypto = useQuery(MY_CRYPTOCURRENCY, {
    variables: {
      id: coinId
    }
  })

  const [updateCryptocurrency, {loading}] = useMutation(
    EDIT_CRYPTOCURRENCY
  )

  const handleSave = async (coin: any) => {
    await updateCryptocurrency({
      variables: {data: coin}
    })
  }

  return (
    <div className={classes.main}>
      {!myCrypto.loading && 
        <AddCoin onSave={handleSave} coin={myCrypto.data.myCryptocurrency} edit={true} loading={loading} />
      }
      {myCrypto.loading && <PageLoader />}
    </div>
  )
}

export default withStyles(style)(EditCoinPage);