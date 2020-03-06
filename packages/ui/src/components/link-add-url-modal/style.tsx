import { createStyles } from '@material-ui/core/styles';

const styles = (theme) => createStyles({
  dialogContent: {
    padding: 25
  },
  urlDialogLoading: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.5)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})

export default styles