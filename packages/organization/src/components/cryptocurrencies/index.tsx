import React, { useState } from 'react';
import { 
  withStyles, 
  WithStyles,
  Grid,
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@material-ui/core';
import style from './style';
import { Link } from "@reach/router";
import PencilIcon from 'mdi-react/PencilIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import { Transition, DialogTitle } from '@whitepaper/ui';

interface Props extends WithStyles<typeof style> {
  cryptocurrencies: any
}

function Cryptocurrencies (props: Props) {
  const { classes, cryptocurrencies } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.outer}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <h1 className={classes.title}>Coins</h1>
        </Grid>
        <Grid item>
          <Link to="/add-coin" className={classes.link}>
            <Button variant="contained" color="secondary">Add Coin</Button>
          </Link>
        </Grid>
      </Grid>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Ticker
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptocurrencies.map((cryptocurrency: any, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{cryptocurrency.name}</TableCell>
                  <TableCell>{cryptocurrency.ticker}</TableCell>
                  <TableCell align="right">
                    <Link to={`/edit-coin/${cryptocurrency.id}`}>
                      <IconButton>
                        <PencilIcon />
                      </IconButton>
                    </Link>
                    <IconButton onClick={handleClickOpen}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{"Delete Coin"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this coin? You can't undo this process
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleClose} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(style)(Cryptocurrencies);
