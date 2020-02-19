import React from 'react';
import style from './style';
import { 
  WithStyles, 
  withStyles,
  Grid,
  CircularProgress,
  Avatar
} from '@material-ui/core';
import clsx from 'clsx';
import Domain from 'mdi-react/DomainIcon';

interface Props extends WithStyles<typeof style> {
  size: number;
  loading?: boolean;
  type: "organization" | "user";
  picture?:  string | null;
  className?: string;
  onClick?: () => void
}

function AvatarIcon (props: Props) {
  const {classes, size, loading, type, picture, className, onClick} = props;

  const styles = {
    bigAvatar: {
      width: size,
      height: size,
    },
    avatarIcon: {
      width: size / 1.3,
      height: size / 1.3
    },
    domainIcon: {
      width: size / 2,
      height: size / 2
    }
  };

  return (
    <div onClick={onClick} className={clsx(className, classes.outer)}>
      {type === 'organization' && picture && <Avatar style={styles.bigAvatar} src={picture} className={clsx(classes.avatar)} />}
      {(type === 'organization' && !picture) && <Avatar style={styles.bigAvatar} className={clsx(classes.avatar, classes.avatarOrganization)}>
        <Domain style={styles.domainIcon} />
      </Avatar>}
      { loading &&
        <Grid container justify="center" alignItems="center" className={classes.progress}>
          <Grid item>
            <CircularProgress size={size/2} color="secondary" />
          </Grid>
        </Grid>
      }
    </div>
  );
}

export default withStyles(style)(AvatarIcon)