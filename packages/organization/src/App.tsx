import React from 'react';
import {Button} from '@material-ui/core';
import {theme} from '@whitepaper/ui';

console.log(theme);

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  )
}

export default App;