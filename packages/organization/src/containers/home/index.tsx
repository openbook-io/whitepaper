import React from 'react';
import {Button} from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

function Home(props: Props) {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  )
}

export default Home;