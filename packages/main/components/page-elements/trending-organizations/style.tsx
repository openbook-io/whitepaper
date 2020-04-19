import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  outer: {
    padding: '80px 0px',
    textAlign: 'center'
  },
  organizations: {
    padding: '60px 0px'
  },
  title: {
    marginTop: 10,
    marginBottom: 10
  },
  about: {
    margin: 0
  },
  paper: {
    padding: 30
  }
})

export default styles
