import { createContext, useContext,useState,useEffect } from "react";
import {fetchAPI} from '../src/api/api'
const AppContext =createContext()

export const AppProvider=({children})=>{
    const [confirm, setConfirm] = useState(false);
    const [msg, setMsg] = useState({
      line1: "",
      line2: "",
      line3: "",
    });
  
    const [availableTimes, setAvailableTimes] = useState([]);
  
    useEffect(() => {
      const date = new Date();
      const times = fetchAPI(date);
      setAvailableTimes(times);
    }, []);
  
    const contextValues = { setConfirm, msg, setMsg, availableTimes };


    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    )
}

 export const useGlobalContext=()=>useContext(AppContext)