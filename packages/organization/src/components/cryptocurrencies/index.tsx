import React from 'react';
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
  IconButton
} from '@material-ui/core';
import style from './style';
import { Link } from "@reach/router";
import PencilIcon from 'mdi-react/PencilIcon';

interface Props extends WithStyles<typeof style> {
  cryptocurrencies: any
}

function Cryptocurrencies (props: Props) {
  const { classes, cryptocurrencies } = props;

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
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default withStyles(style)(Cryptocurrencies);
