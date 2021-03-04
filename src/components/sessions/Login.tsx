import { Button, Container, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core';
import React, { FormEvent, useState } from 'react';
import { authRef } from '../../firebase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    error: {
      color: theme.palette.error.main
    }
  })
);

export const Login = (props: any) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setSubmissionError] = useState(false);
  const classes = useStyles();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    authRef.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error('Incorrect username or password');
        setSubmissionError(true);
      });
  };

  return (
    <div className={classes.root}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate autoComplete={'off'}>
        <Container>
          <Grid container spacing={2} direction={'column'} alignItems={'stretch'} alignContent={'stretch'}>
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
          <div className={classes.error}>Incorrect username or password</div>
        )}
      </form>
    </div>
  );
};