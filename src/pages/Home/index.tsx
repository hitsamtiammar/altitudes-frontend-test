import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import styles from './styles.module.css';
import ButtonHover from '@/components/HoverButton';

function createData(name: string, isSubscribe: boolean) {
  return { name, isSubscribe };
}

const rows = [
  createData('Youtube', true),
  createData('Netflix', true),
  createData('Disney+', true),
  createData('Facebook', false),
  createData('Viu', false),
];

export default function Home() {
  function renderTable() {
    return (
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHead}>No</TableCell>
              <TableCell className={styles.tableHead}>Subscription</TableCell>
              <TableCell className={styles.tableHead} width={200}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <ButtonHover
                    btnType={row.isSubscribe ? 'type_1' : 'type_2'}
                    text="Subscribe"
                    onHoverText="UnSubscribe"
                    variant="contained"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <Grid container>
      <Typography marginBottom={3} marginTop={3} variant="h4">
        News Letter List
      </Typography>
      {renderTable()}
    </Grid>
  );
}
