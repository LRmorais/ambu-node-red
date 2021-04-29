import React from 'react';
import {Chart} from "react-google-charts";
import {useData} from '../services/context';


const Config = () => {

  const {msg} = useData();
  console.log(msg)
  if(Object.keys(msg).length === 0 ){
    return <p>sem dados</p>
  }else {
    return(
      <Chart
          width={'100%'}
          height={'100%'}
          chartType="Gauge"
          loader={<div>Loading Chart</div>}
          data={[
            ['Label', 'Value'],
            // ['Pressão', msgRecvd.cardio],
            ['Oxigenação', msg.oxi],
            ['Cardio', msg.cardio],
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
  
}

export default Config;