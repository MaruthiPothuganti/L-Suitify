import { useContext, createContext, useReducer } from "react";
import { userDetailsReducer } from "../Reducers/UserDetailsReducer";

const AuthorisationContext = createContext();
const initialState = {
  token: "",
  name: "",
  email: "",
  password: "",
};
const AuthContext = ({ children }) => {
  const [userAuthState, dispatchUserAuth] = useReducer(
    userDetailsReducer,
    initialState
  );

  return (
    <AuthorisationContext.Provider value={{ userAuthState, dispatchUserAuth }}>
      {children}
    </AuthorisationContext.Provider>
  );
};

const useAuth = () => useContext(AuthorisationContext);

export { useAuth, AuthContext };
