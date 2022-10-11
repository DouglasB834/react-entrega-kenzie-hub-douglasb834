import { createContext, useContext } from "react";
import { NegativeLogin, NegativeRergister, SucessLogin, SucessRegister } from "../../Api";
import { instance } from "../../Api/instance";
import { DataContext } from "../DataContext/context";

export const RequestContext = createContext({});

export const RequestProvide = ({ children }) => {
  const { navigate, user, setUser } = useContext(DataContext);

  const submitLogin = async (data) => {
    try {
      const response = await instance.post(`/sessions/`, data);
      const { user: userResponse, token } = response.data;

      const id = userResponse.id;
      setUser(userResponse);
      SucessLogin();
      localStorage.setItem("@hub:id", id);
      localStorage.setItem("@hub:token", token);
      navigate(`/dashboard/user/${id}`, { replace: true });
    } catch (error) {
      localStorage.clear()
      NegativeLogin();
      console.log(error);
    }
  };

  const  onSubmitRegister = async (data) => {
    try {
      const resposta = await instance.post(`/users`, data)
      SucessRegister();
      navigate("/")
    } catch (error) {      
      NegativeRergister(error);
      console.log(error);
    }
  
     
   };


  return (
    <RequestContext.Provider value={{ submitLogin, onSubmitRegister }}>
      {children}
    </RequestContext.Provider>
  );
};
