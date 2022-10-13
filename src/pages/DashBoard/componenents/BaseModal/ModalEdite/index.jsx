import React, { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  FormStyled,
  InputStyled,
  SelectStyled,
} from "../../../../../components/Form/Style";
import { DataContext } from "../../../../../Context/DataContext/context";
import { ModalContext } from "../../../../../Context/ModalContext/modal";
import { DivtitleModal, ModalStyled, OverlayStyled } from "../style";
import { DivModalEdite } from "./style";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModaEdite = () => {
  const { showEditModal, closeModalEdit,animation, atualizar, deleteTech,  getUpdate } = useContext(ModalContext);
 
 const schema = yup.object().shape({
    status: yup.string().required("Nivel Obrigatório")
 })

const {register, handleSubmit} = useForm({
  resolver: yupResolver(schema)
})
const update =(data)=>{ 
  atualizar(data)
  closeModalEdit(false)
 
}

// console.log(getUpdate)

  return (
    <>
      {showEditModal && (
        <ModalStyled>
          <OverlayStyled>
            <DivModalEdite className={animation}>
              <DivtitleModal>
                <p>Tecnologia Detalhes</p>
                <span onClick={()=> closeModalEdit()}>
                  <MdOutlineClose />
                </span>
              </DivtitleModal>

              <FormStyled onSubmit={( handleSubmit(update))}>
                <label htmlFor="tech">techs</label>

                <InputStyled value={getUpdate.title}  placeholder="tech" />


                <label htmlFor="status">Status</label>
                <SelectStyled {...register("status")}>
                  <option>Selcione Nivel</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </SelectStyled>
                <div className="containerBtn">
                  <button className="btnSingForm">Salvar alterações</button>

                  <button className="delitetec" onClick={()=>{
                    deleteTech(getUpdate.id)
                    closeModalEdit(false)
                    
                    }} >Excluir</button>
                </div>
              </FormStyled>
            </DivModalEdite>
          </OverlayStyled>
        </ModalStyled>
      )}
    </>
  );
};
