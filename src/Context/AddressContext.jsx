import { useContext, createContext } from "react";

const Address = createContext();

const AddressContext = ({ children }) => {
  const initialAddressState = [
    {
      fullName: "",
      mobile: "",
      houseNo: "",
      city: "",
      district: "",
      state: "",
      pin: null,
    },
  ];
  const [addresses, setAddresses] = useState(initialAddressState);
  return (
    <Address.Provider value={{ userAuthState, dispatchUserAuth }}>
      {children}
    </Address.Provider>
  );
};

const useAuth = () => useContext(Address);

export { useAuth, AddressContext };
