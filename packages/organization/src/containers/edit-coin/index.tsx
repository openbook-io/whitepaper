import React from 'react';
import { RouteComponentProps } from '@reach/router';
import AddCoin from '../../components/add-coin';
import { 
  withStyles, 
  WithStyles
} from '@material-ui/core';
import style from './style';
import { useQuery } from '@apollo/react-hooks';
import { MY_CRYPTOCURRENCY } from '@whitepaper/queries';
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

  const handleSave = async (coin: any) => {
    console.log(coin);
  }

  return (
    <div className={classes.main}>
      {!myCrypto.loading && 
        <AddCoin onSave={handleSave} coin={myCrypto.data.myCryptocurrency} edit={true} />
      }
      {myCrypto.loading && <PageLoader />}
    </div>
  )
}

export default withStyles(style)(EditCoinPage);