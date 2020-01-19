import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  background: {
    backgroundColor: 'rgba(48,113,216,.9)',
    height: 600,
    backgroundImage: 'url(/background.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  text: {
    textAlign: 'center',
    color: '#fff'
  },
  title: {
    fontWeight: 600,
    marginBottom: 20
  },
  subtitle: {
    marginBottom: 40,
    fontWeight: 200
  }
})

export default styles
