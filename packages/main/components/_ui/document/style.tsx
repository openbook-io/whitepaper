import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  container: {},
  image: {
    display: 'block',
    maxWidth: 180
  },
  description: {
    padding: 20,
  },
  heading: {
    marginBottom: 20
  }
})

export default styles
