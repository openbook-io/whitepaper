import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '../queries/user';

function LoggedIn (props) {
  const user = useQuery(CURRENT_USER)

  return (
    <React.Fragment>
      { user.data && user.data.me && !props.dontShow && props.children}
      { user.data && !user.data.me && props.dontShow && props.children}
    </React.Fragment>
  )
}

export default LoggedIn;