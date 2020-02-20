import { Theme } from '@material-ui/core/styles';

export default ({ theme }: {theme: Theme}) => ({
  MuiCssBaseline: {
    '@global': {
      body: {
        backgroundColor: '#f5f6f9'
      },
      a: {
        color: theme.palette.primary.main
      }
    }
  },
});
