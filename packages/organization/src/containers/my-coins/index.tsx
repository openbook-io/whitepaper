import React from 'react';
import { RouteComponentProps } from '@reach/router';
import NoCoinsPlaceholder from '../../components/no-coins-placeholder';
import Cryptocurrencies from '../../components/cryptocurrencies';
import PageLoader from '../../components/page-loader';
import { 
  withStyles, 
  WithStyles
} from '@material-ui/core';
import style from './style';
import { useQuery } from '@apollo/react-hooks';
import { MY_CRYPTOCURRENCIES } from '@whitepaper/queries';

interface Props extends RouteComponentProps, WithStyles<typeof style> {}

function MyCoinsPage(props: Props) {
  const cryptocurrencies = useQuery(MY_CRYPTOCURRENCIES);

  return (
    <React.Fragment>
      {!cryptocurrencies.loading && cryptocurrencies.data.myCryptocurrencies.length > 0 && <Cryptocurrencies cryptocurrencies={cryptocurrencies.data.myCryptocurrencies} />}
      {!cryptocurrencies.loading && !cryptocurrencies.data.myCryptocurrencies && <NoCoinsPlaceholder />}
      {cryptocurrencies.loading && <PageLoader />}
    </React.Fragment>
  )
}

export default withStyles(style)(MyCoinsPage);