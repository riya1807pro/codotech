import { Children, createContext,useContext } from "react";
export const PlaygroundContext = createContext();  
export const PlaygroundProvider = ({Children}) => {
const obj = {
        name:"riya"
    }

  return (
    <PlaygroundContext.Provider value={obj}>
        {Children}
    </PlaygroundContext.Provider>
  )
};
