import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  container: {
    padding: '30px',
    height: '100%'
  },
  avatar: {
    margin: '10px 0px',
    width: 50,
    height: 50,
  },
  title: {
    marginTop: 15,
    marginBottom: 8
  },
  about: {
    marginBottom: 0,
    marginTop: 0,
    fontFamily: theme.typography.fontFamily
  },
  button: {
    margin: -8,
    marginTop: 10
  }
})

export default styles
