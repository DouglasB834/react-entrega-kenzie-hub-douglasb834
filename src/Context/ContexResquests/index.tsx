import { createContext, useContext } from "react";
import { NegativeLogin, NegativeRergister, SucessLogin, SucessRegister } from "../../Api";
import { instance } from "../../Api/instance";
import { iRequestProvid} from "../../Interface.services/requestInterface";
import { IChildren,IUser } from "../../Interface.services/servecisData";
import { DataContext } from "../DataContext/context";

export const RequestContext = createContext({} as iRequestProvid);

export const RequestProvide = ({ children }:IChildren) => {
  
  const { navigate, user, setUser } = useContext(DataContext);

  interface Idata {
    user:IUser,
    token:string,

  }

  const submitLogin = async (data: IUser) => {
    try {
      const response = await instance.post<Idata>(`/sessions/`, data);
      
      const { user, token } = response.data;
      console.log(response)
      const id = user.id;
      setUser(user);

      SucessLogin("Logando...")
      localStorage.setItem("@hub:id", id);
      localStorage.setItem("@hub:token", token);
      navigate(`/dashboard/user/${id}`, { replace: true });

    } catch (error) {
      localStorage.clear()
      NegativeLogin();
      console.log(error);
    }
  };

  const  onSubmitRegister = async (data :IUser):Promise<void> => {
    try {
      const resposta = await instance.post<IUser>(`/users`, data)
      SucessRegister();
      navigate("/")
    } catch (error) {      
      NegativeRergister(`${error}`);
      console.log(error);
    }
   };

  return (
    <RequestContext.Provider value={{ submitLogin, onSubmitRegister }}>
      {children}
    </RequestContext.Provider>
  );
};
