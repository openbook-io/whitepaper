import React from 'react'
import { withStyles, WithStyles } from '@material-ui/core';
import style from './style'
import simpleIcons from 'simple-icons';

interface Props extends WithStyles<typeof style> {
  name: string,
  color?: string
}

function SimpleIcon(props: Props) {
  const { name, classes, color } = props;

  if(!simpleIcons.hasOwnProperty(name)) return null;
  const icon = simpleIcons[name];

  const style = {
    backgroundColor: color ? color : `#${icon.hex}`
  };

  return (
    <div {...props}>
      <div className={classes.simpleIcon} style={{ ...style }} dangerouslySetInnerHTML={{ __html: simpleIcons[name].svg }} />
    </div>
  )
}

export default withStyles(style)(SimpleIcon);
