import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  outer: {
    
  },
  title: {
    margin: 0
  },
  link: {
    textDecoration: 'none'
  },
  table: {
    marginTop: 30
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255,255,255,0.5)'
  }
})

export default styles
