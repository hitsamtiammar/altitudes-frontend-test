import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import { Checkbox, Typography } from '@mui/material';
import AnimatedContainer from '@/components/AnimatedContainer';
import { ReceiveBy } from '../Profile/interfaces';
import { useAppSelector } from '@/redux/hooks';

export default function Home() {
  const subscriptions = useAppSelector((state) => state.subscription.list);
  const receiveBy = useAppSelector((state) => state.users.receiveBy);
  function renderTable() {
    return (
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>No</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Subscription Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscriptions.map((row, index) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Checkbox checked={row.isSubcribe} disabled />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
