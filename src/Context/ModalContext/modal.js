import { createContext, useState } from "react";
import { NegativeRergister, SucessLogin } from "../../Api";
import { instance } from "../../Api/instance";

export const  ModalContext =createContext({})

export  const ModalProvide = ({children})=>{

    const [showEditModal, setShowEditModal] = useState(false)
    const [animation, setAnimation] =useState("")

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

    const addListTecnologias = async (data) =>{

        try {
           const res = await instance.post(`/users/techs`,data )
           SucessLogin("Cadastrodo com sucesso")
            console.log(res)  

        } catch (error) {
            NegativeRergister("Selecione um nivel")
            console.log(error)
        }

    }

    return(
        <ModalContext.Provider value={{showEditModal,setShowEditModal , openModalEdit, closeModalEdit,animation, addListTecnologias}}>
            {children}
        </ModalContext.Provider>
    )



}

