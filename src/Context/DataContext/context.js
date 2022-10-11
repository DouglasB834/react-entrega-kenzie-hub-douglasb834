import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../Api/instance";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const token = localStorage.getItem("@hub:token");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isModal, setModal] = useState(false);
  const showModal = () => {
    setModal(false);
  };

  const [loading, setLoading] = useState(true);

  //lembra sempre que vc esta fazendo get post etc
  //então deixa async await
  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        try {
            instance.defaults.headers.authorization = `Bearer ${token}`;
            const {data} = await instance.get(`/profile`);         
            setUser(data);          
        } catch (error) {
          //erros se nao tiver token 
          console.log(error);
        }
      }
      setLoading(false);
    };

    loginUser()
  }, []);

  return (
    <DataContext.Provider
      value={{ navigate, token, user,setUser, isModal, setModal,  loading, showModal }}
    >
      {children}
    </DataContext.Provider>
  );
};
