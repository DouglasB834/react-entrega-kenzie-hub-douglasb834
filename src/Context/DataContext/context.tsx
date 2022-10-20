import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { instance } from "../../Api/instance";
import {
  IChildren,
  IPropsValue,
  ITechs,
  IUser,
} from "../../Interface.services/servecisData";

export const DataContext = createContext({} as IPropsValue);

export const DataProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem("@hub:token");
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>({} as IUser);

  const [isModal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const [closeAnimation, setCloseAnimation] = useState("");
  const [deletAnimation, setDeletAnimation] = useState("animate__fadeInUp");
  const [tecList, setTecList] = useState<ITechs[]>([]);

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
  }, [tecList, token]);

  return (
    <DataContext.Provider
      value={{
        navigate,
        token,
        user,
        setUser,
        isModal,
        setModal,
        loading,
        showModal,
        closeAnimation,
        add,
        deletAnimation,
        tecList,
        setTecList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
