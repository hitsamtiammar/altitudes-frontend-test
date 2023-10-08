import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import { Checkbox, Typography } from '@mui/material';
import styles from './styles.module.css';
import AnimatedContainer from '@/components/AnimatedContainer';
import { NavLink } from 'react-router-dom';
import { ReceiveBy } from '../Profile/interfaces';

function createData(name: string, receiveBy: ReceiveBy, isSubscribe: boolean) {
  return { name, receiveBy, isSubscribe };
}

const rows = [
  createData('Netflix', ReceiveBy.DAILY, true),
  createData('Youtube Premium', ReceiveBy.DAILY, false),
  createData('Viu', ReceiveBy.DAILY, true),
  createData('Disney+', ReceiveBy.WEEKLY, false),
  createData('Vidio+', ReceiveBy.MONTLY, true),
];

export default function Home() {
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
            {rows.map((row, index) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Checkbox checked={row.isSubscribe} disabled />
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
          User List
        </Typography>
        {renderTable()}
      </Grid>
    </AnimatedContainer>
  );
}
