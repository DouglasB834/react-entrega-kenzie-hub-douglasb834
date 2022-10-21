import React, { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  FormStyled,
  InputStyled,
  SelectStyled,
} from "../../../../../components/Form/Style";
import { ModalContext } from "../../../../../Context/ModalContext/modal";
import { DivtitleModal, ModalStyled, OverlayStyled } from "../style";
import { DivModalEdite } from "./style";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IStataUpdade } from "../../../../../Interface.services/InterfaceModal";

export const ModaEdite = () => {
  const { showEditModal, closeModalEdit,animation, atualizar, deleteTech,  getUpdate } = useContext(ModalContext);
 
 const schema = yup.object().shape({
    status: yup.string().required("Nivel Obrigatório")
 })


const {register, handleSubmit} = useForm<IStataUpdade>({
  resolver: yupResolver(schema)
})
const update =(data:IStataUpdade)=>{ 
  atualizar(data)
  closeModalEdit()
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

              <FormStyled onSubmit={( handleSubmit(update))}>
                <label htmlFor="tech">techs</label>

                <InputStyled  placeholder={getUpdate.title} disabled/>


                <label htmlFor="status">Status</label>
                <SelectStyled {...register("status")}>
                  <option>Selecione Nivel</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </SelectStyled>
                <div className="containerBtn">
                  <button className="btnSingForm">Salvar alterações</button>

                  <button className="delitetec" onClick={()=>{
                    deleteTech(getUpdate.id)
                    closeModalEdit()
                    
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
