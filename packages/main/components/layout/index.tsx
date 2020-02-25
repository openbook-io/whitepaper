import React from 'react';
import style from './style';
import { withStyles, WithStyles } from '@material-ui/core';
import Header from '../header';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '@whitepaper/queries';
import { UserProvider } from '../../utils/userContext';

interface Props extends WithStyles<typeof style> {
  children: React.ReactNode
}

function Layout ({classes, children}: Props) {
  const { data } = useQuery(CURRENT_USER);

  return (
    <React.Fragment>
      <UserProvider value={data && data.me} >
        <Header />
        <div className={classes.toolbar} />
        {children}
      </UserProvider>
    </React.Fragment>
  )
}

export default withStyles(style)(Layout);