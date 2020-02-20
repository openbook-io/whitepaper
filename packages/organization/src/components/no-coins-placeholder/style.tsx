import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  container: {
    textAlign: 'center',
    maxWidth: 600,
    margin: '0px auto'
  },
  text: {
    color: '#667587'
  },
  placeholder: {
    marginTop: '70px',
    height: '200px',
    marginBottom: '30px'
  },
  button: {
    marginTop: '20px'
  }
});

export default styles
