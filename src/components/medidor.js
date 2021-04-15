import React, {useCallback, useState} from 'react';
import {Chart} from "react-google-charts";
import uibuilder from '../libs/uibuilderfe';

uibuilder.start();
const Config = () => {


  const [msgRecvd, setMsgRecvd] = useState({});
  const [tempo, setTempo] = useState([0]);
  const dataFake = 20
  
    const data = () =>{
      uibuilder.onChange('msg', (newVal) => {
        setMsgRecvd(newVal.payload)
        console.log('oi')
      })
    }

    // const dados =  useCallback(()=>{
    //   uibuilder.onChange('msg', (newVal) => {
    //     setMsgRecvd(newVal)
    //     //setTempo(oldArray => [...oldArray, newVal.payload.tempo]);       
    //     //console.log(tempo)
    //     console.log('oi')
    //   })
    // },[])
    // setInterval(data, 300);
    data();
    

  return(
    <Chart
        width={'100%'}
        height={'100%'}
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={[
          ['Label', 'Value'],
          // ['Pressão', msgRecvd.cardio],
          ['Oxigenação', msgRecvd.oxi],
          ['Cardio', msgRecvd.cardio],
        ]}
        // data={[
        //   ['Label', 'Value'],
        //   ['Pressão', dataFake],
        //   ['Oxigenação', dataFake],
        //   ['Saturação', dataFake],
        // ]}
        options={{
          redFrom: 90,
          redTo: 100,
          yellowFrom: 75,
          yellowTo: 90,
          minorTicks: 5,
        }}
        rootProps={{ 'data-testid': '1' }}
      />
  )
}

export default Config;