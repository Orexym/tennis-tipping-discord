import { Button, Container, Grid, TextField } from '@material-ui/core';
import React, { FormEvent, useState } from 'react';
import { authRef } from '../../firebase';

export const Login = (props: any) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setSubmissionError] = useState(false);


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    authRef.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error('Incorrect username or password');
        setSubmissionError(true);
      });
  };

  return (
    <div className={'login-root'}>
      <form onSubmit={handleSubmit} noValidate autoComplete={'off'}>
        <Container>
          <Grid container spacing={2} direction={'column'} alignItems={'stretch'} alignContent={'stretch'}>
            <Grid item>
              <h2>Login</h2>
            </Grid>
            <Grid item>
              <TextField type="text" variant={'outlined'} color={'primary'} label={'Email'}
                         onChange={({target}) => setEmail(target.value)}>
              </TextField>
            </Grid>
            <Grid item>
              <TextField type="password" variant={'outlined'} color={'primary'} label={'Password'}
                         onChange={({target}) => setPassword(target.value)}>
              </TextField>
            </Grid>
            <Grid item>
              <Button variant={'contained'} type={'submit'} disableElevation>
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Container>

        {error && (
          <div className={'error'}>Incorrect username or password</div>
        )}
      </form>
    </div>
  );
};