import { createStyles } from '@material-ui/core/styles';

const styles = (theme) => createStyles({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    width: '100%'
  },
  toolbar: {
    ...theme.mixins.toolbar
  }
})

export default styles