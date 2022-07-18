import { useContext, createContext, useReducer } from "react";
import { userDetailsReducer } from "../Reducers/UserDetailsReducer";
import { initialAuthState } from "../Utils/helpers";

const AuthorisationContext = createContext();

const AuthContext = ({ children }) => {
  const [userAuthState, dispatchUserAuth] = useReducer(
    userDetailsReducer,
    JSON.parse(localStorage.getItem("userData")) ?? initialAuthState
  );

  return (
    <AuthorisationContext.Provider value={{ userAuthState, dispatchUserAuth }}>
      {children}
    </AuthorisationContext.Provider>
  );
};

const useAuth = () => useContext(AuthorisationContext);

export { useAuth, AuthContext };
