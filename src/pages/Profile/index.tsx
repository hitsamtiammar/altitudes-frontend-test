import React, { useState } from 'react';
import AnimatedContainer from '@/components/AnimatedContainer';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { ReceiveBy } from './interfaces';
import Button from '@mui/material/Button';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { UserState, setData } from '@/redux/reducers/userReducers';
import { useHistory } from 'react-router-dom';

const receiveByList = [
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

interface UserError {
  email?: string;
  password?: string;
  receiveBy?: string;
}

export type ProfileField = TextFieldProps & {
  children?: React.ReactNode;
};

export default function Pofile() {
  const user = useAppSelector((state) => state.users);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [receiveBy, setReceiveBy] = useState(user.receiveBy);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<UserError>({
    email: '',
    password: '',
    receiveBy: '',
  });
  const dispatch = useAppDispatch();
  const history = useHistory();

  function renderField(props: ProfileField) {
    return (
      <TextField sx={{ width: '100%', marginBottom: '2rem' }} variant="outlined" {...props}>
        {props.children}
      </TextField>
    );
  }

  function validateInput(data: UserState) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const newErrors: UserError = {};
    if (data.email.length === 0) {
      newErrors.email = 'Please fill email';
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Email format wrong';
    }

    if (data.password.length === 0) {
      newErrors.password = 'Please fill Password';
    } else if (data.password.length < 3) {
      newErrors.password = 'Password length minimum 3';
    } else if (data.password.length > 15) {
      newErrors.password = 'Password length maximum 3';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length) {
      return false;
    }
    return true;
  }

  function onChange(
    key: string,
    val: string | ReceiveBy,
    setVal: React.Dispatch<React.SetStateAction<typeof val>>,
  ) {
    setVal(val);
    setErrors({
      ...errors,
      [key]: '',
    });
  }

  function onSubmit() {
    const data = {
      email,
      password,
      receiveBy,
    };
    if (!validateInput(data)) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(setData(data));
      history.push('/');
    }, 1500);
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
            type: 'email',
            value: email,
            error: !!errors.email,
            helperText: errors.email,
            disabled: isLoading,
            onChange: (e) => onChange('email', e.target.value, setEmail),
          })}
          {renderField({
            label: 'Password',
            type: 'password',
            value: password,
            disabled: isLoading,
            error: !!errors.password,
            helperText: errors.password,
            onChange: (e) => onChange('password', e.target.value, setPassword),
          })}
          {renderField({
            label: 'Receive By',
            select: true,
            value: receiveBy,
            disabled: isLoading,
            onChange: (e) => setReceiveBy(e.target.value as ReceiveBy),
            children: receiveByList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            )),
          })}
          <Button onClick={onSubmit} disabled={isLoading} color="primary" variant="contained">
            Submit
          </Button>
        </Box>
      </Grid>
    </AnimatedContainer>
  );
}
