import React from 'react';
import { useData } from '../services/context';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

import { Block } from '@material-ui/icons';
import Pressure from '../components/pressure';
import Medidor from '../components/medidor';
import imgagemEscolhida from '../assets/heart.png';
import oxyGen from '../assets/oxygen.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    flex: 1,
    padding: theme.spacing(2),
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: 25,
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => (
  <Switch
    focusVisibleClassName={classes.focusVisible}
    disableRipple
    classes={{
      root: classes.root,
      switchBase: classes.switchBase,
      thumb: classes.thumb,
      track: classes.track,
      checked: classes.checked,
    }}
    {...props}
  />
));

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">
          {`${Math.round(
            props.value,
          )}%`}

        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CenteredGrid() {
  const { msg } = useData();
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const [progress, setProgress] = React.useState(10);

  const handleChangeButton = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>Controles</Paper>
        </Grid> */}
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Pressure />
          </Paper>
        </Grid> */}
        <Grid item xs={12} 
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Paper className={classes.paper}>
            <Medidor />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <figure style={{ display: 'inline-block', position: 'relative' }}>
              <img alt="oxygen" style={{ height: 180, width: 250 }} src={oxyGen} />
              <figcaption style={{ position: 'absolute', bottom: '28%', left: 18, color: "red" }}>O2</figcaption>
              <figcaption style={{ position: 'absolute', bottom: '28%', left: 110,  color: "red"  }}>{`${msg.oxi ? msg.oxi : '...'}%`}</figcaption>
            </figure>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <figure style={{ display: 'inline-block', position: 'relative' }}>
              <img alt="Heart" style={{ height: 180 }} src={imgagemEscolhida} />
              <figcaption style={{ position: 'absolute', bottom: '60%', left: 50 }}>BPM</figcaption>
              <figcaption style={{ position: 'absolute', bottom: '35%', left: 85 }}>{msg.cardio ? msg.cardio : '...'}</figcaption>
            </figure>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>{`BPM: ${msg.cardio ? msg.cardio : '...'}`}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>{`O2: ${msg.oxi ? msg.oxi : '...'}%`}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>{`${msg.pressao ? msg.pressao : '...'} cm H2O`}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
