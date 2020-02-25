import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  textField: {
    marginBottom: 20
  },
  avatar: {
    border: '2px solid #c9d0d8',
    marginBottom: 20,
    cursor: 'pointer'
  },
  main: {
    margin: '50px auto',
    maxWidth: '600px',
    textAlign: 'left'
  }
})

export default styles
