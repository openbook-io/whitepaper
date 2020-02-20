import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  toolbar: {
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: 30,
    marginLeft: '73px'
  },
  container: {
    maxWidth: '1024px',
    margin: '0px auto',
    boxSizing: 'border-box'
  }
})

export default styles
