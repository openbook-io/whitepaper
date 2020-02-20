import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  outer: {
    maxWidth: 500,
    margin: '100px auto'
  },
  paper: {
    padding: 30,
    textAlign: 'center'
  },
  text: {
    margin: '10px 0px'
  }
})

export default styles
