import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  toolbar: {
    ...theme.mixins.toolbar
  }
})

export default styles
