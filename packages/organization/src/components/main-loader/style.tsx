import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  loader: {
    position: 'absolute',
    left: 'calc(50% - 40px);',
    top: 'calc(50% - 40px);'
  }
})

export default styles
