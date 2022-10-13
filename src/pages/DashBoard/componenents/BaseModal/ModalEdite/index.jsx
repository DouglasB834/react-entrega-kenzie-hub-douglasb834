import React, { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  FormStyled,
  SelectStyled,
} from "../../../../../components/Form/Style";
import { DataContext } from "../../../../../Context/DataContext/context";
import { ModalContext } from "../../../../../Context/ModalContext/modal";
import { DivtitleModal, ModalStyled, OverlayStyled } from "../style";
import { DivModalEdite } from "./style";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModaEdite = ({tech}) => {
  const { showEditModal, closeModalEdit,animation, atualizar, deleteTech } = useContext(ModalContext);
 
 const schema = yup.object().shape({
    status: yup.string().required("Nivel Obrigatório")
 })

const {register, handleSubmit} = useForm({
  resolver: yupResolver(schema)
})
const update =(data)=>{
  atualizar(data)
}

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

              <FormStyled onSubmit={(event)=> event.preventDefault()}>
              
                <label htmlFor="status">Status</label>
                <SelectStyled {...register("status")}>
                  <option>Selcione Nivel</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </SelectStyled>
                <div className="containerBtn">
                  <button className="btnSingForm">Salvar alterações</button>

                  <button className="delitetec" onClick={()=>deleteTech(tech.id)} >Excluir</button>
                </div>
              </FormStyled>
            </DivModalEdite>
          </OverlayStyled>
        </ModalStyled>
      )}
    </>
  );
};
