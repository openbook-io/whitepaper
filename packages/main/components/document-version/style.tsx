import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  outer: {
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#525659'
  },
  headerSpacing: {
    ...theme.mixins.toolbar
  },
  sidebarOuter: {
    backgroundColor: '#fff'
  },
  sidebar: {
    width: 346
  },
  container: {
  },
  pdfContainer: {
    backgroundColor: '#525659'
  }
})

export default styles
