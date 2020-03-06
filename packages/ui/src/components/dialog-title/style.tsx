import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  dialogTitle: {
    margin: 0
  },
  closeButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    color: '#8091a5',
  }
})

export default styles
