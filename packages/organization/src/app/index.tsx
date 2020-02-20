import React from 'react';
import { Router } from '@reach/router';
import Home from '../containers/home';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { 
  withStyles, 
  WithStyles 
} from '@material-ui/core';
import style from './style';

interface Props extends WithStyles<typeof style> {}

function App(props: Props) {
  const { classes } = props;

  return (
    <div>
      <Header />
      <Sidebar />
      <div className={classes.toolbar} />
      <main className={classes.content}>
        <div className={classes.container}>
          <Router>
            <Home path="/" />
          </Router>
        </div>
      </main>
    </div>
  )
}

export default withStyles(style)(App);