import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../Reducers/DataReducer";
import { userDataInitialState } from "../Utils/helpers";

const DataContext = createContext();
const UserDataContext = ({ children }) => {


    const [userDataState, userDataDispatch] = useReducer(dataReducer, userDataInitialState);

    return (
        <DataContext.Provider value={{ userDataState ,userDataDispatch }}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export {UserDataContext, useData}
