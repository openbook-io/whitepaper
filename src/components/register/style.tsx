import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  outer: {
    marginTop: 80
  },
  title: {
    textAlign: 'center',
    marginBottom: 20
  },
  card: {
    maxWidth: 400,
    margin: '0px auto',
    padding: 20,
    position: 'relative'
  },
  button: {
    marginTop: 0
  },
  formControl: {
    marginBottom: 20
  },
  loading: {
    position: 'absolute',
    right: 25,
    bottom: 25
  },
  switchToLink: {
    marginTop: 20,
    textAlign: 'center',
    color: '#999'
  }
})

export default styles
