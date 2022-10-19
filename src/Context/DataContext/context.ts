import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { instance } from "../../Api/instance";
import { IChildren, IPropsValue, IUser } from "../../Interface.services/servecis";

// interface ichildren {
//   children: React.ReactNode;
// }

// export interface IProps {
//   user: IUser;
//   setModal: Dispatch<SetStateAction<boolean>>;
//   isModal: boolean;
//   setLoading: Dispatch<SetStateAction<boolean>>;
//   loading: boolean;
//   onSubmitRegister: (data: IUser) => void;
// }

// export interface ITechs {
//   id: string;
//   title: string;
//   status: string;
// }

// export interface IUser {
//   id: string;
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword?: string;
//   bio?: string;
//   contact?: string;
//   course_module?: string;
//   techs: ITechs[];
// }

export const DataContext = createContext({} as IPropsValue );

export const DataProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem("@hub:token");
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>();

  const [isModal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  

  const [closeAnimation, setCloseAnimation] = useState("");
  const [deletAnimation, setDeletAnimation] = useState("animate__fadeInUp");
  const [tecList, setTecList] = useState();

  const showModal = () => {
    setCloseAnimation("containerCadstrar animate__flipOutY");
    setTimeout(() => {
      setModal(false);
    }, 650);
  };

  const add = () => {
    setModal(true);
    setCloseAnimation("containerCadstrar animate__flipInY");
  };

  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        try {
          instance.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await instance.get(`/profile`);
          setUser(data);
          setTecList(data.techs);
        } catch (error) {
          //erros se nao tiver token
          console.log(error);
        }
      }
      setLoading(false);
    };
    loginUser();
  }, [tecList]);

  // console.log(tech)

  return (
    <DataContext.Provider
      value={{ navigate, token, user, setUser, sModal, setModal, loading, showModal, closeAnimation, add, deletAnimation, tecList, setTecList }}>
      {children}
    </DataContext.Provider>
  );
};
