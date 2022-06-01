import React from 'react';
import { useData } from '../services/context';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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
    fontSize: 38,
  },
}));



export default function CenteredGrid() {
  const { msg } = useData();

  var pressao = 0;

  const classes = useStyles();


  const [estilo, setEstilo] = React.useState('safe');



  
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Paper  className={classes.paper}>{`Pressão em cm H2O: ${msg.pressao ? msg.pressao : '19'}`}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{`BPM: ${msg.pressao ? (msg.pressao*0.0980665).toFixed(2) : '110'}`}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{`Saturação: ${msg.pressao ? (msg.pressao*0.0980665).toFixed(2) : '96%'}`}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{`CO2: ${msg.pressao ? (msg.pressao*0.0980665).toFixed(2) : '15%'}`}</Paper>
        </Grid>

        <Grid item xs={12} 
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Paper className={classes.paper}>

          {
          ( () => {
            // if (msg.pressao >= 15 && msg.pressao <= 30){
            if (msg >= 15 && msg <= 30){
              return (
                <div class='animate-svg-safe'>
                <button id="send2" class='border-safe' onClick={() => {setEstilo('warn')}}>
                  <svg height="700pt" viewBox="0 -5 512.00125 512" width="600pt"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m15.761719 438.570312c3.992187-1.097656 6.339843-5.226562 5.238281-9.222656-9.921875-36.039062-7.640625-91.066406 6.972656-168.226562 9.601563-50.699219 25.070313-94.566406 45.980469-130.386719 15.027344-25.742187 32.460937-46.792969 51.820313-62.574219 12.320312-10.046875 29.769531-10.210937 42.433593-.394531 9.488281 7.351563 14.363281 18.917969 13.035157 30.933594-2.726563 24.738281-1.582032 60.800781 18.480468 94.777343-2.71875 3.351563-5.757812 6.964844-9.148437 10.835938-.007813.007812-.015625.019531-.023438.027344-7.332031 8.429687-15.117187 16.414062-23.015625 24.3125-1.933594 1.933594-24.847656 23.960937-25.414062 23.394531-5.464844-5.53125-11.847656-12.570313-18.144532-20.835937.089844-7.125.785157-28.410157 5.6875-42.574219 1.355469-3.914063-.722656-8.1875-4.636718-9.539063-3.914063-1.355468-8.183594.71875-9.539063 4.632813-2.804687 8.097656-4.40625 17.832031-5.320312 26.554687-5.214844-9.316406-9.679688-19.503906-12.566407-30.332031-1.070312-4-5.179687-6.382813-9.179687-5.3125-4.003906 1.066406-6.382813 5.175781-5.316406 9.179687 3.804687 14.273438 10.023437 27.464844 17.132812 39.175782-9.796875-.960938-22.085937-.710938-33.320312 3.761718-3.847657 1.53125-5.726563 5.894532-4.191407 9.742188 1.5 3.777344 5.96875 5.699219 9.742188 4.195312 14.871094-5.921874 33.398438-2.011718 39.578125-.417968 6.429687 8.445312 12.917969 15.679687 18.5625 21.460937-2.847656 2.339844-5.621094 4.796875-8.3125 7.375-10.882813 10.429688-20.453125 22.792969-28.644531 36.992188-10.5-8.785157-23.765625-22.320313-28.871094-37.878907-1.292969-3.933593-5.53125-6.078124-9.46875-4.785156-3.933594 1.292969-6.078125 5.53125-4.785156 9.464844 2.148437 6.542969 5.351562 12.699219 9.167968 18.414062-6.476562.917969-14.285156 2.75-21.941406 6.355469-3.75 1.761719-5.359375 6.230469-3.59375 9.976563 1.734375 3.691406 6.289063 5.332031 9.980469 3.59375 10.515625-4.945313 21.742187-5.71875 26.894531-5.789063 5.0625 5.382813 10.421875 10.148438 15.503906 14.222657-3.265624 6.804687-6.269531 13.949218-8.972656 21.460937-3.660156 10.164063-6.5 20.113281-8.707031 29.46875-2.472656-.742187-5.070313-1.4375-7.761719-2.050781-2.132812-3.800782-5.984375-11.722656-6.847656-20.71875-.394531-4.121094-4.054688-7.148438-8.179688-6.75-4.125.394531-7.148437 4.058594-6.753906 8.179687.605469 6.324219 2.277344 12.132813 4.132813 16.9375-5.152344-.152343-10.359375.207031-15.425781 1.328125-4.046876.898438-6.597657 4.902344-5.703126 8.945313.898438 4.046875 4.902344 6.597656 8.945313 5.703125 11.371094-2.519532 24.230469-.058594 34.523437 3.171875-1.753906 9.632812-2.84375 18.253906-3.503906 25.285156-1.035156 10.953125 7.1875 21.265625 18.238282 22.140625 9.714843.769531 19.097656-6.1875 21.128906-15.734375.601562-2.824219 1.382812-6.195313 2.367187-10 7.976563 7.128906 16.929688 17.097656 20.613281 28.3125 1.269532 3.875 5.597657 6.058594 9.464844 4.789063 3.9375-1.292969 6.078125-5.53125 4.785156-9.46875-1.617187-4.921876-3.933593-9.582032-6.691406-13.953126 5.070313-.851562 10.90625-2.378906 16.640625-5.078124 3.75-1.761719 5.355469-6.230469 3.59375-9.980469-1.765625-3.75-6.234375-5.355469-9.980469-3.59375-8.167968 3.847656-16.898437 4.578125-21.273437 4.679687-4.105469-4.320312-8.421875-8.15625-12.527344-11.453125 6.492188-19.785156 17.386719-44.933593 35.101563-67.542969 2.347656 3.582032 5.03125 7.324219 8.0625 11.113282-1.039063 8.480468-2.898438 30.917968 3.570312 48.859375 1.382813 3.835937 5.773438 5.890625 9.601563 4.511719 3.894531-1.40625 5.917969-5.703126 4.511719-9.597657-3.261719-9.050781-3.90625-19.957031-3.714844-28.742187 5.5 5.078125 11.714844 9.941406 18.734375 14.277344 3.417969 2.109374 8.152343 1.074218 10.324219-2.445313 2.175781-3.523437 1.082031-8.144531-2.445313-10.320313-18.449219-11.390624-30.78125-27.03125-38.417969-39.542968 3.1875-3.371094 6.535156-6.652344 10.089844-9.796875 19.078125-16.878907 34.898438-28.148438 47.609375-37.207031 1.191406-.847657 2.351563-1.675782 3.496094-2.496094 3.9375 18.992187 8.8125 50.566406 8.8125 107.117187 0 53.203125-7.054688 83.96875-22.867188 99.757813-17.472656 17.449218-47.367187 17.402344-88.738281 17.34375-30.5 0-62.738281-4.007813-80.558594-31.953125-2.226562-3.492188-6.863281-4.519531-10.355468-2.292969-3.492188 2.226562-4.519532 6.867188-2.292969 10.359375 16.683593 26.160156 44.675781 38.878906 85.574219 38.878906 4.953124 0 9.90625.015625 14.859374.015625 41.246094 0 71.429688-1.085937 92.113282-21.734375 18.855468-18.832031 27.269531-52.871093 27.269531-110.375 0-65.25-6.390625-98.289062-10.597656-116.933593 8.148437-6.46875 14.445312-12.726563 18.800781-20.535157 1.710938-3.0625 4.875-4.964843 8.257812-4.964843h1.054688c3.386719 0 6.550781 1.902343 8.257812 4.964843 4.355469 7.808594 10.652344 14.066407 18.800782 20.535157-4.203125 18.644531-10.59375 51.683593-10.59375 116.933593 0 57.503907 8.410156 91.542969 27.269531 110.375 20.679687 20.652344 50.859375 21.734375 92.109375 21.734375 4.953125 0 9.90625-.015625 14.859375-.015625 36.484375 0 62.519531-10.015625 79.585937-30.621093 14.726563-17.773438 22.824219-43.304688 24.753907-78.054688 1.9375-34.75-2.261719-78.773438-12.832031-134.578125-10.109376-53.386719-26.601563-99.570313-49.011719-137.269531-2.117188-3.5625-6.722657-4.730469-10.28125-2.613282-3.5625 2.117188-4.730469 6.71875-2.617188 10.28125 21.519531 36.191407 37.386719 80.734376 47.171875 132.390626 19.953125 105.355468 17.175782 168.996093-8.734375 200.277343-18.609375 22.460938-48.496093 25.152344-75.664062 25.195313-41.371094.058594-71.269531.105468-88.742188-17.34375-15.8125-15.789063-22.863281-46.554688-22.863281-99.757813 0-56.550781 4.875-88.125 8.8125-107.117187 1.144531.820312 2.304688 1.648437 3.496094 2.496094 16.40625 11.691406 32.507812 23.847656 47.605468 37.207031 3.554688 3.144531 6.90625 6.425781 10.089844 9.796875-7.632812 12.507812-19.964844 28.152344-38.417968 39.542968-3.523438 2.175782-4.617188 6.796876-2.441407 10.320313 2.144531 3.476563 6.847657 4.589844 10.320313 2.445313 7.027344-4.335938 13.242187-9.207032 18.75-14.289063.191406 8.769531-.453125 19.667969-3.726563 28.75-1.726562 4.789063 1.972657 10.046875 7.054688 10.046875 3.074219 0 5.953125-1.902344 7.058593-4.957031 6.464844-17.941407 4.609376-40.378907 3.570313-48.859375 3.03125-3.792969 5.714844-7.535156 8.058594-11.113282 17.71875 22.609376 28.613281 47.757813 35.105469 67.542969-4.105469 3.296875-8.421876 7.132813-12.527344 11.453125-4.375-.101562-13.101563-.832031-21.273438-4.679687-3.75-1.761719-8.214844-.152344-9.980468 3.59375-1.761719 3.75-.15625 8.21875 3.59375 9.980469 5.734374 2.699218 11.574218 4.226562 16.640624 5.078124-2.757812 4.371094-5.074218 9.03125-6.691406 13.953126-1.292968 3.9375.847656 8.175781 4.785156 9.46875 3.808594 1.25 8.175782-.859376 9.464844-4.789063 3.683594-11.214844 12.636719-21.183594 20.613282-28.3125.984374 3.804687 1.765624 7.175781 2.367187 10 0 .011719.003906.019531.007813.03125 2.03125 9.488281 11.445312 16.464844 21.121093 15.703125 11.578125-.914062 19.242188-11.902344 18.152344-22.992188-.667969-6.875-1.734375-15.179687-3.417969-24.433593 10.289063-3.230469 23.152344-5.691407 34.523438-3.171875 4.042968.894531 8.046875-1.660156 8.941406-5.703125.898438-4.042969-1.65625-8.046875-5.699219-8.945313-5.066406-1.121094-10.273437-1.480468-15.425781-1.328125 1.855469-4.804687 3.527344-10.613281 4.132812-16.9375.394532-4.121093-2.628906-7.785156-6.753906-8.179687-4.128906-.398438-7.785156 2.628906-8.179687 6.75-.863281 9.015625-4.707031 16.914062-6.847657 20.71875-2.691406.613281-5.289062 1.308594-7.761718 2.046875-2.207032-9.351563-5.046875-19.304688-8.707032-29.464844-.683593-1.898437-9.234374-21.253906-8.972656-21.460937 5.085938-4.078126 10.445313-8.847657 15.511719-14.230469 5.121094.050781 16.277344.808593 26.886719 5.796875 3.625 1.707031 8.21875.152344 9.980468-3.59375 1.761719-3.746094.15625-8.214844-3.59375-9.980469-7.65625-3.601563-15.464843-5.433594-21.941406-6.351563 3.816406-5.714843 7.019532-11.871093 9.164063-18.414062 1.292969-3.933594-.847657-8.171875-4.785157-9.464844-3.933593-1.292968-8.171874.847656-9.464843 4.785156-5.109375 15.558594-18.371094 29.09375-28.875 37.882813-10.214844-17.714844-22.578125-32.5625-36.957031-44.371094 5.648437-5.78125 12.140624-13.019531 18.570312-21.46875 6.171875-1.609375 24.613281-5.53125 39.574219.425781 3.796875 1.511719 8.230469-.394531 9.742187-4.195312 1.53125-3.847656-.34375-8.210938-4.195312-9.742188-11.234375-4.472656-23.519532-4.722656-33.316406-3.761718 7.109374-11.707032 13.324218-24.902344 17.132812-39.175782 1.066406-4-1.3125-8.113281-5.316406-9.179687-4-1.066406-8.113282 1.3125-9.179688 5.316406-2.886718 10.824219-7.351562 21.015625-12.566406 30.328125-.914062-8.722656-2.515625-18.457031-5.320312-26.554687-1.355469-3.914063-5.625-5.988281-9.542969-4.632813-3.914063 1.355469-5.988281 5.625-4.632813 9.542969 4.902344 14.164063 5.59375 35.445313 5.6875 42.570313-6.296875 8.265624-12.679687 15.304687-18.148437 20.839843-.167969-.148437-.34375-.296875-.511719-.441406-14.496094-12.53125-27.601562-26.1875-41.121094-39.710937-6.238281-6.777344-11.53125-12.960938-15.964844-18.417969 20.0625-33.984375 21.207032-70.042969 18.476563-94.78125-1.324219-12.015625 3.550781-23.582031 13.039063-30.933594 12.664062-9.816406 30.109374-9.652344 42.433593.394531 12.449219 10.148438 24.277344 22.699219 35.160157 37.304688 2.472656 3.320312 7.171874 4.007812 10.492187 1.53125 3.324219-2.472656 4.011719-7.171875 1.535156-10.496094-11.617187-15.589844-24.304687-29.039062-37.707031-39.96875-17.765625-14.480469-42.890625-14.738281-61.105469-.625-13.648437 10.578125-20.660156 27.191406-18.757812 44.4375 2.332031 21.136719 1.582031 51.320312-13.542969 80.207031-.570312-.78125-1.121094-1.542969-1.628906-2.257812-4.195313-5.898438-6.414063-12.820313-6.414063-20.019531v-137.648438c0-11.371094-9.253906-20.625-20.625-20.625h-35.210937c-11.371094 0-20.625 9.253906-20.625 20.625v137.648438c0 7.199218-2.21875 14.121093-6.414063 20.019531-.507812.714843-1.058593 1.476562-1.628906 
    2.257812-15.121094-28.886719-15.875-59.070312-13.542969-80.207031 1.902344-17.246094-5.109375-33.859375-18.757812-44.4375-18.214844-14.113281-43.339844-13.855469-61.101563.625-20.757812 16.921875-39.359375 39.339844-55.296875 66.640625-21.777344 37.300781-37.847656 82.773437-47.765625 135.15625-15.054687 79.460937-17.242187 136.707031-6.699219 175.003906 1.097657 3.992188 5.226563 6.339844 9.222657 5.238281zm207.789062-251.582031c6.015625-8.449219 9.191407-18.378906 9.191407-28.714843v-137.648438c0-3.101562 2.523437-5.621094 5.625-5.621094h35.210937c3.101563 0 5.625 2.519532 5.625 5.621094v137.648438c0 10.335937 3.175781 20.265624 9.1875 28.714843 12.6875 17.832031 27.363281 34.25 42.824219 49.707031 15.640625 15.640626 33.460937 28.894532 49.234375 44.402344 41.425781 40.738282 51.726562 104.097656 54.261719 130.804688.003906.046875.007812.097656.011718.144531.257813 2.722656-1.664062 5.550781-4.492187 5.777344-.050781.003906-.101563-.003907-.152344 0-2.417969.117187-4.609375-1.527344-5.113281-3.898438-1.59375-7.496093-3.300782-15.226562-5.882813-22.453125-10.582031-29.21875-22.304687-56.773437-42.332031-81-19.050781-23.042968-43.597656-40.597656-67.773438-57.824218-10.980468-7.828126-24.359374-15.816407-31.121093-27.933594-9.265625-16.617188-34.488281-16.644532-43.769531-.003906-6.773438 12.144531-20.097657 20.078124-31.121094 27.9375-12.996094 9.257812-29.167969 20.785156-48.839844 38.1875-27.570312 24.390624-46.429688 57.378906-58.402344 91.871093-3.542968 10.207031-6.492187 20.648438-8.742187 31.21875-.515625 2.421875-2.777344 4.097657-5.269531 3.898438-2.835938-.226563-4.75-3.0625-4.492188-5.777344.988281-10.484375 3.183594-26.691406 8.007812-44.976563 5.953126-22.558593 14.859376-44.589843 28.011719-63.949218 7.40625-10.902344 16.300781-21.109375 26.980469-29.867188 14.019531-11.492187 27.527344-23.621094 40.367188-36.417968 15.527343-15.472657 30.246093-31.972657 42.964843-49.847657zm0 0"/>
                  </svg>
                </button>
              </div>
              )
            // }else if (msg.pressao >= 20){
            }else if (msg >= 20){
              return (
                <div class='animate-svg-danger'>
                <button id="send2" class='border-danger' onClick={() => {setEstilo('safe')}}>
                  <svg height="700pt" viewBox="0 -5 512.00125 512" width="600pt"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m15.761719 438.570312c3.992187-1.097656 6.339843-5.226562 5.238281-9.222656-9.921875-36.039062-7.640625-91.066406 6.972656-168.226562 9.601563-50.699219 25.070313-94.566406 45.980469-130.386719 15.027344-25.742187 32.460937-46.792969 51.820313-62.574219 12.320312-10.046875 29.769531-10.210937 42.433593-.394531 9.488281 7.351563 14.363281 18.917969 13.035157 30.933594-2.726563 24.738281-1.582032 60.800781 18.480468 94.777343-2.71875 3.351563-5.757812 6.964844-9.148437 10.835938-.007813.007812-.015625.019531-.023438.027344-7.332031 8.429687-15.117187 16.414062-23.015625 24.3125-1.933594 1.933594-24.847656 23.960937-25.414062 23.394531-5.464844-5.53125-11.847656-12.570313-18.144532-20.835937.089844-7.125.785157-28.410157 5.6875-42.574219 1.355469-3.914063-.722656-8.1875-4.636718-9.539063-3.914063-1.355468-8.183594.71875-9.539063 4.632813-2.804687 8.097656-4.40625 17.832031-5.320312 26.554687-5.214844-9.316406-9.679688-19.503906-12.566407-30.332031-1.070312-4-5.179687-6.382813-9.179687-5.3125-4.003906 1.066406-6.382813 5.175781-5.316406 9.179687 3.804687 14.273438 10.023437 27.464844 17.132812 39.175782-9.796875-.960938-22.085937-.710938-33.320312 3.761718-3.847657 1.53125-5.726563 5.894532-4.191407 9.742188 1.5 3.777344 5.96875 5.699219 9.742188 4.195312 14.871094-5.921874 33.398438-2.011718 39.578125-.417968 6.429687 8.445312 12.917969 15.679687 18.5625 21.460937-2.847656 2.339844-5.621094 4.796875-8.3125 7.375-10.882813 10.429688-20.453125 22.792969-28.644531 36.992188-10.5-8.785157-23.765625-22.320313-28.871094-37.878907-1.292969-3.933593-5.53125-6.078124-9.46875-4.785156-3.933594 1.292969-6.078125 5.53125-4.785156 9.464844 2.148437 6.542969 5.351562 12.699219 9.167968 18.414062-6.476562.917969-14.285156 2.75-21.941406 6.355469-3.75 1.761719-5.359375 6.230469-3.59375 9.976563 1.734375 3.691406 6.289063 5.332031 9.980469 3.59375 10.515625-4.945313 21.742187-5.71875 26.894531-5.789063 5.0625 5.382813 10.421875 10.148438 15.503906 14.222657-3.265624 6.804687-6.269531 13.949218-8.972656 21.460937-3.660156 10.164063-6.5 20.113281-8.707031 29.46875-2.472656-.742187-5.070313-1.4375-7.761719-2.050781-2.132812-3.800782-5.984375-11.722656-6.847656-20.71875-.394531-4.121094-4.054688-7.148438-8.179688-6.75-4.125.394531-7.148437 4.058594-6.753906 8.179687.605469 6.324219 2.277344 12.132813 4.132813 16.9375-5.152344-.152343-10.359375.207031-15.425781 1.328125-4.046876.898438-6.597657 4.902344-5.703126 8.945313.898438 4.046875 4.902344 6.597656 8.945313 5.703125 11.371094-2.519532 24.230469-.058594 34.523437 3.171875-1.753906 9.632812-2.84375 18.253906-3.503906 25.285156-1.035156 10.953125 7.1875 21.265625 18.238282 22.140625 9.714843.769531 19.097656-6.1875 21.128906-15.734375.601562-2.824219 1.382812-6.195313 2.367187-10 7.976563 7.128906 16.929688 17.097656 20.613281 28.3125 1.269532 3.875 5.597657 6.058594 9.464844 4.789063 3.9375-1.292969 6.078125-5.53125 4.785156-9.46875-1.617187-4.921876-3.933593-9.582032-6.691406-13.953126 5.070313-.851562 10.90625-2.378906 16.640625-5.078124 3.75-1.761719 5.355469-6.230469 3.59375-9.980469-1.765625-3.75-6.234375-5.355469-9.980469-3.59375-8.167968 3.847656-16.898437 4.578125-21.273437 4.679687-4.105469-4.320312-8.421875-8.15625-12.527344-11.453125 6.492188-19.785156 17.386719-44.933593 35.101563-67.542969 2.347656 3.582032 5.03125 7.324219 8.0625 11.113282-1.039063 8.480468-2.898438 30.917968 3.570312 48.859375 1.382813 3.835937 5.773438 5.890625 9.601563 4.511719 3.894531-1.40625 5.917969-5.703126 4.511719-9.597657-3.261719-9.050781-3.90625-19.957031-3.714844-28.742187 5.5 5.078125 11.714844 9.941406 18.734375 14.277344 3.417969 2.109374 8.152343 1.074218 10.324219-2.445313 2.175781-3.523437 1.082031-8.144531-2.445313-10.320313-18.449219-11.390624-30.78125-27.03125-38.417969-39.542968 3.1875-3.371094 6.535156-6.652344 10.089844-9.796875 19.078125-16.878907 34.898438-28.148438 47.609375-37.207031 1.191406-.847657 2.351563-1.675782 3.496094-2.496094 3.9375 18.992187 8.8125 50.566406 8.8125 107.117187 0 53.203125-7.054688 83.96875-22.867188 99.757813-17.472656 17.449218-47.367187 17.402344-88.738281 17.34375-30.5 0-62.738281-4.007813-80.558594-31.953125-2.226562-3.492188-6.863281-4.519531-10.355468-2.292969-3.492188 2.226562-4.519532 6.867188-2.292969 10.359375 16.683593 26.160156 44.675781 38.878906 85.574219 38.878906 4.953124 0 9.90625.015625 14.859374.015625 41.246094 0 71.429688-1.085937 92.113282-21.734375 18.855468-18.832031 27.269531-52.871093 27.269531-110.375 0-65.25-6.390625-98.289062-10.597656-116.933593 8.148437-6.46875 14.445312-12.726563 18.800781-20.535157 1.710938-3.0625 4.875-4.964843 8.257812-4.964843h1.054688c3.386719 0 6.550781 1.902343 8.257812 4.964843 4.355469 7.808594 10.652344 14.066407 18.800782 20.535157-4.203125 18.644531-10.59375 51.683593-10.59375 116.933593 0 57.503907 8.410156 91.542969 27.269531 110.375 20.679687 20.652344 50.859375 21.734375 92.109375 21.734375 4.953125 0 9.90625-.015625 14.859375-.015625 36.484375 0 62.519531-10.015625 79.585937-30.621093 14.726563-17.773438 22.824219-43.304688 24.753907-78.054688 1.9375-34.75-2.261719-78.773438-12.832031-134.578125-10.109376-53.386719-26.601563-99.570313-49.011719-137.269531-2.117188-3.5625-6.722657-4.730469-10.28125-2.613282-3.5625 2.117188-4.730469 6.71875-2.617188 10.28125 21.519531 36.191407 37.386719 80.734376 47.171875 132.390626 19.953125 105.355468 17.175782 168.996093-8.734375 200.277343-18.609375 22.460938-48.496093 25.152344-75.664062 25.195313-41.371094.058594-71.269531.105468-88.742188-17.34375-15.8125-15.789063-22.863281-46.554688-22.863281-99.757813 0-56.550781 4.875-88.125 8.8125-107.117187 1.144531.820312 2.304688 1.648437 3.496094 2.496094 16.40625 11.691406 32.507812 23.847656 47.605468 37.207031 3.554688 3.144531 6.90625 6.425781 10.089844 9.796875-7.632812 12.507812-19.964844 28.152344-38.417968 39.542968-3.523438 2.175782-4.617188 6.796876-2.441407 10.320313 2.144531 3.476563 6.847657 4.589844 10.320313 2.445313 7.027344-4.335938 13.242187-9.207032 18.75-14.289063.191406 8.769531-.453125 19.667969-3.726563 28.75-1.726562 4.789063 1.972657 10.046875 7.054688 10.046875 3.074219 0 5.953125-1.902344 7.058593-4.957031 6.464844-17.941407 4.609376-40.378907 3.570313-48.859375 3.03125-3.792969 5.714844-7.535156 8.058594-11.113282 17.71875 22.609376 28.613281 47.757813 35.105469 67.542969-4.105469 3.296875-8.421876 7.132813-12.527344 11.453125-4.375-.101562-13.101563-.832031-21.273438-4.679687-3.75-1.761719-8.214844-.152344-9.980468 3.59375-1.761719 3.75-.15625 8.21875 3.59375 9.980469 5.734374 2.699218 11.574218 4.226562 16.640624 5.078124-2.757812 4.371094-5.074218 9.03125-6.691406 13.953126-1.292968 3.9375.847656 8.175781 4.785156 9.46875 3.808594 1.25 8.175782-.859376 9.464844-4.789063 3.683594-11.214844 12.636719-21.183594 20.613282-28.3125.984374 3.804687 1.765624 7.175781 2.367187 10 0 .011719.003906.019531.007813.03125 2.03125 9.488281 11.445312 16.464844 21.121093 15.703125 11.578125-.914062 19.242188-11.902344 18.152344-22.992188-.667969-6.875-1.734375-15.179687-3.417969-24.433593 10.289063-3.230469 23.152344-5.691407 34.523438-3.171875 4.042968.894531 8.046875-1.660156 8.941406-5.703125.898438-4.042969-1.65625-8.046875-5.699219-8.945313-5.066406-1.121094-10.273437-1.480468-15.425781-1.328125 1.855469-4.804687 3.527344-10.613281 4.132812-16.9375.394532-4.121093-2.628906-7.785156-6.753906-8.179687-4.128906-.398438-7.785156 2.628906-8.179687 6.75-.863281 9.015625-4.707031 16.914062-6.847657 20.71875-2.691406.613281-5.289062 1.308594-7.761718 2.046875-2.207032-9.351563-5.046875-19.304688-8.707032-29.464844-.683593-1.898437-9.234374-21.253906-8.972656-21.460937 5.085938-4.078126 10.445313-8.847657 15.511719-14.230469 5.121094.050781 16.277344.808593 26.886719 5.796875 3.625 1.707031 8.21875.152344 9.980468-3.59375 1.761719-3.746094.15625-8.214844-3.59375-9.980469-7.65625-3.601563-15.464843-5.433594-21.941406-6.351563 3.816406-5.714843 7.019532-11.871093 9.164063-18.414062 1.292969-3.933594-.847657-8.171875-4.785157-9.464844-3.933593-1.292968-8.171874.847656-9.464843 4.785156-5.109375 15.558594-18.371094 29.09375-28.875 37.882813-10.214844-17.714844-22.578125-32.5625-36.957031-44.371094 5.648437-5.78125 12.140624-13.019531 18.570312-21.46875 6.171875-1.609375 24.613281-5.53125 39.574219.425781 3.796875 1.511719 8.230469-.394531 9.742187-4.195312 1.53125-3.847656-.34375-8.210938-4.195312-9.742188-11.234375-4.472656-23.519532-4.722656-33.316406-3.761718 7.109374-11.707032 13.324218-24.902344 17.132812-39.175782 1.066406-4-1.3125-8.113281-5.316406-9.179687-4-1.066406-8.113282 1.3125-9.179688 5.316406-2.886718 10.824219-7.351562 21.015625-12.566406 30.328125-.914062-8.722656-2.515625-18.457031-5.320312-26.554687-1.355469-3.914063-5.625-5.988281-9.542969-4.632813-3.914063 1.355469-5.988281 5.625-4.632813 9.542969 4.902344 14.164063 5.59375 35.445313 5.6875 42.570313-6.296875 8.265624-12.679687 15.304687-18.148437 20.839843-.167969-.148437-.34375-.296875-.511719-.441406-14.496094-12.53125-27.601562-26.1875-41.121094-39.710937-6.238281-6.777344-11.53125-12.960938-15.964844-18.417969 20.0625-33.984375 21.207032-70.042969 18.476563-94.78125-1.324219-12.015625 3.550781-23.582031 13.039063-30.933594 12.664062-9.816406 30.109374-9.652344 42.433593.394531 12.449219 10.148438 24.277344 22.699219 35.160157 37.304688 2.472656 3.320312 7.171874 4.007812 10.492187 1.53125 3.324219-2.472656 4.011719-7.171875 1.535156-10.496094-11.617187-15.589844-24.304687-29.039062-37.707031-39.96875-17.765625-14.480469-42.890625-14.738281-61.105469-.625-13.648437 10.578125-20.660156 27.191406-18.757812 44.4375 2.332031 21.136719 1.582031 51.320312-13.542969 80.207031-.570312-.78125-1.121094-1.542969-1.628906-2.257812-4.195313-5.898438-6.414063-12.820313-6.414063-20.019531v-137.648438c0-11.371094-9.253906-20.625-20.625-20.625h-35.210937c-11.371094 0-20.625 9.253906-20.625 20.625v137.648438c0 7.199218-2.21875 14.121093-6.414063 20.019531-.507812.714843-1.058593 1.476562-1.628906 
    2.257812-15.121094-28.886719-15.875-59.070312-13.542969-80.207031 1.902344-17.246094-5.109375-33.859375-18.757812-44.4375-18.214844-14.113281-43.339844-13.855469-61.101563.625-20.757812 16.921875-39.359375 39.339844-55.296875 66.640625-21.777344 37.300781-37.847656 82.773437-47.765625 135.15625-15.054687 79.460937-17.242187 136.707031-6.699219 175.003906 1.097657 3.992188 5.226563 6.339844 9.222657 5.238281zm207.789062-251.582031c6.015625-8.449219 9.191407-18.378906 9.191407-28.714843v-137.648438c0-3.101562 2.523437-5.621094 5.625-5.621094h35.210937c3.101563 0 5.625 2.519532 5.625 5.621094v137.648438c0 10.335937 3.175781 20.265624 9.1875 28.714843 12.6875 17.832031 27.363281 34.25 42.824219 49.707031 15.640625 15.640626 33.460937 28.894532 49.234375 44.402344 41.425781 40.738282 51.726562 104.097656 54.261719 130.804688.003906.046875.007812.097656.011718.144531.257813 2.722656-1.664062 5.550781-4.492187 5.777344-.050781.003906-.101563-.003907-.152344 0-2.417969.117187-4.609375-1.527344-5.113281-3.898438-1.59375-7.496093-3.300782-15.226562-5.882813-22.453125-10.582031-29.21875-22.304687-56.773437-42.332031-81-19.050781-23.042968-43.597656-40.597656-67.773438-57.824218-10.980468-7.828126-24.359374-15.816407-31.121093-27.933594-9.265625-16.617188-34.488281-16.644532-43.769531-.003906-6.773438 12.144531-20.097657 20.078124-31.121094 27.9375-12.996094 9.257812-29.167969 20.785156-48.839844 38.1875-27.570312 24.390624-46.429688 57.378906-58.402344 91.871093-3.542968 10.207031-6.492187 20.648438-8.742187 31.21875-.515625 2.421875-2.777344 4.097657-5.269531 3.898438-2.835938-.226563-4.75-3.0625-4.492188-5.777344.988281-10.484375 3.183594-26.691406 8.007812-44.976563 5.953126-22.558593 14.859376-44.589843 28.011719-63.949218 7.40625-10.902344 16.300781-21.109375 26.980469-29.867188 14.019531-11.492187 27.527344-23.621094 40.367188-36.417968 15.527343-15.472657 30.246093-31.972657 42.964843-49.847657zm0 0"/>
                  </svg>
                </button>
              </div>
              )
            // } else if (msg.pressao <= 15 || pressao === 0){
            } else if (msg <= 15 || pressao === 0){
              return (
                <div class='animate-svg-warn'>
                <button id="send2" class='border-warn' onClick={() => {setEstilo('danger')}}>
                  <svg height="600pt" viewBox="0 -5 512.00125 512" width="500pt"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m15.761719 438.570312c3.992187-1.097656 6.339843-5.226562 5.238281-9.222656-9.921875-36.039062-7.640625-91.066406 6.972656-168.226562 9.601563-50.699219 25.070313-94.566406 45.980469-130.386719 15.027344-25.742187 32.460937-46.792969 51.820313-62.574219 12.320312-10.046875 29.769531-10.210937 42.433593-.394531 9.488281 7.351563 14.363281 18.917969 13.035157 30.933594-2.726563 24.738281-1.582032 60.800781 18.480468 94.777343-2.71875 3.351563-5.757812 6.964844-9.148437 10.835938-.007813.007812-.015625.019531-.023438.027344-7.332031 8.429687-15.117187 16.414062-23.015625 24.3125-1.933594 1.933594-24.847656 23.960937-25.414062 23.394531-5.464844-5.53125-11.847656-12.570313-18.144532-20.835937.089844-7.125.785157-28.410157 5.6875-42.574219 1.355469-3.914063-.722656-8.1875-4.636718-9.539063-3.914063-1.355468-8.183594.71875-9.539063 4.632813-2.804687 8.097656-4.40625 17.832031-5.320312 26.554687-5.214844-9.316406-9.679688-19.503906-12.566407-30.332031-1.070312-4-5.179687-6.382813-9.179687-5.3125-4.003906 1.066406-6.382813 5.175781-5.316406 9.179687 3.804687 14.273438 10.023437 27.464844 17.132812 39.175782-9.796875-.960938-22.085937-.710938-33.320312 3.761718-3.847657 1.53125-5.726563 5.894532-4.191407 9.742188 1.5 3.777344 5.96875 5.699219 9.742188 4.195312 14.871094-5.921874 33.398438-2.011718 39.578125-.417968 6.429687 8.445312 12.917969 15.679687 18.5625 21.460937-2.847656 2.339844-5.621094 4.796875-8.3125 7.375-10.882813 10.429688-20.453125 22.792969-28.644531 36.992188-10.5-8.785157-23.765625-22.320313-28.871094-37.878907-1.292969-3.933593-5.53125-6.078124-9.46875-4.785156-3.933594 1.292969-6.078125 5.53125-4.785156 9.464844 2.148437 6.542969 5.351562 12.699219 9.167968 18.414062-6.476562.917969-14.285156 2.75-21.941406 6.355469-3.75 1.761719-5.359375 6.230469-3.59375 9.976563 1.734375 3.691406 6.289063 5.332031 9.980469 3.59375 10.515625-4.945313 21.742187-5.71875 26.894531-5.789063 5.0625 5.382813 10.421875 10.148438 15.503906 14.222657-3.265624 6.804687-6.269531 13.949218-8.972656 21.460937-3.660156 10.164063-6.5 20.113281-8.707031 29.46875-2.472656-.742187-5.070313-1.4375-7.761719-2.050781-2.132812-3.800782-5.984375-11.722656-6.847656-20.71875-.394531-4.121094-4.054688-7.148438-8.179688-6.75-4.125.394531-7.148437 4.058594-6.753906 8.179687.605469 6.324219 2.277344 12.132813 4.132813 16.9375-5.152344-.152343-10.359375.207031-15.425781 1.328125-4.046876.898438-6.597657 4.902344-5.703126 8.945313.898438 4.046875 4.902344 6.597656 8.945313 5.703125 11.371094-2.519532 24.230469-.058594 34.523437 3.171875-1.753906 9.632812-2.84375 18.253906-3.503906 25.285156-1.035156 10.953125 7.1875 21.265625 18.238282 22.140625 9.714843.769531 19.097656-6.1875 21.128906-15.734375.601562-2.824219 1.382812-6.195313 2.367187-10 7.976563 7.128906 16.929688 17.097656 20.613281 28.3125 1.269532 3.875 5.597657 6.058594 9.464844 4.789063 3.9375-1.292969 6.078125-5.53125 4.785156-9.46875-1.617187-4.921876-3.933593-9.582032-6.691406-13.953126 5.070313-.851562 10.90625-2.378906 16.640625-5.078124 3.75-1.761719 5.355469-6.230469 3.59375-9.980469-1.765625-3.75-6.234375-5.355469-9.980469-3.59375-8.167968 3.847656-16.898437 4.578125-21.273437 4.679687-4.105469-4.320312-8.421875-8.15625-12.527344-11.453125 6.492188-19.785156 17.386719-44.933593 35.101563-67.542969 2.347656 3.582032 5.03125 7.324219 8.0625 11.113282-1.039063 8.480468-2.898438 30.917968 3.570312 48.859375 1.382813 3.835937 5.773438 5.890625 9.601563 4.511719 3.894531-1.40625 5.917969-5.703126 4.511719-9.597657-3.261719-9.050781-3.90625-19.957031-3.714844-28.742187 5.5 5.078125 11.714844 9.941406 18.734375 14.277344 3.417969 2.109374 8.152343 1.074218 10.324219-2.445313 2.175781-3.523437 1.082031-8.144531-2.445313-10.320313-18.449219-11.390624-30.78125-27.03125-38.417969-39.542968 3.1875-3.371094 6.535156-6.652344 10.089844-9.796875 19.078125-16.878907 34.898438-28.148438 47.609375-37.207031 1.191406-.847657 2.351563-1.675782 3.496094-2.496094 3.9375 18.992187 8.8125 50.566406 8.8125 107.117187 0 53.203125-7.054688 83.96875-22.867188 99.757813-17.472656 17.449218-47.367187 17.402344-88.738281 17.34375-30.5 0-62.738281-4.007813-80.558594-31.953125-2.226562-3.492188-6.863281-4.519531-10.355468-2.292969-3.492188 2.226562-4.519532 6.867188-2.292969 10.359375 16.683593 26.160156 44.675781 38.878906 85.574219 38.878906 4.953124 0 9.90625.015625 14.859374.015625 41.246094 0 71.429688-1.085937 92.113282-21.734375 18.855468-18.832031 27.269531-52.871093 27.269531-110.375 0-65.25-6.390625-98.289062-10.597656-116.933593 8.148437-6.46875 14.445312-12.726563 18.800781-20.535157 1.710938-3.0625 4.875-4.964843 8.257812-4.964843h1.054688c3.386719 0 6.550781 1.902343 8.257812 4.964843 4.355469 7.808594 10.652344 14.066407 18.800782 20.535157-4.203125 18.644531-10.59375 51.683593-10.59375 116.933593 0 57.503907 8.410156 91.542969 27.269531 110.375 20.679687 20.652344 50.859375 21.734375 92.109375 21.734375 4.953125 0 9.90625-.015625 14.859375-.015625 36.484375 0 62.519531-10.015625 79.585937-30.621093 14.726563-17.773438 22.824219-43.304688 24.753907-78.054688 1.9375-34.75-2.261719-78.773438-12.832031-134.578125-10.109376-53.386719-26.601563-99.570313-49.011719-137.269531-2.117188-3.5625-6.722657-4.730469-10.28125-2.613282-3.5625 2.117188-4.730469 6.71875-2.617188 10.28125 21.519531 36.191407 37.386719 80.734376 47.171875 132.390626 19.953125 105.355468 17.175782 168.996093-8.734375 200.277343-18.609375 22.460938-48.496093 25.152344-75.664062 25.195313-41.371094.058594-71.269531.105468-88.742188-17.34375-15.8125-15.789063-22.863281-46.554688-22.863281-99.757813 0-56.550781 4.875-88.125 8.8125-107.117187 1.144531.820312 2.304688 1.648437 3.496094 2.496094 16.40625 11.691406 32.507812 23.847656 47.605468 37.207031 3.554688 3.144531 6.90625 6.425781 10.089844 9.796875-7.632812 12.507812-19.964844 28.152344-38.417968 39.542968-3.523438 2.175782-4.617188 6.796876-2.441407 10.320313 2.144531 3.476563 6.847657 4.589844 10.320313 2.445313 7.027344-4.335938 13.242187-9.207032 18.75-14.289063.191406 8.769531-.453125 19.667969-3.726563 28.75-1.726562 4.789063 1.972657 10.046875 7.054688 10.046875 3.074219 0 5.953125-1.902344 7.058593-4.957031 6.464844-17.941407 4.609376-40.378907 3.570313-48.859375 3.03125-3.792969 5.714844-7.535156 8.058594-11.113282 17.71875 22.609376 28.613281 47.757813 35.105469 67.542969-4.105469 3.296875-8.421876 7.132813-12.527344 11.453125-4.375-.101562-13.101563-.832031-21.273438-4.679687-3.75-1.761719-8.214844-.152344-9.980468 3.59375-1.761719 3.75-.15625 8.21875 3.59375 9.980469 5.734374 2.699218 11.574218 4.226562 16.640624 5.078124-2.757812 4.371094-5.074218 9.03125-6.691406 13.953126-1.292968 3.9375.847656 8.175781 4.785156 9.46875 3.808594 1.25 8.175782-.859376 9.464844-4.789063 3.683594-11.214844 12.636719-21.183594 20.613282-28.3125.984374 3.804687 1.765624 7.175781 2.367187 10 0 .011719.003906.019531.007813.03125 2.03125 9.488281 11.445312 16.464844 21.121093 15.703125 11.578125-.914062 19.242188-11.902344 18.152344-22.992188-.667969-6.875-1.734375-15.179687-3.417969-24.433593 10.289063-3.230469 23.152344-5.691407 34.523438-3.171875 4.042968.894531 8.046875-1.660156 8.941406-5.703125.898438-4.042969-1.65625-8.046875-5.699219-8.945313-5.066406-1.121094-10.273437-1.480468-15.425781-1.328125 1.855469-4.804687 3.527344-10.613281 4.132812-16.9375.394532-4.121093-2.628906-7.785156-6.753906-8.179687-4.128906-.398438-7.785156 2.628906-8.179687 6.75-.863281 9.015625-4.707031 16.914062-6.847657 20.71875-2.691406.613281-5.289062 1.308594-7.761718 2.046875-2.207032-9.351563-5.046875-19.304688-8.707032-29.464844-.683593-1.898437-9.234374-21.253906-8.972656-21.460937 5.085938-4.078126 10.445313-8.847657 15.511719-14.230469 5.121094.050781 16.277344.808593 26.886719 5.796875 3.625 1.707031 8.21875.152344 9.980468-3.59375 1.761719-3.746094.15625-8.214844-3.59375-9.980469-7.65625-3.601563-15.464843-5.433594-21.941406-6.351563 3.816406-5.714843 7.019532-11.871093 9.164063-18.414062 1.292969-3.933594-.847657-8.171875-4.785157-9.464844-3.933593-1.292968-8.171874.847656-9.464843 4.785156-5.109375 15.558594-18.371094 29.09375-28.875 37.882813-10.214844-17.714844-22.578125-32.5625-36.957031-44.371094 5.648437-5.78125 12.140624-13.019531 18.570312-21.46875 6.171875-1.609375 24.613281-5.53125 39.574219.425781 3.796875 1.511719 8.230469-.394531 9.742187-4.195312 1.53125-3.847656-.34375-8.210938-4.195312-9.742188-11.234375-4.472656-23.519532-4.722656-33.316406-3.761718 7.109374-11.707032 13.324218-24.902344 17.132812-39.175782 1.066406-4-1.3125-8.113281-5.316406-9.179687-4-1.066406-8.113282 1.3125-9.179688 5.316406-2.886718 10.824219-7.351562 21.015625-12.566406 30.328125-.914062-8.722656-2.515625-18.457031-5.320312-26.554687-1.355469-3.914063-5.625-5.988281-9.542969-4.632813-3.914063 1.355469-5.988281 5.625-4.632813 9.542969 4.902344 14.164063 5.59375 35.445313 5.6875 42.570313-6.296875 8.265624-12.679687 15.304687-18.148437 20.839843-.167969-.148437-.34375-.296875-.511719-.441406-14.496094-12.53125-27.601562-26.1875-41.121094-39.710937-6.238281-6.777344-11.53125-12.960938-15.964844-18.417969 20.0625-33.984375 21.207032-70.042969 18.476563-94.78125-1.324219-12.015625 3.550781-23.582031 13.039063-30.933594 12.664062-9.816406 30.109374-9.652344 42.433593.394531 12.449219 10.148438 24.277344 22.699219 35.160157 37.304688 2.472656 3.320312 7.171874 4.007812 10.492187 1.53125 3.324219-2.472656 4.011719-7.171875 1.535156-10.496094-11.617187-15.589844-24.304687-29.039062-37.707031-39.96875-17.765625-14.480469-42.890625-14.738281-61.105469-.625-13.648437 10.578125-20.660156 27.191406-18.757812 44.4375 2.332031 21.136719 1.582031 51.320312-13.542969 80.207031-.570312-.78125-1.121094-1.542969-1.628906-2.257812-4.195313-5.898438-6.414063-12.820313-6.414063-20.019531v-137.648438c0-11.371094-9.253906-20.625-20.625-20.625h-35.210937c-11.371094 0-20.625 9.253906-20.625 20.625v137.648438c0 7.199218-2.21875 14.121093-6.414063 20.019531-.507812.714843-1.058593 1.476562-1.628906 
    2.257812-15.121094-28.886719-15.875-59.070312-13.542969-80.207031 1.902344-17.246094-5.109375-33.859375-18.757812-44.4375-18.214844-14.113281-43.339844-13.855469-61.101563.625-20.757812 16.921875-39.359375 39.339844-55.296875 66.640625-21.777344 37.300781-37.847656 82.773437-47.765625 135.15625-15.054687 79.460937-17.242187 136.707031-6.699219 175.003906 1.097657 3.992188 5.226563 6.339844 9.222657 5.238281zm207.789062-251.582031c6.015625-8.449219 9.191407-18.378906 9.191407-28.714843v-137.648438c0-3.101562 2.523437-5.621094 5.625-5.621094h35.210937c3.101563 0 5.625 2.519532 5.625 5.621094v137.648438c0 10.335937 3.175781 20.265624 9.1875 28.714843 12.6875 17.832031 27.363281 34.25 42.824219 49.707031 15.640625 15.640626 33.460937 28.894532 49.234375 44.402344 41.425781 40.738282 51.726562 104.097656 54.261719 130.804688.003906.046875.007812.097656.011718.144531.257813 2.722656-1.664062 5.550781-4.492187 5.777344-.050781.003906-.101563-.003907-.152344 0-2.417969.117187-4.609375-1.527344-5.113281-3.898438-1.59375-7.496093-3.300782-15.226562-5.882813-22.453125-10.582031-29.21875-22.304687-56.773437-42.332031-81-19.050781-23.042968-43.597656-40.597656-67.773438-57.824218-10.980468-7.828126-24.359374-15.816407-31.121093-27.933594-9.265625-16.617188-34.488281-16.644532-43.769531-.003906-6.773438 12.144531-20.097657 20.078124-31.121094 27.9375-12.996094 9.257812-29.167969 20.785156-48.839844 38.1875-27.570312 24.390624-46.429688 57.378906-58.402344 91.871093-3.542968 10.207031-6.492187 20.648438-8.742187 31.21875-.515625 2.421875-2.777344 4.097657-5.269531 3.898438-2.835938-.226563-4.75-3.0625-4.492188-5.777344.988281-10.484375 3.183594-26.691406 8.007812-44.976563 5.953126-22.558593 14.859376-44.589843 28.011719-63.949218 7.40625-10.902344 16.300781-21.109375 26.980469-29.867188 14.019531-11.492187 27.527344-23.621094 40.367188-36.417968 15.527343-15.472657 30.246093-31.972657 42.964843-49.847657zm0 0"/>
                  </svg>
                </button>
              </div>
              )
            }
          })()
        }
          </Paper>
          
        </Grid>




      </Grid>
    </div>
  );
}
