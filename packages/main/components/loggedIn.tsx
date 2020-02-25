import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '@whitepaper/queries';

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