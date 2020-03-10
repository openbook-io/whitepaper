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
  DialogContentText,
  CircularProgress
} from '@material-ui/core';
import style from './style';
import { Link } from "@reach/router";
import PencilIcon from 'mdi-react/PencilIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import { Transition, DialogTitle } from '@whitepaper/ui';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_CRYPTOCURRENCY, MY_CRYPTOCURRENCIES } from '@whitepaper/queries';

interface Props extends WithStyles<typeof style> {
  cryptocurrencies: any
}

function Cryptocurrencies (props: Props) {
  const { classes, cryptocurrencies } = props;

  const [removeCryptocurrency, {loading}] = useMutation(REMOVE_CRYPTOCURRENCY)
  const [dialog, setDialog] = useState({
    open: false,
    coin: null
  });

  const handleClickOpen = (coin) => {
    setDialog({
      open: true,
      coin: coin
    });
  };

  const handleClose = () => {
    setDialog({
      ...dialog,
      open: false
    });
  };

  const handleExited = () => {
    setDialog({
      ...dialog,
      coin: null
    });
  }

  const handleDeleteCoin = async () => {
    await removeCryptocurrency({
      variables: {
        id: dialog.coin.id
      },
      refetchQueries: [{query: MY_CRYPTOCURRENCIES}],
      awaitRefetchQueries: true
    })

    setDialog({
      ...dialog,
      open: false
    });
  }

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
                    <IconButton onClick={() => handleClickOpen(cryptocurrency)}>
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
        open={dialog.open}
        onExited={handleExited}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{`Delete Coin ${dialog.coin && dialog.coin.name}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this coin? You can't undo this process
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleDeleteCoin} color="primary">
            Yes
          </Button>
        </DialogActions>
        {loading && 
          <Grid container alignItems="center" justify="center" className={classes.loadingOverlay}>
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        }
      </Dialog>
    </div>
  );
}

export default withStyles(style)(Cryptocurrencies);
