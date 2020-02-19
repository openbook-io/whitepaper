import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  outer: {
    padding: '20px 0px'
  },
  form: {
    margin: '40px auto',
    maxWidth: '600px',
    textAlign: 'left'
  },
  title: {
    marginBottom: '20px'
  },
  section: {
    margin: '30px 0px'
  },
  paperPadding: {
    padding: '24px 14px'
  },
  organizationGrid: {
    padding: '10px'
  }
})

export default styles
