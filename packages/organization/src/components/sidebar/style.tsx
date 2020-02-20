import { createStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  spacer: {
    marginTop: 60
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',

  },
  paper: {
    zIndex: 1000,
    backgroundColor: '#eef0f2',
    borderRight: '1px solid #dce0e5'
  },
  listItem: {
    padding: '15px 23px'
  },
  listItemIcon: {
    marginRight: 0,
    color: '#8091a5',
    minWidth: 'auto'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    transition: theme.transitions.create('margin-top', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })
  },
  toolbarOpen: {
    marginTop: 48
  }
})

export default styles
