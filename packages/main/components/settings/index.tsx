import style from './style';
import { WithStyles, withStyles} from '@material-ui/core';

interface Props extends WithStyles<typeof style> {}

function Settings (props: Props) {
  const { classes } = props;

  return (
    <div className={classes.outer}>
      <h1 className={classes.title}>Settings</h1>

    </div>
  );
}

export default withStyles(style)(Settings)