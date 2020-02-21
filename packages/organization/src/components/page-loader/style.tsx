import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  loader: {
    position: 'absolute',
    left: 'calc(50% - 40px);',
    top: 'calc(50% - 40px);'
  },
  pageLoader: {
    position: 'relative',
    padding: '200px 0px'
  }
})

export default styles
