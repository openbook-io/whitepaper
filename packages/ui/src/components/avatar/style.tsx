import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  outer: {
    display: 'inline-block',
    border: '2px solid white',
    borderRadius: '50%',
    position: 'relative'
  },
  avatar: {

  },
  avatarPerson: {
    backgroundColor: '#c9d0d8'
  },
  avatarOrganization: {
    backgroundColor: '#F0653F',
  },
  progress: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})

export default styles
