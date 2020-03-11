import React from 'react';
import { Router } from '@reach/router';
import Home from '../containers/home';
import MyCoins from '../containers/my-coins';
import AddCoin from '../containers/add-coin';
import AddDocumentVersion from '../containers/add-document-version';
import EditCoin from '../containers/edit-coin';
import EditProfile from '../containers/edit-profile';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import MainError from '../components/main-error';
import MainLoader from '../components/main-loader';
import { 
  withStyles, 
  WithStyles
} from '@material-ui/core';
import style from './style';
import { MY_CURRENT_ORGANIZATION } from '@whitepaper/queries';
import { useQuery } from '@apollo/react-hooks';
import { OrganizationProvider } from '../utils/organizationContext';
import { CloudinaryContext } from 'cloudinary-react';

interface Props extends WithStyles<typeof style> {}

function Layout(props: Props) {
  const { classes } = props;
  const { loading, error, data } = useQuery(MY_CURRENT_ORGANIZATION);

  return (
    <div>
      { !loading && !error && 
        <React.Fragment>
          <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}>
            <OrganizationProvider value={data.whatIsMyCurrentOrganization}>
              <Header />
              <Sidebar />
              <div className={classes.toolbar} />
              <main className={classes.content}>
                <div className={classes.container}>
                  <Router>
                    <Home path="/" />
                    <MyCoins path="/my-coins" />
                    <AddCoin path="/add-coin" />
                    <AddDocumentVersion path="/add-document-version/:documentId" />
                    <EditCoin path="/edit-coin/:coinId" />
                    <EditProfile path="/edit-profile" />
                  </Router>
                </div>
              </main>
            </OrganizationProvider>
          </CloudinaryContext>
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