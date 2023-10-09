import React, { useMemo, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import { Checkbox, TablePagination, Typography } from '@mui/material';
import AnimatedContainer from '@/components/AnimatedContainer';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setSubscription } from '@/redux/reducers/subscriptionReducers';
import { Subscription } from '@/redux/reducers/interfaces';

export default function Home() {
  const subscriptions = useAppSelector((state) => state.subscription.list);
  const receiveBy = useAppSelector((state) => state.users.receiveBy);
  const dispatch = useAppDispatch();

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const visibleRows = useMemo(
    () => subscriptions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, subscriptions],
  );

  const handleChange = (row: Subscription, event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setSubscription({
        id: row.id,
        status: event.target.checked,
      }),
    );
  };

  function renderTable() {
    return (
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>No</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>News Letter</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Subscription Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row, index) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Checkbox onChange={(e) => handleChange(row, e)} checked={row.isSubcribe} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[2, 5, 10, 25]}
          component="div"
          count={subscriptions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    );
  }

  return (
    <AnimatedContainer>
      <Grid container>
        <Typography marginBottom={3} marginTop={3} variant="h4">
          Subscription List: {receiveBy}
        </Typography>
        {renderTable()}
      </Grid>
    </AnimatedContainer>
  );
}
