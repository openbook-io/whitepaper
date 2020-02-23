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
  },
  paper: {
    height: '100%',
    maxHeight: '460px'
  },
  dialog: {
    margin: '20px 0px'
  },
  dialogContent: {
    padding: '20px'
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  fileInput: {
    display: 'none'
  },
  gridItem: {
    cursor: 'pointer'
  },
  gridImage: {
    width: '100%',
    display: 'block'
  },
  item: {
    paddingTop: '100% !important',
    width: '100%',
    position: 'relative',
    backgroundColor: '#f5f6f9'
  },
  itemContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    textAlign: 'center',
    cursor: 'pointer'
  },
})

export default styles
