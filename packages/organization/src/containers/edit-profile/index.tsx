import React from 'react';
import { RouteComponentProps } from '@reach/router';
import EditProfile from '../../components/edit-profile';
import { 
  withStyles, 
  WithStyles
} from '@material-ui/core';
import style from './style';

interface Props extends RouteComponentProps, WithStyles<typeof style> {}

function EditCoinPage(props: Props) {
  const { classes } = props;

  return (
    <div className={classes.main}>
      <EditProfile />
    </div>
  )
}

export default withStyles(style)(EditCoinPage);