import React from 'react';
import { RouteComponentProps } from '@reach/router';
import NoCoinsPlaceholder from '../../components/no-coins-placeholder';

interface Props extends RouteComponentProps {}

function MyCoinsPage(props: Props) {
  return (
    <NoCoinsPlaceholder />
  )
}

export default MyCoinsPage;