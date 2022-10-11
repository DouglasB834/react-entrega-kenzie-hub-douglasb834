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

export const ModaEdite = () => {
  const { showEditModal, closeModalEdit } = useContext(ModalContext);


  return (
    <>
      {showEditModal && (
        <ModalStyled>
          <OverlayStyled>
            <DivModalEdite className="animate__flipInX">
              <DivtitleModal>
                <p>Tecnologia Detalhes</p>
                <span onClick={()=> closeModalEdit()}>
                  <MdOutlineClose />
                </span>
              </DivtitleModal>

              <FormStyled>
                <label htmlFor="tec">Nome do Projeto</label>
                <InputStyled
                  id="tec"
                  type="text"
                  placeholder="exemplo Material Ul"
                />

                <label htmlFor="status">Status</label>
                <SelectStyled>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </SelectStyled>
                <div className="containerBtn">
                  <button className="btnSingForm">Salvar alterações</button>
                  <button className="delitetec">Excluir</button>
                </div>
              </FormStyled>
            </DivModalEdite>
          </OverlayStyled>
        </ModalStyled>
      )}
    </>
  );
};
