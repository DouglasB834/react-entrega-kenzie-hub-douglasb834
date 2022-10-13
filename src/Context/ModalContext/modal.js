import { createContext, useContext, useState } from "react";
import { NegativeRergister, SucessLogin } from "../../Api";
import { instance } from "../../Api/instance";
import { DataContext } from "../DataContext/context";

export const  ModalContext =createContext({})
export  const ModalProvide = ({children})=>{
    const {setVerificar} = useContext(DataContext)  
    const [showEditModal, setShowEditModal] = useState(false)
    const [animation, setAnimation] =useState("")


    const [getUpdate, setTgetUpdate] = useState();

    const openModalEdit =()=>{
        setShowEditModal(true)
        setAnimation("animate__flipInX")
    }
    const closeModalEdit =()=>{
        setAnimation("animate__flipOutX")
        setTimeout(()=>{
            setShowEditModal(false)
        },800)
    }
     const atualizar = async (data)=>{
        console.log(data)
        try {
            instance.put(`/users/techs/${getUpdate.id}`,data);  
            SucessLogin("atulizado")
            setVerificar()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTech =(id)=>{
        try {
          instance.delete(`/users/techs/${id}`)
          SucessLogin("deletado com sucesso")
          setVerificar()
        } catch (error) {
          console.log(error)
        }
      }

    const addListTecnologias = async (data) =>{
        try {
           const res = await instance.post(`/users/techs`,data )
           SucessLogin("Cadastrodo com sucesso")
            console.log(res)  
            setVerificar()
        } catch (error) {
            NegativeRergister("select nivel/ tech ja existente")
            console.log(error)
        }
    }

    return(
        <ModalContext.Provider value={{showEditModal,setShowEditModal , openModalEdit, closeModalEdit,animation, addListTecnologias , deleteTech, getUpdate, setTgetUpdate, atualizar}}>
            {children}
        </ModalContext.Provider>
    )



}

