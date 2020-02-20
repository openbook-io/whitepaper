import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  appBar: {
    boxShadow: 'none'
  },
  profile: {
    backgroundColor: theme.palette.primary.dark,
    width: '71px',
    height: '64px'
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarRight: {
    marginRight: '12px'
  },
  avatarLeft: {
    padding: '0px 15px'
  },
  title: {
    flexGrow: 1,
    marginLeft: 20
  }
})

export default styles
