import React from 'react';
import { TransitionProps } from '@material-ui/core/transitions';
import { Slide } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props: TransitionProps, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default Transition