import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Pressure from '../components/pressure';
import Medidor from '../components/medidor';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    flex: 1,
    padding: theme.spacing(2),
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="row"
        justify="space-between"
        alignItems="center"
        >
        <Grid item xs={12}>
          <Paper className={classes.paper}>Controles</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Pressure />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><Medidor /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}