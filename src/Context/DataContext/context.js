import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../Api/instance";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const token = localStorage.getItem("@hub:token");
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isModal, setModal] = useState(false);
  const [ isVerificar, setVerificar] = useState(false)

  const [closeAnimation, setCloseAnimation] =useState("")
  const [deletAnimation, setDeletAnimation] =useState("animate__fadeInUp")
  const [loading, setLoading] = useState(true);
  

  const showModal = () => {
    setCloseAnimation("containerCadstrar animate__flipOutY")
    setTimeout(() => {
      setModal(false);
    }, 650);

  };

  const add =()=>{
    setModal(true)
    setCloseAnimation("containerCadstrar animate__flipInY")
  }

  useEffect(() => {
    const loginUser = async () => {
      setVerificar(true)
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
      setVerificar(true)
    };
    loginUser()
  }, [isVerificar]);

  // console.log(tech)

  return (
    <DataContext.Provider
      value={{ navigate, token, user,setUser, isModal, setModal,  loading, showModal,closeAnimation, add, deletAnimation, setVerificar }}
    >
      {children}
    </DataContext.Provider>
  );
};
