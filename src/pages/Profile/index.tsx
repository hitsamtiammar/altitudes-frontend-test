import React from 'react';
import AnimatedContainer from '@/components/AnimatedContainer';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { ReceiveBy } from './interfaces';
import Button from '@mui/material/Button';

const receiveBy = [
  {
    value: ReceiveBy.DAILY,
    label: 'Daily',
  },
  {
    value: ReceiveBy.WEEKLY,
    label: 'Weekly',
  },
  {
    value: ReceiveBy.MONTLY,
    label: 'Monthly',
  },
];

export default function Pofile() {
  function renderField(
    props: TextFieldProps & {
      children?: React.ReactNode;
    },
  ) {
    return (
      <TextField sx={{ width: '100%', marginBottom: '2rem' }} variant="outlined" {...props}>
        {props.children}
      </TextField>
    );
  }

  return (
    <AnimatedContainer>
      <Grid container direction="column">
        <Typography marginBottom={3} marginTop={3} variant="h4">
          Profile
        </Typography>
        <Box
          sx={{
            width: {
              md: '50%',
              sm: '100%',
            },
          }}
        >
          {renderField({
            label: 'Email',
          })}
          {renderField({
            label: 'Password',
          })}
          {renderField({
            label: 'Receive By',
            select: true,
            children: receiveBy.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            )),
          })}
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </Box>
      </Grid>
    </AnimatedContainer>
  );
}
