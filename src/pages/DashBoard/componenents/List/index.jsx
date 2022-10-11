import { DivList, LiStyled } from "./style"
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { ModalContext } from "../../../../Context/ModalContext/modal";

export const List =()=>{
    const {setShowEditModal,openModalEdit } = useContext(ModalContext) 
    // const showModal= ()=>{
    //     setShowEditModal(true)
    // }
    
    return(
    <LiStyled onClick={()=>openModalEdit()} >
        <h4>nome </h4>

        <DivList>
            <p>nivel</p>
            <FaRegTrashAlt />
        </DivList>
    </LiStyled>

    )



}