import React, {useCallback, useState} from 'react';
import {Chart} from "react-google-charts";
import uibuilder from '../libs/uibuilderfe';

const Config = () => {

  const [msgRecvd, setMsgRecvd] = useState({});
  
    const dados =  useCallback(()=>{
      uibuilder.onChange('msg', (newVal) => {
        setMsgRecvd(newVal.payload)          
        console.log(msgRecvd)
      })
    },[msgRecvd])
      
    dados();

  return(
    <Chart
        width={400}
        height={120}
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Pressão', msgRecvd.pressao],
          ['Oxigenação', msgRecvd.oxigenio],
          ['Saturação', msgRecvd.saturation],
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