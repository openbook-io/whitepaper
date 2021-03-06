import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  outer: {
    
  },
  dropzoneFrame: {
    position: 'relative'
  },
  dropzoneOuter: {
    padding: 20,
    outline: 'none',
    cursor: 'pointer'
  },
  dropzoneInner: {
    border: '2px dashed #c9d0d8',
    borderRadius: 4,
    padding: 40,
    textAlign: 'center'
  },
  dropzoneInnerActive: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: theme.palette.primary[500]
  },
  dropText: {
    padding: 20,
    color: '#667587'
  },
  container: {
    marginBottom: 30
  },
  dropButton: {
    marginTop: 2
  },
  dropButtonIcon: {
    marginRight: 10
  },
  progress: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '4px',
    textAlign: 'center'
  },
})

export default styles
