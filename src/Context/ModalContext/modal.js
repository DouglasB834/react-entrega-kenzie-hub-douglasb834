import { createContext, useState } from "react";



export const  ModalContext =createContext({})

export  const ModalProvide = ({children})=>{

    const [showEditModal, setShowEditModal] = useState(false)

    const closeModalEdit =()=>{
        setShowEditModal(false)
    }
    const openModalEdit =()=>{
        setShowEditModal(true)
    }

    const getTecnologia =()=>{
        
        
    }




    return(
        <ModalContext.Provider value={{showEditModal,setShowEditModal , openModalEdit, closeModalEdit}}>
            {children}
        </ModalContext.Provider>
    )



}

