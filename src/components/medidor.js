import React, {useCallback, useState} from 'react';
import {Chart} from "react-google-charts";
import uibuilder from '../libs/uibuilderfe';

const Config = () => {

  const [msgRecvd, setMsgRecvd] = useState({});
  const dataFake = 20
  
    const dados =  useCallback(()=>{
      uibuilder.onChange('msg', (newVal) => {
        setMsgRecvd(newVal.payload)          
        console.log(msgRecvd)
      })
    },[msgRecvd])
      
    dados();

  return(
    <Chart
        width={'100%'}
        height={'100%'}
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        // data={[
        //   ['Label', 'Value'],
        //   ['Pressão', msgRecvd.pressao],
        //   ['Oxigenação', msgRecvd.oxigenio],
        //   ['Saturação', msgRecvd.saturation],
        // ]}
        data={[
          ['Label', 'Value'],
          ['Pressão', dataFake],
          ['Oxigenação', dataFake],
          ['Saturação', dataFake],
        ]}
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