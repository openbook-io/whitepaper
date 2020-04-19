import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  toolbar: {
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    marginLeft: '73px'
  },
  container: {

  }
})

export default styles
