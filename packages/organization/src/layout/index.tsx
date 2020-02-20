import React from 'react';
import { Router } from '@reach/router';
import Home from '../containers/home';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import MainError from '../components/main-error';
import MainLoader from '../components/main-loader';
import { 
  withStyles, 
  WithStyles,
  CircularProgress
} from '@material-ui/core';
import style from './style';
import { MY_CURRENT_ORGANIZATION } from '../queries/organization';
import { useQuery } from '@apollo/react-hooks';

interface Props extends WithStyles<typeof style> {}

function Layout(props: Props) {
  const { classes } = props;
  const { loading, error, data } = useQuery(MY_CURRENT_ORGANIZATION);

  return (
    <div>
      { !loading && !error && 
        <React.Fragment>
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
        </React.Fragment>
      }
      { !loading && error && 
        <React.Fragment>
          <MainError />
        </React.Fragment>
      }
      {
        loading && <MainLoader />
      }
    </div>
  )
}

export default withStyles(style)(Layout);