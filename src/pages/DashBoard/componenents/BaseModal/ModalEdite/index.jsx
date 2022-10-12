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

export const ModaEdite = ({tech}) => {
  const { showEditModal, closeModalEdit,animation } = useContext(ModalContext);
  const { deleteTech, user } = useContext(DataContext);
 
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
                <label htmlFor="tec">Nome do Projeto</label>
                <InputStyled
                  id="tec"
                  type="text"
                  placeholder="exemplo Material Ul"
                />

                <label htmlFor="status">Status</label>
                <SelectStyled>
                  <option>Selcione Nivel</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </SelectStyled>
                <div className="containerBtn">
                  <button className="btnSingForm">Salvar alterações</button>
                  <button className="delitetec" onClick={()=>deleteTech(tech)} >Excluir</button>
                </div>
              </FormStyled>
            </DivModalEdite>
          </OverlayStyled>
        </ModalStyled>
      )}
    </>
  );
};
