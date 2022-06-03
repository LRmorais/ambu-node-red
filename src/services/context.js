import React, {createContext, useContext, useState, useEffect} from 'react';
// import socketIOClient from 'socket.io-client';
// const ENDPOINT = "http://localhost:4001";

const DataContext = createContext();

export default function DataProvider({children}) {
  const [msg, setMsg] = useState({})
  // const [response, setResponse] = useState("");
  // const [serial, setSerial] = useState('serial2');

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  //   socket.on("FromAPI2", data => {
  //     setSerial(data);
  //   });
  // }, []);

    // const data = () =>{
    //   uibuilder.onChange('msg', (newVal) => {
    //     setMsg(newVal.payload)
    //   })
    // }
    // data();


    return <DataContext.Provider 
    value={{msg, setMsg}}>
      {children}
    </DataContext.Provider>
}
// um hook pra facilitar a obtenção dos dados
export function useData(){
  const context = useContext(DataContext)

  const { msg, setMsg } = context;
  return { msg, setMsg}
}