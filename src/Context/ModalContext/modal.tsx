import { createContext, useContext, useState } from "react";
import { FieldValues } from "react-hook-form";
import { NegativeRergister, SucessLogin } from "../../Api";
import { instance } from "../../Api/instance";
import { addTEch, IModalProvid, IStataUpdade, Ires } from "../../Interface.services/InterfaceModal";
import { IChildren } from "../../Interface.services/servecisData";
import { DataContext } from "../DataContext/context";

export const ModalContext = createContext({}as IModalProvid );

export const ModalProvide = ({ children }:IChildren) => {
  const {token, tecList, setTecList} = useContext(DataContext);

  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [animation, setAnimation] = useState<string>("");
  const [getUpdate, setTgetUpdate] = useState<IStataUpdade>({} as IStataUpdade);

  const openModalEdit = ():void => {
    setShowEditModal(true);
    setAnimation("animate__flipInX");
  };
  const closeModalEdit = ():void => {
    setAnimation("animate__flipOutX");
    setTimeout(() => {
      setShowEditModal(false);
    }, 800);
  };
  const atualizar = async (data: addTEch):Promise<void> => {
    try {
      const res = await instance.put<Ires>(`/users/techs/${getUpdate.id }`, data);
      SucessLogin("atulizado");
      setTecList((oldTech)=>[...oldTech, res.data ])
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = ( id: string):void => {
    try {
      const filter = tecList.filter(tech => tech.id !== id)
      instance.defaults.headers.authorization = `Bearer ${token}`;      
       instance.delete<string>(`/users/techs/${id}`);

      SucessLogin("deletado com sucesso");
      // setTecList(filter)
    } catch (error) {
      console.log(error);
    }
  };

  const addListTecnologias = async (data: FieldValues ):Promise<void> => {
    try {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const res = await instance.post<Ires>(`/users/techs`, data);
      SucessLogin("Cadastrodo com sucesso");
      // setVerificar();
      setTecList((oldTech)=>[...oldTech, res.data ])
    } catch (error) {
      NegativeRergister("select nivel/ tech ja existente");
      console.log(error);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        showEditModal,
        setShowEditModal,
        openModalEdit,
        closeModalEdit,
        animation,
        addListTecnologias,
        deleteTech,
        getUpdate,
        setTgetUpdate,
        atualizar,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
