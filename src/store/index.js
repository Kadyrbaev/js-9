import { createContext, useState } from "react";

export const GlobalContext = createContext()


export const ContexProvider=(props)=>{
    const [state, setState] = useState(false)

    const clickHandler=()=>{
      setState(true)
    }
    const falseState=()=>{
      setState(false)
    }
  
    const value = {
      state,
      clickHandler,
      falseState
    }
    console.log(props);
    return <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>
}