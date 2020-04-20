import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  container: {
    width: '100%',
    position: 'relative',
    marginTop: 40,
    marginBottom: 40
  },
  page: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 2px 1px rgba(0,0,0,.25)',
    transformOrigin: 'top left'
  }
})

export default styles
