import React from 'react';
import {useData} from '../services/context';


function Teste() {
  const {msg, setMsg} = useData();
  console.log(msg.cardio)
  return (
    <div/> 
  )
}

export default Teste;