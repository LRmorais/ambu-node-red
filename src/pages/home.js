  
import React, {useState} from 'react';

// material ui imports
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';


import Dashboard from './dashboard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow:{
    flexGrow: 1
  }
}));

export default function MiniDrawer() {


  // component define qual componente sera renderizado no Main
  const [component, setComponent] = useState('Dashboard')

  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
      >
        <Toolbar>
          <div className={classes.grow}/>
          <Typography variant="h6" noWrap>
          AMBU
          </Typography>
          <div className={classes.grow}/>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* Estrutura condicional para selecionar componentes em main */}
        {
          ( () => {
            if (component === 'Dashboard'){
              return <Dashboard />
            }
          })()
        }
        
      </main>
    </div>
  );
}