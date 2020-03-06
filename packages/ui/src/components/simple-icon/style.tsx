import { createStyles } from '@material-ui/core/styles';

const styles = (theme) => createStyles({
  simpleIcon: {
    borderRadius: '50%',
    padding: '25%',
    cursor: 'pointer',
    '&>svg': {
      display: 'block',
      fill: '#fff'
    }
  }
})

export default styles

